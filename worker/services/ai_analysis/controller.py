"""
AI Analysis service controller
Handles AI-powered analysis of meeting transcripts
"""

import asyncio
import json
from typing import Dict, Any, Optional
from datetime import datetime

from core.config import config, BUCKETS
from core.storage import create_storage_client
from core.tasks import TaskResult

class AIAnalysisController:
    """AI Analysis service controller"""
    
    def __init__(self):
        self.storage = create_storage_client()
        self.genai_client = None
    
    async def initialize(self) -> bool:
        """Initialize AI client"""
        try:
            import google.generativeai as genai
            
            if not config.genai_api_key:
                raise Exception("GENAI_API_KEY not configured")
            
            genai.configure(api_key=config.genai_api_key)
            self.genai_client = genai.GenerativeModel('gemini-pro')
            
            return True
            
        except Exception as e:
            raise Exception(f"Failed to initialize AI client: {e}")
    
    async def analyze_transcript(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze transcript"""
        job_id = job_data.get("job_id")
        transcript_url = job_data.get("transcript_url")
        meeting_metadata = job_data.get("meeting_metadata", {})
        options = job_data.get("options", {})
        
        try:
            # Download transcript
            bucket, object_key = self.storage.parse_url(transcript_url)
            transcript_content_bytes = await self.storage.download_file(bucket, object_key)
            transcript_content = transcript_content_bytes.decode('utf-8')
            
            # Analyze with AI
            analysis_result = await self._analyze_with_genai(
                transcript_content, meeting_metadata, options
            )
            
            # Upload analysis
            analysis_url = await self._upload_analysis(analysis_result, job_id)
            
            return {
                "job_id": job_id,
                "analysis_url": analysis_url,
                "analysis_data": analysis_result,
                "meeting_metadata": meeting_metadata,
                "processed_at": datetime.now().isoformat()
            }
            
        except Exception as e:
            raise Exception(f"AI analysis failed: {e}")
    
    async def batch_analyze_transcripts(self, batch_job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze multiple transcripts"""
        batch_id = batch_job_data.get("batch_id")
        transcript_jobs = batch_job_data.get("transcript_jobs", [])
        
        results = []
        failed_jobs = []
        
        for i, job_data in enumerate(transcript_jobs):
            try:
                result = await self.analyze_transcript(job_data)
                results.append(result)
                
            except Exception as e:
                failed_jobs.append({
                    "job_id": job_data.get("job_id"),
                    "error": str(e)
                })
        
        return {
            "batch_id": batch_id,
            "total_transcripts": len(transcript_jobs),
            "successful_analyses": len(results),
            "failed_analyses": len(failed_jobs),
            "results": results,
            "failed_jobs": failed_jobs,
            "processed_at": datetime.now().isoformat()
        }
    
    async def _analyze_with_genai(self, transcript_content: str, 
                              meeting_metadata: Dict[str, Any],
                              options: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze transcript using Google GenAI"""
        if not self.genai_client:
            await self.initialize()
        
        # Build prompt
        prompt = self._build_analysis_prompt(transcript_content, meeting_metadata, options)
        
        # Run analysis in thread pool
        loop = asyncio.get_event_loop()
        
        def analyze():
            response = self.genai_client.generate_content(prompt)
            return response.text
        
        ai_response = await loop.run_in_executor(None, analyze)
        
        # Parse response
        return self._parse_ai_response(ai_response, meeting_metadata)
    
    def _build_analysis_prompt(self, transcript_content: str, 
                           meeting_metadata: Dict[str, Any],
                           options: Dict[str, Any]) -> str:
        """Build analysis prompt"""
        transcript_preview = transcript_content[:2000] + "..." if len(transcript_content) > 2000 else transcript_content
        
        prompt = f"""
        You are an expert meeting analyst. Analyze the following meeting transcript and provide a comprehensive analysis.
        
        MEETING DETAILS:
        {json.dumps(meeting_metadata, indent=2)}
        
        TRANSCRIPT:
        {transcript_preview}
        
        Please provide a detailed analysis in the following JSON format:
        {{
            "meeting_title": "Generated title based on content",
            "meeting_summary": "Comprehensive summary of the meeting",
            "key_points": [
                "Point 1: Important discussion topic",
                "Point 2: Decision made",
                "Point 3: Action item identified"
            ],
            "action_items": [
                {{
                    "title": "Specific action item",
                    "description": "Detailed description of what needs to be done",
                    "priority": "high|medium|low",
                    "assignee": "Person responsible (if identifiable)",
                    "deadline": "Suggested deadline (YYYY-MM-DD)"
                }}
            ],
            "decisions_made": [
                "Decision 1: What was decided",
                "Decision 2: Another decision"
            ],
            "participants": [
                {{
                    "name": "Participant name",
                    "role": "Their role in discussion",
                    "contributions": "Key contributions made"
                }}
            ],
            "sentiment_analysis": {{
                "overall_sentiment": "positive|neutral|negative",
                "engagement_level": "high|medium|low",
                "key_moments": [
                    {{
                        "timestamp": "MM:SS",
                        "description": "What happened",
                        "sentiment": "positive|neutral|negative"
                    }}
                ]
            }},
            "recommendations": [
                "Recommendation 1: Follow-up action",
                "Recommendation 2: Process improvement"
            ],
            "next_meeting_suggestions": {{
                "agenda_items": ["Item 1", "Item 2"],
                "required_attendees": ["Person 1", "Person 2"],
                "preparation_needed": "What to prepare"
            }}
        }}
        
        Ensure the response is valid JSON that can be parsed. Focus on actionable insights and clear organization.
        """
        
        return prompt
    
    def _parse_ai_response(self, ai_response: str, 
                         meeting_metadata: Dict[str, Any]) -> Dict[str, Any]:
        """Parse AI response"""
        try:
            analysis_data = json.loads(ai_response)
            
            return {
                "meeting_title": analysis_data.get("meeting_title", "Meeting Analysis"),
                "meeting_summary": analysis_data.get("meeting_summary", ""),
                "key_points": analysis_data.get("key_points", []),
                "action_items": analysis_data.get("action_items", []),
                "decisions_made": analysis_data.get("decisions_made", []),
                "participants": analysis_data.get("participants", []),
                "sentiment_analysis": analysis_data.get("sentiment_analysis", {}),
                "recommendations": analysis_data.get("recommendations", []),
                "next_meeting_suggestions": analysis_data.get("next_meeting_suggestions", {}),
                "meeting_metadata": meeting_metadata,
                "analysis_timestamp": datetime.now().isoformat(),
                "confidence_score": self._calculate_confidence_score(analysis_data)
            }
            
        except json.JSONDecodeError:
            # Fallback
            return self._create_fallback_analysis(ai_response, meeting_metadata)
    
    def _calculate_confidence_score(self, analysis_data: Dict[str, Any]) -> float:
        """Calculate confidence score"""
        score = 0.0
        total_checks = 0
        
        required_fields = ["meeting_summary", "key_points", "action_items"]
        for field in required_fields:
            total_checks += 1
            if field in analysis_data and analysis_data[field]:
                score += 1.0
        
        if "action_items" in analysis_data:
            action_items = analysis_data["action_items"]
            if isinstance(action_items, list) and len(action_items) > 0:
                score += 0.5
            total_checks += 0.5
        
        return min(score / total_checks, 1.0) if total_checks > 0 else 0.0
    
    def _create_fallback_analysis(self, ai_response: str, 
                               meeting_metadata: Dict[str, Any]) -> Dict[str, Any]:
        """Create fallback analysis"""
        return {
            "meeting_title": "Meeting Analysis",
            "meeting_summary": ai_response[:500] + "..." if len(ai_response) > 500 else ai_response,
            "key_points": [],
            "action_items": [],
            "decisions_made": [],
            "participants": [],
            "sentiment_analysis": {},
            "recommendations": [],
            "next_meeting_suggestions": {},
            "meeting_metadata": meeting_metadata,
            "analysis_timestamp": datetime.now().isoformat(),
            "confidence_score": 0.3,
            "parsing_error": True
        }
    
    async def _upload_analysis(self, analysis_result: Dict[str, Any], job_id: str) -> str:
        """Upload analysis to storage"""
        analysis_json = json.dumps(analysis_result, indent=2, ensure_ascii=False)
        object_key = f"analysis/{job_id}.json"
        
        url = await self.storage.upload_bytes(
            BUCKETS["analysis"],
            object_key,
            analysis_json.encode('utf-8'),
            "application/json"
        )
        
        return url
