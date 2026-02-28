"""
Transcription Service Controller
Handles audio transcription and diarization using WhisperX
"""

import os
import tempfile
import asyncio
from typing import Dict, Any, Optional
from pathlib import Path

from ..base_service import BaseWorkerService
from ...shared.config import config, MINIO_BUCKETS, WORKER_QUEUES
from ...shared.minio_client import MinIOClientFactory

class TranscriptionService(BaseWorkerService):
    """Service for audio transcription and diarization"""
    
    def __init__(self):
        super().__init__("transcription")
        self.whisper_model = None
        self.diarization_model = None
    
    async def initialize(self) -> bool:
        """Initialize transcription service"""
        if not await super().initialize():
            return False
        
        try:
            # Import WhisperX here to avoid import issues
            import whisperx
            import torch
            
            # Load WhisperX model
            device = "cuda" if torch.cuda.is_available() and config.whisper_device == "auto" else config.whisper_device
            self.whisper_model = whisperx.load_model(config.whisper_model, device=device)
            
            # Load diarization model if needed
            self.diarization_model = whisperx.DiarizationPipeline(
                use_auth_token=config.hf_api_key if config.hf_api_key else None,
                device=device
            )
            
            print(f"Transcription service initialized with model: {config.whisper_model}")
            return True
            
        except Exception as e:
            print(f"Failed to initialize transcription models: {e}")
            return False
    
    def get_job_queue_name(self) -> str:
        """Get the queue name for transcription jobs"""
        return WORKER_QUEUES["transcription_jobs"]
    
    async def process_job(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process transcription job"""
        job_id = job_data.get("job_id")
        
        try:
            await self.start_job(job_id, job_data)
            
            # Extract job parameters
            audio_url = job_data.get("audio_url")
            options = job_data.get("options", {})
            diarize = options.get("diarize", True)
            language = options.get("language", "en")
            min_speakers = options.get("min_speakers", 1)
            max_speakers = options.get("max_speakers", 10)
            
            await self.update_job_status(job_id, "downloading_audio", progress=10)
            
            # Download audio from MinIO
            audio_bytes = await self._download_audio_from_url(audio_url)
            if not audio_bytes:
                raise Exception("Failed to download audio file")
            
            await self.update_job_status(job_id, "transcribing", progress=30)
            
            # Save to temporary file
            with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as temp_file:
                temp_file.write(audio_bytes)
                temp_audio_path = temp_file.name
            
            try:
                # Transcribe audio
                result = await self._transcribe_audio(
                    temp_audio_path, language, diarize, 
                    min_speakers, max_speakers, job_id
                )
                
                await self.update_job_status(job_id, "uploading_results", progress=90)
                
                # Upload transcript to MinIO
                transcript_url = await self._upload_transcript(result, job_id)
                
                # Clean up temporary file
                os.unlink(temp_audio_path)
                
                final_result = {
                    "job_id": job_id,
                    "transcript_url": transcript_url,
                    "transcript_data": result,
                    "speakers": result.get("speakers", []),
                    "duration_seconds": result.get("duration", 0),
                    "language": language,
                    "diarized": diarize
                }
                
                await self.complete_job(job_id, final_result)
                return final_result
                
            except Exception as e:
                # Clean up on error
                if os.path.exists(temp_audio_path):
                    os.unlink(temp_audio_path)
                raise e
                
        except Exception as e:
            await self.fail_job(job_id, str(e))
            raise
    
    async def _download_audio_from_url(self, audio_url: str) -> Optional[bytes]:
        """Download audio file from MinIO URL"""
        try:
            # Parse URL to extract bucket and object key
            from urllib.parse import urlparse
            parsed = urlparse(audio_url)
            path_parts = parsed.path.lstrip('/').split('/', 1)
            
            if len(path_parts) < 2:
                raise Exception("Invalid MinIO URL format")
            
            bucket_name = path_parts[0]
            object_key = path_parts[1]
            
            # Download from MinIO
            return await self.minio_client.download_file(bucket_name, object_key)
            
        except Exception as e:
            print(f"Failed to download audio: {e}")
            return None
    
    async def _transcribe_audio(self, audio_path: str, language: str, 
                             diarize: bool, min_speakers: int, 
                             max_speakers: int, job_id: str) -> Dict[str, Any]:
        """Transcribe audio using WhisperX"""
        try:
            # Run transcription in thread pool to avoid blocking
            loop = asyncio.get_event_loop()
            
            def transcribe():
                # Transcribe audio
                result = self.whisper_model.transcribe(
                    audio_path, 
                    language=language if language != "auto" else None
                )
                
                if diarize and self.diarization_model:
                    # Add speaker diarization
                    diarize_segments = self.diarization_model(audio_path)
                    result = whisperx.assign_word_speakers(diarize_segments, result)
                
                return result
            
            # Run transcription
            transcription_result = await loop.run_in_executor(None, transcribe)
            
            # Convert to VTT format
            vtt_content = self._convert_to_vtt(transcription_result)
            
            # Extract speaker information
            speakers = []
            if diarize and "segments" in transcription_result:
                speaker_set = set()
                for segment in transcription_result["segments"]:
                    if "speaker" in segment:
                        speaker_set.add(segment["speaker"])
                speakers = sorted(list(speaker_set))
            
            return {
                "vtt_content": vtt_content,
                "segments": transcription_result.get("segments", []),
                "language": transcription_result.get("language", language),
                "speakers": speakers,
                "duration": transcription_result.get("duration", 0)
            }
            
        except Exception as e:
            print(f"Transcription error: {e}")
            raise
    
    def _convert_to_vtt(self, transcription_result: Dict[str, Any]) -> str:
        """Convert transcription result to VTT format"""
        vtt_lines = ["WEBVTT", ""]
        
        segments = transcription_result.get("segments", [])
        for i, segment in enumerate(segments):
            start_time = segment.get("start", 0)
            end_time = segment.get("end", 0)
            text = segment.get("text", "")
            speaker = segment.get("speaker", "Unknown")
            
            # Format timestamps
            start_vtt = self._format_timestamp(start_time)
            end_vtt = self._format_timestamp(end_time)
            
            vtt_lines.append(f"{i + 1}")
            vtt_lines.append(f"{start_vtt} --> {end_vtt}")
            vtt_lines.append(f"[{speaker}] {text}")
            vtt_lines.append("")
        
        return "\n".join(vtt_lines)
    
    def _format_timestamp(self, seconds: float) -> str:
        """Format seconds to VTT timestamp format"""
        hours = int(seconds // 3600)
        minutes = int((seconds % 3600) // 60)
        secs = seconds % 60
        return f"{hours:02d}:{minutes:02d}:{secs:06.3f}"
    
    async def _upload_transcript(self, result: Dict[str, Any], job_id: str) -> str:
        """Upload transcript to MinIO"""
        try:
            vtt_content = result["vtt_content"]
            object_key = f"transcripts/{job_id}.vtt"
            
            # Upload VTT content
            url = await self.minio_client.upload_bytes(
                MINIO_BUCKETS["transcripts"],
                object_key,
                vtt_content.encode('utf-8'),
                "text/vtt"
            )
            
            return url
            
        except Exception as e:
            print(f"Failed to upload transcript: {e}")
            raise

# FastAPI router for transcription service
from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import Optional

class TranscriptionRequest(BaseModel):
    audio_url: str
    options: Optional[Dict[str, Any]] = {}

class TranscriptionResponse(BaseModel):
    job_id: str
    status: str
    message: str

def create_transcription_router() -> APIRouter:
    """Create FastAPI router for transcription service"""
    router = APIRouter(prefix="/transcribe", tags=["transcription"])
    
    # Global service instance
    transcription_service = None
    
    @router.post("/job", response_model=TranscriptionResponse)
    async def create_transcription_job(request: TranscriptionRequest, background_tasks: BackgroundTasks):
        """Create a new transcription job"""
        global transcription_service
        
        if not transcription_service:
            raise HTTPException(status_code=503, detail="Transcription service not available")
        
        try:
            # Create job ID
            import uuid
            job_id = str(uuid.uuid4())
            
            # Prepare job data
            job_data = {
                "job_id": job_id,
                "audio_url": request.audio_url,
                "options": request.options or {}
            }
            
            # Publish to message queue
            success = await transcription_service.message_queue.publish(
                WORKER_QUEUES["transcription_jobs"],
                job_data
            )
            
            if not success:
                raise HTTPException(status_code=500, detail="Failed to queue transcription job")
            
            return TranscriptionResponse(
                job_id=job_id,
                status="queued",
                message="Transcription job queued successfully"
            )
            
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
    
    @router.get("/status/{job_id}")
    async def get_transcription_status(job_id: str):
        """Get transcription job status"""
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
        global transcription_service
        
        if not transcription_service:
            return {"status": "unhealthy", "message": "Service not initialized"}
        
        health = await transcription_service.health_check()
        return health
    
    return router

# Initialize service function
async def initialize_transcription_service():
    """Initialize transcription service"""
    service = TranscriptionService()
    await service.initialize()
    return service