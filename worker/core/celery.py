"""
Celery application setup
"""

from kombu import Queue
from celery import Celery

from .config import config, service_config

# Create Celery app
celery_app = Celery('ai_meeting_worker')

# Configuration
celery_app.conf.update(
    broker_url=config.broker_url,
    result_backend=config.result_backend,
    broker_connection_retry_on_startup=True,
    
    # Broker transport options for SSL
    broker_transport_options={
        'ssl_cert_reqs': 'CERT_REQUIRED',
        'ssl_verify': True,
    } if config.broker_url.startswith('amqps://') else {},
    
    # Serialization
    task_serializer='json',
    accept_content=['json'],
    result_serializer='json',
    timezone='UTC',
    enable_utc=True,
    
    # Task routing
    task_routes={
        'services.transcription.tasks.transcribe_audio': {'queue': 'transcription'},
        'services.ai_analysis.tasks.analyze_transcript': {'queue': 'ai_analysis'},
        'services.transcription.tasks.transcribe_and_analyze': {'queue': 'combined'},
    },
    
    # Queues
    task_queues=(
        Queue('transcription', routing_key='transcription'),
        Queue('ai_analysis', routing_key='ai_analysis'),
        Queue('combined', routing_key='combined'),
        Queue('celery', routing_key='celery'),
    ),
    
    # Worker settings
    worker_prefetch_multiplier=1,
    task_acks_late=True,
    worker_max_tasks_per_child=config.worker_max_tasks_per_child,
    worker_disable_rate_limits=False,
    
    # Task execution
    task_soft_time_limit=config.task_soft_time_limit,
    task_time_limit=config.task_time_limit,
    task_ignore_result=False,
    
    # Retry settings
    task_reject_on_worker_lost=True,
    task_acks_on_failure_or_timeout=False,
    
    # Monitoring
    worker_send_task_events=True,
    task_send_sent_event=True,
    
    # Beat scheduler
    beat_schedule={
        'cleanup-old-results': {
            'task': 'core.tasks.cleanup_old_results',
            'schedule': 21600.0,  # Every 6 hours
        },
        'health-check': {
            'task': 'core.tasks.health_check',
            'schedule': 30.0,  # Every 30 seconds
        },
    },
)

# Development settings
if config.environment == "development":
    celery_app.conf.update(
        task_always_eager=True,
        task_eager_propagates=True,
    )
