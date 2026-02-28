"""
Base service class for worker services
Provides common functionality for job processing, health checks, and metrics
"""

import asyncio
import time
import uuid
from abc import ABC, abstractmethod
from typing import Dict, Any, Optional, List
from datetime import datetime
import json

from .config import config
from .message_queue_adapter import MessageQueueFactory, QueueType, WORKER_QUEUES
from .minio_client import MinIOClientFactory, MINIO_BUCKETS

class BaseWorkerService(ABC):
    """Base class for worker services"""
    
    def __init__(self, service_name: str):
        self.service_name = service_name
        self.worker_id = config.worker_id
        self.message_queue = None
        self.minio_client = None
        self.is_running = False
        self.active_jobs = {}
        self.job_metrics = {
            "total_jobs": 0,
            "completed_jobs": 0,
            "failed_jobs": 0,
            "average_processing_time": 0.0,
            "start_time": datetime.now()
        }
    
    async def initialize(self) -> bool:
        """Initialize the service"""
        try:
            # Initialize message queue
            queue_type = QueueType(config.message_queue_type)
            self.message_queue = MessageQueueFactory.create_from_env()
            
            if not await self.message_queue.connect():
                print(f"Failed to connect to message queue for {self.service_name}")
                return False
            
            # Initialize MinIO client
            self.minio_client = MinIOClientFactory.create_from_env()
            if not await self.minio_client.connect():
                print(f"Failed to connect to MinIO for {self.service_name}")
                return False
            
            print(f"{self.service_name} service initialized successfully")
            return True
            
        except Exception as e:
            print(f"Failed to initialize {self.service_name}: {e}")
            return False
    
    async def start(self) -> None:
        """Start the service"""
        if not await self.initialize():
            return
        
        self.is_running = True
        print(f"Starting {self.service_name} service...")
        
        # Start consuming messages
        await self.consume_jobs()
    
    async def stop(self) -> None:
        """Stop the service"""
        self.is_running = False
        
        # Wait for active jobs to complete
        while self.active_jobs:
            print(f"Waiting for {len(self.active_jobs)} active jobs to complete...")
            await asyncio.sleep(1)
        
        # Close connections
        if self.message_queue:
            await self.message_queue.close()
        if self.minio_client:
            await self.minio_client.health_check()
        
        print(f"{self.service_name} service stopped")
    
    async def consume_jobs(self) -> None:
        """Consume jobs from message queue"""
        queue_name = self.get_job_queue_name()
        
        async def job_callback(job_data: Dict[str, Any]):
            await self.process_job(job_data)
        
        await self.message_queue.consume(queue_name, job_callback)
    
    @abstractmethod
    async def process_job(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process a single job - must be implemented by subclasses"""
        pass
    
    @abstractmethod
    def get_job_queue_name(self) -> str:
        """Get the queue name for this service"""
        pass
    
    async def update_job_status(self, job_id: str, status: str, 
                           progress: Optional[int] = None, 
                           error: Optional[str] = None,
                           result: Optional[Dict[str, Any]] = None) -> None:
        """Update job status via message queue"""
        try:
            status_message = {
                "job_id": job_id,
                "service": self.service_name,
                "worker_id": self.worker_id,
                "status": status,
                "timestamp": datetime.now().isoformat(),
                "progress": progress,
                "error": error,
                "result": result
            }
            
            await self.message_queue.publish(
                WORKER_QUEUES["job_status_updates"],
                status_message
            )
            
        except Exception as e:
            print(f"Failed to update job status: {e}")
    
    async def start_job(self, job_id: str, job_data: Dict[str, Any]) -> None:
        """Start tracking a job"""
        self.active_jobs[job_id] = {
            "start_time": time.time(),
            "data": job_data
        }
        self.job_metrics["total_jobs"] += 1
        
        await self.update_job_status(job_id, "started")
    
    async def complete_job(self, job_id: str, result: Dict[str, Any]) -> None:
        """Complete a job successfully"""
        if job_id in self.active_jobs:
            start_time = self.active_jobs[job_id]["start_time"]
            processing_time = time.time() - start_time
            
            # Update metrics
            self.job_metrics["completed_jobs"] += 1
            self._update_average_processing_time(processing_time)
            
            # Remove from active jobs
            del self.active_jobs[job_id]
        
        await self.update_job_status(job_id, "completed", result=result)
    
    async def fail_job(self, job_id: str, error: str) -> None:
        """Fail a job with error"""
        if job_id in self.active_jobs:
            del self.active_jobs[job_id]
        
        self.job_metrics["failed_jobs"] += 1
        await self.update_job_status(job_id, "failed", error=error)
    
    def _update_average_processing_time(self, processing_time: float) -> None:
        """Update average processing time metric"""
        completed = self.job_metrics["completed_jobs"]
        current_avg = self.job_metrics["average_processing_time"]
        
        if completed == 1:
            self.job_metrics["average_processing_time"] = processing_time
        else:
            self.job_metrics["average_processing_time"] = (
                (current_avg * (completed - 1) + processing_time) / completed
            )
    
    async def health_check(self) -> Dict[str, Any]:
        """Perform health check"""
        mq_healthy = await self.message_queue.health_check() if self.message_queue else False
        minio_healthy = await self.minio_client.health_check() if self.minio_client else False
        
        return {
            "service": self.service_name,
            "worker_id": self.worker_id,
            "status": "healthy" if mq_healthy and minio_healthy else "unhealthy",
            "is_running": self.is_running,
            "active_jobs": len(self.active_jobs),
            "message_queue_healthy": mq_healthy,
            "minio_healthy": minio_healthy,
            "uptime_seconds": (datetime.now() - self.job_metrics["start_time"]).total_seconds(),
            "metrics": self.job_metrics
        }
    
    def get_metrics(self) -> Dict[str, Any]:
        """Get service metrics"""
        return {
            "service": self.service_name,
            "worker_id": self.worker_id,
            "metrics": self.job_metrics.copy(),
            "active_jobs": len(self.active_jobs),
            "active_job_ids": list(self.active_jobs.keys())
        }

class JobManager:
    """Manages job lifecycle and coordination"""
    
    def __init__(self):
        self.jobs = {}
    
    def create_job(self, job_type: str, data: Dict[str, Any]) -> str:
        """Create a new job and return job ID"""
        job_id = str(uuid.uuid4())
        
        self.jobs[job_id] = {
            "id": job_id,
            "type": job_type,
            "status": "created",
            "data": data,
            "created_at": datetime.now(),
            "updated_at": datetime.now(),
            "result": None,
            "error": None
        }
        
        return job_id
    
    def update_job(self, job_id: str, status: str, **kwargs) -> None:
        """Update job status and metadata"""
        if job_id in self.jobs:
            self.jobs[job_id]["status"] = status
            self.jobs[job_id]["updated_at"] = datetime.now()
            
            for key, value in kwargs.items():
                if key in ["result", "error", "progress"]:
                    self.jobs[job_id][key] = value
    
    def get_job(self, job_id: str) -> Optional[Dict[str, Any]]:
        """Get job by ID"""
        return self.jobs.get(job_id)
    
    def list_jobs(self, status: Optional[str] = None) -> List[Dict[str, Any]]:
        """List jobs with optional status filter"""
        jobs = list(self.jobs.values())
        
        if status:
            jobs = [job for job in jobs if job["status"] == status]
        
        return jobs
    
    def cleanup_old_jobs(self, max_age_hours: int = 24) -> None:
        """Clean up old completed/failed jobs"""
        cutoff_time = datetime.now() - timedelta(hours=max_age_hours)
        
        to_remove = []
        for job_id, job in self.jobs.items():
            if (job["status"] in ["completed", "failed"] and 
                job["updated_at"] < cutoff_time):
                to_remove.append(job_id)
        
        for job_id in to_remove:
            del self.jobs[job_id]
