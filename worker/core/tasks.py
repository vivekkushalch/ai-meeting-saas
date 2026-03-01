"""
Core Celery tasks
"""

import asyncio
import logging
from datetime import datetime, timedelta

from .celery import celery_app
from .storage import create_storage_client

logger = logging.getLogger(__name__)

@celery_app.task(bind=True, max_retries=3, default_retry_delay=60)
def cleanup_old_results(self):
    """Clean up old processing results"""
    try:
        async def _cleanup():
            storage = create_storage_client()
            await storage.connect()
            
            cutoff_time = datetime.now() - timedelta(hours=24)
            
            for bucket_name in ['transcripts', 'analysis']:
                objects = await storage.list_objects(bucket_name)
                
                for obj in objects:
                    if obj.last_modified < cutoff_time:
                        await storage.delete_object(bucket_name, obj.object_name)
                        logger.info(f"Cleaned up old file: {bucket_name}/{obj.object_name}")
        
        asyncio.run(_cleanup())
        logger.info("Cleanup task completed")
        
    except Exception as exc:
        logger.error(f"Cleanup task failed: {exc}")
        raise self.retry(exc=exc, countdown=60)

@celery_app.task(bind=True, max_retries=3, default_retry_delay=30)
def health_check(self):
    """Periodic health check"""
    try:
        async def _health_check():
            storage = create_storage_client()
            storage_healthy = await storage.connect()
            
            from .celery import celery_app
            inspect = celery_app.control.inspect()
            stats = inspect.stats()
            broker_healthy = bool(stats)
            
            return {
                "storage_healthy": storage_healthy,
                "broker_healthy": broker_healthy,
                "timestamp": datetime.now().isoformat()
            }
        
        result = asyncio.run(_health_check())
        
        if not (result["storage_healthy"] and result["broker_healthy"]):
            raise Exception("Health check failed")
        
        return result
        
    except Exception as exc:
        logger.error(f"Health check error: {exc}")
        raise self.retry(exc=exc, countdown=30)

class TaskResult:
    """Task result utilities"""
    
    @staticmethod
    def success(result_data: dict, task_id: str = None):
        return {
            "status": "SUCCESS",
            "result": result_data,
            "task_id": task_id,
            "timestamp": datetime.now().isoformat()
        }
    
    @staticmethod
    def failure(error_message: str, task_id: str = None, exc_info=None):
        return {
            "status": "FAILURE",
            "error": error_message,
            "task_id": task_id,
            "timestamp": datetime.now().isoformat(),
            "exception": str(exc_info) if exc_info else None
        }
    
    @staticmethod
    def retry_info(retry_count: int, max_retries: int, reason: str, task_id: str = None):
        return {
            "status": "RETRY",
            "retry_count": retry_count,
            "max_retries": max_retries,
            "reason": reason,
            "task_id": task_id,
            "timestamp": datetime.now().isoformat()
        }
