# Build stage for Python dependencies
FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS builder

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONFAULTHANDLER=1 \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# Set working directory
WORKDIR /app

# Copy dependency files
COPY pyproject.toml uv.lock ./

# Install Python dependencies
RUN uv sync --locked --no-dev

# Final stage
FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PATH="/app/.venv/bin:$PATH"

# Install runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy virtual environment from builder
COPY --from=builder /app/.venv /app/.venv

# Create app user and set ownership
RUN adduser --disabled-password --gecos '' appuser && \
    mkdir -p /app/uploads /app/output /app/ai_models_cache /app/temp && \
    chown -R appuser:appuser /app && \
    chmod -R 755 /app && \
    chmod -R 777 /app/uploads /app/output /app/ai_models_cache /app/temp

# Copy application code
COPY --chown=appuser:appuser . .

# Ensure scripts are executable
RUN chmod +x entrypoint.sh

# HF Spaces needs to listen on port 7860
EXPOSE 7860

# Switch to appuser
USER appuser

# Use entrypoint script to switch modes
ENTRYPOINT ["./entrypoint.sh"]

# Default to worker mode
CMD ["worker"]
