"""
Main Worker Application
Supports combined and separate deployment modes for transcription and AI analysis services
"""

import asyncio
import signal
import sys
from contextlib import asynccontextmanager
from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from shared.config import config, service_config, ServiceMode
from shared.message_queue_adapter import MessageQueueFactory, QueueType
from services.transcription.controller import (
    TranscriptionService, 
    create_transcription_router,
    initialize_transcription_service
)
from services.ai_analysis.controller import (
    AIAnalysisService,
    create_ai_analysis_router,
    initialize_ai_analysis_service
)

# Global service instances
transcription_service = None
ai_analysis_service = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Manage application lifecycle"""
    # Startup
    print(f"Starting Worker Service in {config.service_mode.value} mode...")
    
    global transcription_service, ai_analysis_service
    
    try:
        # Initialize services based on configuration
        if config.is_transcription_enabled:
            print("Initializing Transcription Service...")
            transcription_service = await initialize_transcription_service()
            if not transcription_service:
                raise Exception("Failed to initialize transcription service")
        
        if config.is_ai_enabled:
            print("Initializing AI Analysis Service...")
            ai_analysis_service = await initialize_ai_analysis_service()
            if not ai_analysis_service:
                raise Exception("Failed to initialize AI analysis service")
        
        # Start background tasks for job processing
        background_tasks = []
        
        if transcription_service:
            task = asyncio.create_task(transcription_service.start())
            background_tasks.append(task)
        
        if ai_analysis_service:
            task = asyncio.create_task(ai_analysis_service.start())
            background_tasks.append(task)
        
        # Store background tasks in app state for cleanup
        app.state.background_tasks = background_tasks
        
        print("All services started successfully!")
        
        yield
        
    except Exception as e:
        print(f"Failed to start services: {e}")
        sys.exit(1)
    
    # Shutdown
    print("Shutting down Worker Service...")
    
    # Cancel background tasks
    if hasattr(app.state, 'background_tasks'):
        for task in app.state.background_tasks:
            task.cancel()
            try:
                await task
            except asyncio.CancelledError:
                pass
    
    # Stop services
    if transcription_service:
        await transcription_service.stop()
    
    if ai_analysis_service:
        await ai_analysis_service.stop()
    
    print("Worker Service stopped gracefully")

def create_app() -> FastAPI:
    """Create and configure FastAPI application"""
    
    app = FastAPI(
        title="AI Meeting Worker Service",
        description="Modular worker service for audio transcription and AI analysis",
        version="2.0.0",
        lifespan=lifespan
    )
    
    # Add CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # Configure appropriately for production
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # Add routers based on service mode
    routers = []
    
    if config.is_transcription_enabled:
        transcription_router = create_transcription_router()
        app.include_router(transcription_router)
        routers.append("Transcription (/transcribe)")
        
        # Set global service instance for router access
        import services.transcription.controller as tc
        tc.transcription_service = transcription_service
    
    if config.is_ai_enabled:
        ai_router = create_ai_analysis_router()
        app.include_router(ai_router)
        routers.append("AI Analysis (/ai)")
        
        # Set global service instance for router access
        import services.ai_analysis.controller as ac
        ac.ai_analysis_service = ai_analysis_service
    
    # Common endpoints
    @app.get("/")
    async def root():
        """Root endpoint with service information"""
        return {
            "service": "AI Meeting Worker Service",
            "version": "2.0.0",
            "mode": config.service_mode.value,
            "worker_id": config.worker_id,
            "enabled_services": routers,
            "endpoints": service_config.get_service_routes()
        }
    
    @app.get("/health")
    async def health_check():
        """Comprehensive health check"""
        health_status = {
            "service": "AI Meeting Worker Service",
            "mode": config.service_mode.value,
            "worker_id": config.worker_id,
            "status": "healthy",
            "services": {}
        }
        
        # Check transcription service
        if transcription_service:
            transcription_health = await transcription_service.health_check()
            health_status["services"]["transcription"] = transcription_health
            if transcription_health["status"] != "healthy":
                health_status["status"] = "degraded"
        
        # Check AI analysis service
        if ai_analysis_service:
            ai_health = await ai_analysis_service.health_check()
            health_status["services"]["ai_analysis"] = ai_health
            if ai_health["status"] != "healthy":
                health_status["status"] = "degraded"
        
        return health_status
    
    @app.get("/metrics")
    async def get_metrics():
        """Get service metrics"""
        metrics = {
            "service": "AI Meeting Worker Service",
            "mode": config.service_mode.value,
            "worker_id": config.worker_id,
            "services": {}
        }
        
        # Get transcription metrics
        if transcription_service:
            metrics["services"]["transcription"] = transcription_service.get_metrics()
        
        # Get AI analysis metrics
        if ai_analysis_service:
            metrics["services"]["ai_analysis"] = ai_analysis_service.get_metrics()
        
        return metrics
    
    @app.get("/status")
    async def get_status():
        """Get detailed service status"""
        return {
            "service": "AI Meeting Worker Service",
            "mode": config.service_mode.value,
            "worker_id": config.worker_id,
            "configuration": {
                "transcription_enabled": config.is_transcription_enabled,
                "ai_enabled": config.is_ai_enabled,
                "message_queue_type": config.message_queue_type,
                "whisper_model": config.whisper_model if config.is_transcription_enabled else None,
                "max_concurrent_jobs": config.max_concurrent_jobs
            },
            "queues": service_config.get_queue_subscriptions()
        }
    
    return app

def run_combined_service():
    """Run combined service with both transcription and AI analysis"""
    print("Starting Combined Worker Service...")
    app = create_app()
    
    import uvicorn
    uvicorn.run(
        app,
        host=config.service_host,
        port=config.service_port,
        log_level="info"
    )

def run_transcription_only():
    """Run transcription-only service"""
    print("Starting Transcription-Only Worker Service...")
    
    # Override configuration for transcription-only mode
    config.service_mode = ServiceMode.TRANSCRIPTION_ONLY
    app = create_app()
    
    import uvicorn
    uvicorn.run(
        app,
        host=config.service_host,
        port=config.service_port,
        log_level="info"
    )

def run_ai_only():
    """Run AI analysis-only service"""
    print("Starting AI-Analysis-Only Worker Service...")
    
    # Override configuration for AI-only mode
    config.service_mode = ServiceMode.AI_ONLY
    app = create_app()
    
    import uvicorn
    uvicorn.run(
        app,
        host=config.service_host,
        port=config.service_port,
        log_level="info"
    )

def main():
    """Main entry point with service mode selection"""
    import argparse
    
    parser = argparse.ArgumentParser(description="AI Meeting Worker Service")
    parser.add_argument(
        "--mode",
        choices=["combined", "transcription", "ai"],
        default=config.service_mode.value,
        help="Service mode (overrides SERVICE_MODE env var)"
    )
    parser.add_argument(
        "--port",
        type=int,
        default=config.service_port,
        help="Service port (overrides SERVICE_PORT env var)"
    )
    parser.add_argument(
        "--worker-id",
        default=config.worker_id,
        help="Worker ID (overrides WORKER_ID env var)"
    )
    
    args = parser.parse_args()
    
    # Update configuration with command line arguments
    config.service_mode = ServiceMode(args.mode)
    config.service_port = args.port
    config.worker_id = args.worker_id
    
    print(f"Starting Worker Service in {config.service_mode.value} mode...")
    print(f"Worker ID: {config.worker_id}")
    print(f"Port: {config.service_port}")
    
    # Set up signal handlers for graceful shutdown
    def signal_handler(signum, frame):
        print(f"\nReceived signal {signum}, shutting down gracefully...")
        sys.exit(0)
    
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    # Start appropriate service mode
    try:
        if config.service_mode == ServiceMode.COMBINED:
            run_combined_service()
        elif config.service_mode == ServiceMode.TRANSCRIPTION_ONLY:
            run_transcription_only()
        elif config.service_mode == ServiceMode.AI_ONLY:
            run_ai_only()
        else:
            print(f"Unknown service mode: {config.service_mode}")
            sys.exit(1)
    except KeyboardInterrupt:
        print("\nShutdown requested by user")
    except Exception as e:
        print(f"Error starting service: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
