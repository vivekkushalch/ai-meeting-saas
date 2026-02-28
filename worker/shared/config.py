"""
Configuration management for Worker Services
Supports combined and separate deployment modes
"""

import os
from typing import List, Optional
from enum import Enum
from pydantic import BaseSettings, Field

class ServiceMode(Enum):
    COMBINED = "combined"  # Both transcription and AI in one process
    TRANSCRIPTION_ONLY = "transcription"  # Only transcription service
    AI_ONLY = "ai"  # Only AI analysis service

class WorkerConfig(BaseSettings):
    """Main configuration for worker services"""
    
    # Service Configuration
    service_mode: ServiceMode = Field(default=ServiceMode.COMBINED, env="SERVICE_MODE")
    service_port: int = Field(default=7861, env="SERVICE_PORT")
    service_host: str = Field(default="0.0.0.0", env="SERVICE_HOST")
    worker_id: str = Field(default="worker-1", env="WORKER_ID")
    
    # MinIO Configuration
    minio_endpoint: str = Field(default="localhost:9000", env="MINIO_ENDPOINT")
    minio_access_key: str = Field(default="minioadmin", env="MINIO_ACCESS_KEY")
    minio_secret_key: str = Field(default="minioadmin", env="MINIO_SECRET_KEY")
    minio_region: str = Field(default="us-east-1", env="MINIO_REGION")
    minio_secure: bool = Field(default=False, env="MINIO_SECURE")
    
    # Message Queue Configuration
    message_queue_type: str = Field(default="redis", env="MESSAGE_QUEUE_TYPE")
    rabbitmq_url: str = Field(default="amqp://guest:guest@localhost:5672/", env="RABBITMQ_URL")
    redis_url: str = Field(default="redis://localhost:6379", env="REDIS_URL")
    
    # AI Services Configuration
    genai_api_key: str = Field(default="", env="GENAI_API_KEY")
    hf_api_key: str = Field(default="", env="HF_API_KEY")
    
    # Transcription Configuration
    whisper_model: str = Field(default="base", env="WHISPER_MODEL")
    whisper_device: str = Field(default="auto", env="WHISPER_DEVICE")
    max_concurrent_jobs: int = Field(default=2, env="MAX_CONCURRENT_JOBS")
    
    # Processing Configuration
    temp_dir: str = Field(default="./temp", env="TEMP_DIR")
    max_file_size: int = Field(default=100 * 1024 * 1024, env="MAX_FILE_SIZE")  # 100MB
    allowed_extensions: List[str] = Field(default=["wav", "mp3", "ogg", "m4a", "webm"], env="ALLOWED_EXTENSIONS")
    
    # Health Check Configuration
    health_check_interval: int = Field(default=30, env="HEALTH_CHECK_INTERVAL")
    
    # API Configuration
    api_key: str = Field(default="", env="API_KEY")  # For microservice authentication
    
    class Config:
        env_file = ".env"
        case_sensitive = False
    
    @property
    def is_transcription_enabled(self) -> bool:
        """Check if transcription service is enabled"""
        return self.service_mode in [ServiceMode.COMBINED, ServiceMode.TRANSCRIPTION_ONLY]
    
    @property
    def is_ai_enabled(self) -> bool:
        """Check if AI analysis service is enabled"""
        return self.service_mode in [ServiceMode.COMBINED, ServiceMode.AI_ONLY]
    
    @property
    def message_queue_url(self) -> str:
        """Get appropriate message queue URL"""
        if self.message_queue_type.lower() == "rabbitmq":
            return self.rabbitmq_url
        else:
            return self.redis_url

class ServiceConfig:
    """Service-specific configuration management"""
    
    def __init__(self, config: WorkerConfig):
        self.config = config
    
    def get_service_routes(self) -> List[str]:
        """Get enabled API routes based on service mode"""
        routes = []
        
        if self.config.is_transcription_enabled:
            routes.extend([
                "/transcribe",
                "/transcribe/job",
                "/transcribe/status/{job_id}",
                "/health/transcription"
            ])
        
        if self.config.is_ai_enabled:
            routes.extend([
                "/ai",
                "/ai/analyze", 
                "/ai/status/{job_id}",
                "/health/ai"
            ])
        
        # Common routes
        routes.extend([
            "/health",
            "/metrics",
            "/status"
        ])
        
        return routes
    
    def get_queue_subscriptions(self) -> List[str]:
        """Get queues to subscribe to based on service mode"""
        queues = []
        
        if self.config.is_transcription_enabled:
            queues.append("worker_transcription_jobs")
        
        if self.config.is_ai_enabled:
            queues.append("worker_ai_analysis_jobs")
        
        # Common queues
        queues.append("worker_job_status_updates")
        
        return queues

# Global configuration instance
config = WorkerConfig()
service_config = ServiceConfig(config)
