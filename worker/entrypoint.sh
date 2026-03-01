#!/bin/bash
set -e

# SERVICE_MODE can be: worker, beat, flower, combined (default), api
MODE=${SERVICE_MODE:-combined}

echo "Starting AI Meeting Worker in mode: $MODE"

if [ "$MODE" = "worker" ]; then
    exec python main.py --mode worker
elif [ "$MODE" = "beat" ]; then
    exec python main.py --mode beat
elif [ "$MODE" = "flower" ]; then
    # Default to 7860 if not specified (for HF Spaces)
    PORT=${FLOWER_PORT:-7860}
    exec python -m celery --broker="$CELERY_BROKER_URL" --result-backend="$CELERY_RESULT_BACKEND" -A core.celery flower --port=$PORT --address=0.0.0.0
elif [ "$MODE" = "api" ]; then
    # If you want to run the FastAPI app in worker/app.py
    exec python -m uvicorn app:app --host 0.0.0.0 --port 7860
elif [ "$MODE" = "combined" ]; then
    # Best for Hugging Face Spaces: Run worker in background, Flower on 7860 in foreground
    echo "Starting Celery Worker + Flower Monitoring..."
    python main.py --mode worker &
    exec python -m celery --broker="$CELERY_BROKER_URL" --result-backend="$CELERY_RESULT_BACKEND" -A core.celery flower --port=7860 --address=0.0.0.0
else
    echo "Unknown mode: $MODE. Executing as raw command."
    exec "$@"
fi
