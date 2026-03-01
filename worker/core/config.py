"""
Configuration management for Worker Services
"""

import os
from typing import List
from enum import Enum
from pydantic import BaseSettings, Field

class ServiceMode(Enum):
    COMBINED = "combined"
    TRANSCRIPTION_ONLY = "transcription"
    AI_ONLY = "ai"

class Config(BaseSettings):
    """Worker configuration"""
    
    # Service Configuration
    service_mode: ServiceMode = Field(default=ServiceMode.COMBINED, env="SERVICE_MODE")
    worker_id: str = Field(default="worker-1", env="WORKER_ID")
    
    # Celery Configuration
    celery_broker_url: str = Field(default="", env="CELERY_BROKER_URL")
    celery_result_backend: str = Field(default="", env="CELERY_RESULT_BACKEND")
    task_soft_time_limit: int = Field(default=1800, env="TASK_SOFT_TIME_LIMIT")
    task_time_limit: int = Field(default=3600, env="TASK_TIME_LIMIT")
    task_max_retries: int = Field(default=3, env="TASK_MAX_RETRIES")
    task_retry_backoff: bool = Field(default=True, env="TASK_RETRY_BACKOFF")
    
    # Worker Configuration
    worker_concurrency: int = Field(default=2, env="WORKER_CONCURRENCY")
    worker_prefetch_multiplier: int = Field(default=1, env="WORKER_PREFETCH_MULTIPLIER")
    worker_max_tasks_per_child: int = Field(default=1000, env="WORKER_MAX_TASKS_PER_CHILD")
    
    # Storage Configuration
    storage_endpoint: str = Field(default="localhost:9000", env="STORAGE_ENDPOINT")
    storage_access_key: str = Field(default="minioadmin", env="STORAGE_ACCESS_KEY")
    storage_secret_key: str = Field(default="minioadmin", env="STORAGE_SECRET_KEY")
    storage_region: str = Field(default="us-east-1", env="STORAGE_REGION")
    storage_secure: bool = Field(default=False, env="STORAGE_SECURE")
    
    # AI Services
    genai_api_key: str = Field(default="", env="GENAI_API_KEY")
    hf_api_key: str = Field(default="", env="HF_API_KEY")
    
    # Transcription
    whisper_model: str = Field(default="base", env="WHISPER_MODEL")
    whisper_device: str = Field(default="auto", env="WHISPER_DEVICE")
    
    # Processing
    temp_dir: str = Field(default="./temp", env="TEMP_DIR")
    max_file_size: int = Field(default=100 * 1024 * 1024, env="MAX_FILE_SIZE")
    allowed_extensions: List[str] = Field(default=["wav", "mp3", "ogg", "m4a", "webm"], env="ALLOWED_EXTENSIONS")
    
    # Monitoring
    enable_flower: bool = Field(default=True, env="ENABLE_FLOWER")
    flower_port: int = Field(default=5555, env="FLOWER_PORT")
    flower_host: str = Field(default="0.0.0.0", env="FLOWER_HOST")
    
    # Environment
    environment: str = Field(default="production", env="ENVIRONMENT")
    debug: bool = Field(default=False, env="DEBUG")
    
    @property
    def is_transcription_enabled(self) -> bool:
        return self.service_mode in [ServiceMode.COMBINED, ServiceMode.TRANSCRIPTION_ONLY]
    
    @property
    def is_ai_enabled(self) -> bool:
        return self.service_mode in [ServiceMode.COMBINED, ServiceMode.AI_ONLY]
    
    @property
    def broker_url(self) -> str:
        if self.celery_broker_url:
            return self.celery_broker_url
        return f"redis://localhost:6379/0"
    
    @property
    def result_backend(self) -> str:
        if self.celery_result_backend:
            return self.celery_result_backend
        return f"redis://localhost:6379/0"

# Global configuration
config = Config()

class ServiceConfig:
    """Service configuration helper"""
    
    @staticmethod
    def get_celery_queues() -> List[str]:
        queues = ["celery"]
        if config.is_transcription_enabled:
            queues.append("transcription")
        if config.is_ai_enabled:
            queues.append("ai_analysis")
        if config.service_mode == ServiceMode.COMBINED:
            queues.append("combined")
        return queues

service_config = ServiceConfig()

# Storage buckets
BUCKETS = {
    "audio": "audio",
    "transcripts": "transcripts", 
    "analysis": "analysis",
    "temp": "temp"
}
