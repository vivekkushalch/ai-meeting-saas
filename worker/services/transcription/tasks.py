"""
Celery tasks for audio transcription service
"""

import logging
import asyncio
from typing import Dict, Any
from datetime import datetime

from celery import Task

from core.celery import celery_app
from core.tasks import TaskResult
from core.config import config
from .controller import TranscriptionController

logger = logging.getLogger(__name__)

class TranscriptionTask(Task):
    """Custom task class for transcription"""
    
    def on_retry(self, exc, task_id, args, kwargs, einfo):
        logger.warning(f"Transcription task {task_id} retrying: {exc}")
        super().on_retry(exc, task_id, args, kwargs, einfo)
    
    def on_failure(self, exc, task_id, args, kwargs, einfo):
        logger.error(f"Transcription task {task_id} failed: {exc}")
        super().on_failure(exc, task_id, args, kwargs, einfo)

@celery_app.task(
    bind=True,
    base=TranscriptionTask,
    max_retries=3,
    default_retry_delay=60,
    soft_time_limit=1800,
    time_limit=3600,
    autoretry_for=(Exception,),
    retry_backoff=True,
    retry_backoff_max=300,
    retry_jitter=True
)
def transcribe_audio(self, job_data: Dict[str, Any]):
    """Transcribe audio file"""
    job_id = job_data.get("job_id")
    logger.info(f"Starting transcription job {job_id}")
    
    try:
        if not job_id or not job_data.get("audio_url"):
            raise ValueError("Missing required job_id or audio_url")
        
        # Update progress
        self.update_state(
            state='PROGRESS',
            meta=TaskResult.retry_info(
                retry_count=0, max_retries=3,
                reason="Starting transcription",
                task_id=self.request.id
            )
        )
        
        # Process transcription
        controller = TranscriptionController()
        result = asyncio.run(controller.transcribe_audio(job_data))
        
        logger.info(f"Transcription job {job_id} completed")
        return TaskResult.success(result, self.request.id)
        
    except Exception as exc:
        logger.error(f"Transcription job {job_id} failed: {exc}")
        
        if self.request.retries < self.max_retries:
            retry_delay = min(60 * (2 ** self.request.retries), 300)
            logger.info(f"Retrying transcription job {job_id} in {retry_delay}s")
            raise self.retry(exc=exc, countdown=retry_delay)
        
        return TaskResult.failure(
            f"Transcription failed after {self.request.retries} retries: {str(exc)}",
            self.request.id,
            exc
        )

@celery_app.task(
    bind=True,
    max_retries=3,
    default_retry_delay=60,
    soft_time_limit=3600,
    time_limit=7200
)
def transcribe_and_analyze(self, job_data: Dict[str, Any]):
    """Combined transcription + AI analysis"""
    try:
        # First transcribe
        transcription_result = transcribe_audio.apply_async(args=[job_data]).get()
        
        if transcription_result["status"] == "FAILURE":
            raise Exception(f"Transcription failed: {transcription_result['error']}")
        
        # Then analyze
        from services.ai_analysis.tasks import analyze_transcript
        
        ai_job_data = {
            "job_id": f"{job_data['job_id']}_ai",
            "transcript_url": transcription_result["result"]["transcript_url"],
            "meeting_metadata": job_data.get("meeting_metadata", {}),
            "options": job_data.get("ai_options", {})
        }
        
        analysis_result = analyze_transcript.apply_async(args=[ai_job_data]).get()
        
        if analysis_result["status"] == "FAILURE":
            raise Exception(f"AI analysis failed: {analysis_result['error']}")
        
        return TaskResult.success({
            "transcription": transcription_result["result"],
            "analysis": analysis_result["result"],
            "job_id": job_data["job_id"]
        }, self.request.id)
        
    except Exception as exc:
        logger.error(f"Combined transcription and analysis failed: {exc}")
        return TaskResult.failure(str(exc), self.request.id, exc)
