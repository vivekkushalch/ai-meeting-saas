"""
Main Worker Application with Celery Integration
Direct queue processing without FastAPI
"""

import os
import signal
import sys
from typing import List

from core.config import config, service_config
from core.celery import celery_app

def run_celery_worker():
    """Run Celery worker"""
    print(f"Starting Celery worker with queues: {service_config.get_celery_queues()}")
    
    # Import tasks to register them
    from services.transcription.tasks import transcribe_audio, transcribe_and_analyze
    from services.ai_analysis.tasks import analyze_transcript, batch_analyze_transcripts
    from core.tasks import cleanup_old_results, health_check
    
    # Start Celery worker
    celery_app.worker_main([
        'worker',
        '--loglevel=info',
        f'--concurrency={config.worker_concurrency}',
        f'--queues={",".join(service_config.get_celery_queues())}',
        '--prefetch-multiplier=1',
        '--max-tasks-per-child=1000',
        '--time-limit=3600',
        '--soft-time-limit=1800'
    ])

def run_celery_beat():
    """Run Celery beat scheduler"""
    print("Starting Celery beat scheduler...")
    celery_app.start(['beat', '--loglevel=info'])

def run_flower():
    """Run Flower monitoring"""
    if not config.enable_flower:
        print("Flower monitoring is disabled")
        return
    
    print(f"Starting Flower monitoring on {config.flower_host}:{config.flower_port}")
    
    from flower import command as flower_command
    
    flower_command.flower_command([
        '--broker=' + config.broker_url,
        '--port=' + str(config.flower_port),
        '--host=' + config.flower_host,
        '--basic_auth=' + os.getenv('FLOWER_BASIC_AUTH', ''),
        '--inspect_timeout=10'
    ])

def show_service_info():
    """Show service information"""
    print(f"AI Meeting Worker Service - Direct Queue Mode")
    print(f"Mode: {config.service_mode.value}")
    print(f"Worker ID: {config.worker_id}")
    print(f"Broker: {config.broker_url}")
    print(f"Backend: {config.result_backend}")
    print(f"Queues: {service_config.get_celery_queues()}")
    print(f"Concurrency: {config.worker_concurrency}")
    print()
    print("🚀 Usage Examples:")
    print("  # Start worker")
    print("  python main.py --mode worker")
    print()
    print("  # Monitor with Flower")
    print("  python main.py --mode flower")
    print("  # Then open http://localhost:5555")
    print()
    print("  # Submit jobs via external backend:")
    print("  # - Publish directly to Redis: LPUSH transcription '{\"job_id\": \"...\", \"audio_url\": \"...\"}'")
    print("  # - Or use RabbitMQ/AMQP client")
    print("  # - Or use Celery client from external service")

def main():
    """Main entry point"""
    import argparse
    import os
    
    parser = argparse.ArgumentParser(description="AI Meeting Worker Service - Direct Queue Mode")
    parser.add_argument(
        "--mode",
        choices=["worker", "beat", "flower", "info"],
        default="worker",
        help="Service mode"
    )
    parser.add_argument(
        "--worker-id",
        default=config.worker_id,
        help="Worker ID"
    )
    
    args = parser.parse_args()
    
    # Update configuration
    config.worker_id = args.worker_id
    
    print(f"Starting Worker Service in {args.mode} mode...")
    print(f"Worker ID: {config.worker_id}")
    print(f"Broker: {config.broker_url}")
    print(f"Backend: {config.result_backend}")
    
    # Signal handlers
    def signal_handler(signum, frame):
        print(f"\nReceived signal {signum}, shutting down gracefully...")
        sys.exit(0)
    
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    # Start service
    try:
        if args.mode == "worker":
            run_celery_worker()
        elif args.mode == "beat":
            run_celery_beat()
        elif args.mode == "flower":
            run_flower()
        elif args.mode == "info":
            show_service_info()
        else:
            print(f"Unknown service mode: {args.mode}")
            sys.exit(1)
    except KeyboardInterrupt:
        print("\nShutdown requested by user")
    except Exception as e:
        print(f"Error starting service: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
