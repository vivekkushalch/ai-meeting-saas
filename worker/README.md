---
title: AI Meeting Assistant
emoji: 🎙️
colorFrom: indigo
colorTo: purple
sdk: docker
python_version: '3.12'
suggested_hardware: cpu-basic
license: mit
app_file: app.py
pinned: false
---

# AI Meeting Worker Service - Direct Queue Mode

## 🎯 **Simplified Architecture**

This worker service uses **direct queue communication** with Celery for maximum performance and simplicity:

```
Client → Direct Message Queue → Celery Workers
```

**No FastAPI needed!** Clients publish directly to Redis/RabbitMQ queues.

---

## 🚀 **Quick Start**

### **1. Start Worker**
```bash
python main.py --mode worker
```

### **2. Submit Job**
```bash
python client/simple_client.py
```

### **3. Monitor Progress**
```bash
python main.py --mode flower
# Open http://localhost:5555
```

---

## 📁 **Clean Architecture**

```
worker/
├── 📡 client/                 # Direct Queue Client
│   ├── queue_client.py       # Queue publisher (Redis/RabbitMQ)
│   └── simple_client.py      # Example usage
├── ⚙️ shared/                  # Common utilities
│   ├── celery_app.py         # Celery configuration
│   ├── config.py             # Configuration
│   └── tasks.py              # Shared tasks
├── 🔧 services/               # Celery tasks
│   ├── transcription/
│   │   └── tasks.py          # Transcription tasks
│   └── ai_analysis/
│       └── tasks.py          # AI analysis tasks
└── 🚀 main.py                 # Worker entry point
```

---

## 🛠️ **Configuration**

### **Environment Variables**

```env
# Celery Configuration
CELERY_BROKER_URL=redis://localhost:6379/0
CELERY_RESULT_BACKEND=redis://localhost:6379/0

# Service Configuration
SERVICE_MODE=combined
WORKER_ID=worker-1
WORKER_CONCURRENCY=2

# AI Services
GENAI_API_KEY=your_google_genai_key
HF_API_KEY=your_huggingface_key

# MinIO Storage
MINIO_ENDPOINT=localhost:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin

# Monitoring
ENABLE_FLOWER=true
FLOWER_PORT=5555
```

---

## 🚀 **Deployment**

### **Single Worker**
```bash
python main.py --mode worker --worker-id worker-1
```

### **Multiple Workers**
```bash
# Terminal 1
python main.py --mode worker --worker-id worker-1

# Terminal 2  
python main.py --mode worker --worker-id worker-2

# Terminal 3
python main.py --mode worker --worker-id worker-3
```

### **With Monitoring**
```bash
# Terminal 1: Worker
python main.py --mode worker

# Terminal 2: Beat Scheduler
python main.py --mode beat

# Terminal 3: Flower Monitoring
python main.py --mode flower
```

---

## 📈 **Performance**

| Metric | Direct Queue Mode |
|--------|------------------|
| **Latency** | ~10-20ms |
| **Throughput** | ~1000+ jobs/sec |
| **Memory Usage** | Low |
| **Complexity** | Minimal |

---

## 🔧 **Task Types**

### **Transcription**
```python
# Single audio transcription
await client.submit_transcription_job(
    audio_url="minio://audio/meeting.mp3",
    options={"language": "en", "diarize": True}
)
```

### **AI Analysis**
```python
# Single transcript analysis
await client.submit_ai_analysis_job(
    transcript_url="minio://transcripts/meeting.vtt",
    options={"sentiment_analysis": True}
)
```

### **Combined Workflow**
```python
# Transcription + AI Analysis
await client.submit_combined_job(
    audio_url="minio://audio/meeting.mp3",
    transcription_options={"language": "en"},
    ai_options={"sentiment_analysis": True}
)
```

### **Batch Processing**
```python
# Multiple transcript analysis
jobs = [
    {"transcript_url": "minio://transcripts/meeting1.vtt"},
    {"transcript_url": "minio://transcripts/meeting2.vtt"}
]
await client.submit_batch_analysis_job(jobs)
```

---

## 📊 **Monitoring**

### **Flower Dashboard**
- **URL**: `http://localhost:5555`
- **Features**: Real-time task monitoring, worker stats
- **Command**: `python main.py --mode flower`

### **Worker Status**
```bash
# Check active workers
python -c "from shared.celery_app import celery_app; print(celery.app.control.inspect().stats())"

# Check active tasks
python -c "from shared.celery_app import celery_app; print(celery.app.control.inspect().active())"
```

---

## 🎯 **Job Status Flow**

```
PENDING → STARTED → PROGRESS → SUCCESS/FAILURE
  ↓         ↓         ↓
Queue   Processing  Results
```

### **Status Values**
- `PENDING`: Job queued
- `STARTED`: Worker picked up job
- `PROGRESS`: Job processing (with updates)
- `SUCCESS`: Job completed
- `FAILURE`: Job failed
- `RETRY`: Job being retried
