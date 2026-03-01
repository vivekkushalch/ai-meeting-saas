"""
Celery tasks for AI analysis service
"""

import logging
from typing import Dict, Any
from datetime import datetime

from celery import Task

from core.celery import celery_app
from core.tasks import TaskResult
from core.config import config
from .controller import AIAnalysisController

logger = logging.getLogger(__name__)

class AIAnalysisTask(Task):
    """Custom task class for AI analysis"""
    
    def on_retry(self, exc, task_id, args, kwargs, einfo):
        logger.warning(f"AI analysis task {task_id} retrying: {exc}")
        super().on_retry(exc, task_id, args, kwargs, einfo)
    
    def on_failure(self, exc, task_id, args, kwargs, einfo):
        logger.error(f"AI analysis task {task_id} failed: {exc}")
        super().on_failure(exc, task_id, args, kwargs, einfo)

@celery_app.task(
    bind=True,
    base=AIAnalysisTask,
    max_retries=3,
    default_retry_delay=60,
    soft_time_limit=900,
    time_limit=1800,
    autoretry_for=(Exception,),
    retry_backoff=True,
    retry_backoff_max=300,
    retry_jitter=True
)
def analyze_transcript(self, job_data: Dict[str, Any]):
    """Analyze transcript"""
    job_id = job_data.get("job_id")
    
    # Handle batch jobs
    if "batch_id" in job_data and "transcript_jobs" in job_data:
        return _process_batch_analysis(self, job_data)
    
    logger.info(f"Starting AI analysis job {job_id}")
    
    try:
        if not job_id or not job_data.get("transcript_url"):
            raise ValueError("Missing required job_id or transcript_url")
        
        # Update progress
        self.update_state(
            state='PROGRESS',
            meta=TaskResult.retry_info(
                retry_count=0, max_retries=3,
                reason="Starting AI analysis",
                task_id=self.request.id
            )
        )
        
        # Process analysis
        controller = AIAnalysisController()
        result = asyncio.run(controller.analyze_transcript(job_data))
        
        logger.info(f"AI analysis job {job_id} completed")
        return TaskResult.success(result, self.request.id)
        
    except Exception as exc:
        logger.error(f"AI analysis job {job_id} failed: {exc}")
        
        if self.request.retries < self.max_retries:
            retry_delay = min(60 * (2 ** self.request.retries), 300)
            logger.info(f"Retrying AI analysis job {job_id} in {retry_delay}s")
            raise self.retry(exc=exc, countdown=retry_delay)
        
        return TaskResult.failure(
            f"AI analysis failed after {self.request.retries} retries: {str(exc)}",
            self.request.id,
            exc
        )

@celery_app.task(
    bind=True,
    max_retries=2,
    default_retry_delay=120,
    soft_time_limit=1800,
    time_limit=3600
)
def batch_analyze_transcripts(self, batch_job_data: Dict[str, Any]):
    """Analyze multiple transcripts"""
    try:
        batch_id = batch_job_data.get("batch_id")
        logger.info(f"Starting batch analysis {batch_id}")
        
        controller = AIAnalysisController()
        result = asyncio.run(controller.batch_analyze_transcripts(batch_job_data))
        
        logger.info(f"Batch analysis {batch_id} completed")
        return TaskResult.success(result, self.request.id)
        
    except Exception as exc:
        logger.error(f"Batch analysis failed: {exc}")
        return TaskResult.failure(str(exc), self.request.id, exc)

def _process_batch_analysis(task_instance, batch_job_data: Dict[str, Any]):
    """Process batch analysis job"""
    try:
        batch_id = batch_job_data.get("batch_id")
        transcript_jobs = batch_job_data.get("transcript_jobs", [])
        
        logger.info(f"Starting batch analysis {batch_id} with {len(transcript_jobs)} transcripts")
        
        controller = AIAnalysisController()
        result = asyncio.run(controller.batch_analyze_transcripts(batch_job_data))
        
        return TaskResult.success(result, task_instance.request.id)
        
    except Exception as exc:
        logger.error(f"Batch analysis failed: {exc}")
        return TaskResult.failure(str(exc), task_instance.request.id, exc)
