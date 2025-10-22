
# Use a Python image with uv pre-installed
FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

# Setup a non-root user
RUN groupadd --system --gid 999 nonroot \
    && useradd --system --gid 999 --uid 999 --create-home nonroot

# Install the project into `/app`
WORKDIR /app

# Enable bytecode compilation
ENV UV_COMPILE_BYTECODE=1

# Copy from the cache instead of linking since it's a mounted volume
ENV UV_LINK_MODE=copy

# Ensure installed tools can be executed out of the box
ENV UV_TOOL_BIN_DIR=/usr/local/bin


RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

# Install the project's dependencies using the lockfile and settings
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --locked --no-install-project --no-dev


# Then, add the rest of the project source code and install it
# Installing separately from its dependencies allows optimal layer caching
COPY . /app
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --locked --no-dev

# Place executables in the environment at the front of the path
ENV PATH="/app/.venv/bin:$PATH"

# Reset the entrypoint, don't invoke `uv`
ENTRYPOINT []

# Use the non-root user to run our application
USER nonroot

# Run the FastAPI application by default
# Uses `fastapi dev` to enable hot-reloading when the `watch` sync occurs
# Uses `--host 0.0.0.0` to allow access from outside the container
# Note in production, you should use `fastapi run` instead
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]



# # Use Python 3.12-slim as the base image
# FROM python:3.12-slim as builder

# # Set environment variables
# ENV PYTHONDONTWRITEBYTECODE=1 \
#     PYTHONUNBUFFERED=1 \
#     PIP_NO_CACHE_DIR=1 \
#     PIP_DISABLE_PIP_VERSION_CHECK=1 \
#     PIP_DEFAULT_TIMEOUT=100 \
#     POETRY_VERSION=1.8.2 \
#     VENV_PATH="/opt/venv"

# # Install system dependencies
# RUN apt-get update && apt-get install -y --no-install-recommends \
#     ffmpeg \
#     && rm -rf /var/lib/apt/lists/*

# # Create a virtual environment
# RUN python -m venv $VENV_PATH
# ENV PATH="$VENV_PATH/bin:$PATH"

# # Install uv and project dependencies
# RUN pip install --no-cache-dir uv
# COPY pyproject.toml .
# RUN uv pip install --system -r <(uv pip list --format=freeze) \
#     && uv pip install -e .

# # Create a non-root user and switch to it
# RUN adduser --disabled-password --gecos "" appuser
# WORKDIR /app

# # Copy the rest of the application
# COPY . .

# # Set ownership and permissions
# RUN chown -R appuser:appuser /app \
#     && chmod -R 755 /app \
#     && mkdir -p /app/uploads /app/output /app/ai_models_cache \
#     && chown -R appuser:appuser /app/uploads /app/output /app/ai_models_cache

# # Switch to non-root user
# USER appuser

# # Expose the port the app runs on
# EXPOSE 8000

# # Command to run the application
# CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]