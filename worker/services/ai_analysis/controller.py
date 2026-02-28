"""
AI Analysis Service Controller
Handles AI-powered analysis of meeting transcripts using Google GenAI
"""

import asyncio
import json
from typing import Dict, Any, Optional
from datetime import datetime

from ..base_service import BaseWorkerService
from ...shared.config import config, MINIO_BUCKETS, WORKER_QUEUES
from ...shared.minio_client import MinIOClientFactory

class AIAnalysisService(BaseWorkerService):
    """Service for AI-powered meeting analysis"""
    
    def __init__(self):
        super().__init__("ai_analysis")
        self.genai_client = None
    
    async def initialize(self) -> bool:
        """Initialize AI analysis service"""
        if not await super().initialize():
            return False
        
        try:
            # Import Google GenAI
            import google.generativeai as genai
            
            # Initialize GenAI client
            if not config.genai_api_key:
                raise Exception("GENAI_API_KEY not configured")
            
            genai.configure(api_key=config.genai_api_key)
            self.genai_client = genai.GenerativeModel('gemini-pro')
            
            print("AI Analysis service initialized with Google GenAI")
            return True
            
        except Exception as e:
            print(f"Failed to initialize AI analysis service: {e}")
            return False
    
    def get_job_queue_name(self) -> str:
        """Get the queue name for AI analysis jobs"""
        return WORKER_QUEUES["ai_analysis_jobs"]
    
    async def process_job(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process AI analysis job"""
        job_id = job_data.get("job_id")
        
        try:
            await self.start_job(job_id, job_data)
            
            # Extract job parameters
            transcript_url = job_data.get("transcript_url")
            meeting_metadata = job_data.get("meeting_metadata", {})
            options = job_data.get("options", {})
            
            await self.update_job_status(job_id, "downloading_transcript", progress=10)
            
            # Download transcript from MinIO
            transcript_content = await self._download_transcript_from_url(transcript_url)
            if not transcript_content:
                raise Exception("Failed to download transcript file")
            
            await self.update_job_status(job_id, "analyzing", progress=30)
            
            # Perform AI analysis
            analysis_result = await self._analyze_transcript(
                transcript_content, meeting_metadata, options, job_id
            )
            
            await self.update_job_status(job_id, "uploading_results", progress=90)
            
            # Upload analysis to MinIO
            analysis_url = await self._upload_analysis(analysis_result, job_id)
            
            final_result = {
                "job_id": job_id,
                "analysis_url": analysis_url,
                "analysis_data": analysis_result,
                "meeting_metadata": meeting_metadata,
                "processed_at": datetime.now().isoformat()
            }
            
            await self.complete_job(job_id, final_result)
            return final_result
            
        except Exception as e:
            await self.fail_job(job_id, str(e))
            raise
    
    async def _download_transcript_from_url(self, transcript_url: str) -> Optional[str]:
        """Download transcript from MinIO URL"""
        try:
            # Parse URL to extract bucket and object key
            from urllib.parse import urlparse
            parsed = urlparse(transcript_url)
            path_parts = parsed.path.lstrip('/').split('/', 1)
            
            if len(path_parts) < 2:
                raise Exception("Invalid MinIO URL format")
            
            bucket_name = path_parts[0]
            object_key = path_parts[1]
            
            # Download from MinIO
            transcript_bytes = await self.minio_client.download_file(bucket_name, object_key)
            return transcript_bytes.decode('utf-8')
            
        except Exception as e:
            print(f"Failed to download transcript: {e}")
            return None
    
    async def _analyze_transcript(self, transcript_content: str, 
                              meeting_metadata: Dict[str, Any],
                              options: Dict[str, Any],
                              job_id: str) -> Dict[str, Any]:
        """Analyze transcript using Google GenAI"""
        try:
            # Prepare analysis prompt
            prompt = self._build_analysis_prompt(transcript_content, meeting_metadata, options)
            
            # Run analysis in thread pool to avoid blocking
            loop = asyncio.get_event_loop()
            
            def analyze():
                response = self.genai_client.generate_content(prompt)
                return response.text
            
            # Get AI response
            ai_response = await loop.run_in_executor(None, analyze)
            
            # Parse and structure the response
            structured_analysis = self._parse_ai_response(ai_response, meeting_metadata)
            
            return structured_analysis
            
        except Exception as e:
            print(f"AI analysis error: {e}")
            raise
    
    def _build_analysis_prompt(self, transcript_content: str, 
                           meeting_metadata: Dict[str, Any],
                           options: Dict[str, Any]) -> str:
        """Build comprehensive analysis prompt"""
        
        # Extract key information from transcript
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
        """Parse and validate AI response"""
        try:
            # Try to parse as JSON
            analysis_data = json.loads(ai_response)
            
            # Validate and enhance with metadata
            enhanced_analysis = {
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
            
            return enhanced_analysis
            
        except json.JSONDecodeError:
            # Fallback if JSON parsing fails
            print("Failed to parse AI response as JSON, using fallback structure")
            return self._create_fallback_analysis(ai_response, meeting_metadata)
    
    def _calculate_confidence_score(self, analysis_data: Dict[str, Any]) -> float:
        """Calculate confidence score for the analysis"""
        score = 0.0
        total_checks = 0
        
        # Check for required fields
        required_fields = ["meeting_summary", "key_points", "action_items"]
        for field in required_fields:
            total_checks += 1
            if field in analysis_data and analysis_data[field]:
                score += 1.0
        
        # Check data quality
        if "action_items" in analysis_data:
            action_items = analysis_data["action_items"]
            if isinstance(action_items, list) and len(action_items) > 0:
                score += 0.5
            total_checks += 0.5
        
        return min(score / total_checks, 1.0) if total_checks > 0 else 0.0
    
    def _create_fallback_analysis(self, ai_response: str, 
                               meeting_metadata: Dict[str, Any]) -> Dict[str, Any]:
        """Create fallback analysis if JSON parsing fails"""
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
        """Upload analysis to MinIO"""
        try:
            # Convert to JSON
            analysis_json = json.dumps(analysis_result, indent=2, ensure_ascii=False)
            object_key = f"analysis/{job_id}.json"
            
            # Upload analysis
            url = await self.minio_client.upload_bytes(
                MINIO_BUCKETS["analysis"],
                object_key,
                analysis_json.encode('utf-8'),
                "application/json"
            )
            
            return url
            
        except Exception as e:
            print(f"Failed to upload analysis: {e}")
            raise

# FastAPI router for AI analysis service
from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import Optional

class AIAnalysisRequest(BaseModel):
    transcript_url: str
    meeting_metadata: Optional[Dict[str, Any]] = {}
    options: Optional[Dict[str, Any]] = {}

class AIAnalysisResponse(BaseModel):
    job_id: str
    status: str
    message: str

def create_ai_analysis_router() -> APIRouter:
    """Create FastAPI router for AI analysis service"""
    router = APIRouter(prefix="/ai", tags=["ai_analysis"])
    
    # Global service instance
    ai_analysis_service = None
    
    @router.post("/analyze", response_model=AIAnalysisResponse)
    async def create_analysis_job(request: AIAnalysisRequest, background_tasks: BackgroundTasks):
        """Create a new AI analysis job"""
        global ai_analysis_service
        
        if not ai_analysis_service:
            raise HTTPException(status_code=503, detail="AI Analysis service not available")
        
        try:
            # Create job ID
            import uuid
            job_id = str(uuid.uuid4())
            
            # Prepare job data
            job_data = {
                "job_id": job_id,
                "transcript_url": request.transcript_url,
                "meeting_metadata": request.meeting_metadata or {},
                "options": request.options or {}
            }
            
            # Publish to message queue
            success = await ai_analysis_service.message_queue.publish(
                WORKER_QUEUES["ai_analysis_jobs"],
                job_data
            )
            
            if not success:
                raise HTTPException(status_code=500, detail="Failed to queue AI analysis job")
            
            return AIAnalysisResponse(
                job_id=job_id,
                status="queued",
                message="AI analysis job queued successfully"
            )
            
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
    
    @router.get("/status/{job_id}")
    async def get_analysis_status(job_id: str):
        """Get AI analysis job status"""
        # This would typically query a database or cache for job status
        # For now, return a placeholder
        return {
            "job_id": job_id,
            "status": "processing",
            "message": "Job is being processed"
        }
    
    @router.get("/health")
    async def health_check():
        """Health check endpoint"""
        global ai_analysis_service
        
        if not ai_analysis_service:
            return {"status": "unhealthy", "message": "Service not initialized"}
        
        health = await ai_analysis_service.health_check()
        return health
    
    return router

# Initialize service function
async def initialize_ai_analysis_service():
    """Initialize AI analysis service"""
    service = AIAnalysisService()
    await service.initialize()
    return service