<p align="center">
  <img src="frontend/public/logo.svg" alt="SupaMeet Logo - Open Source AI Meeting Assistant" width="120">
</p>

<h1 align="center">SupaMeet - Open Source AI Meeting Assistant</h1>

<p align="center">
  <strong>The ultimate open-source platform for automated meeting transcription, speaker diarization, and AI-powered meeting summaries using Whisper and Google Gemini.</strong>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black" alt="Next.js 15"></a>
  <a href="https://nestjs.com/"><img src="https://img.shields.io/badge/NestJS-11-E0234E" alt="NestJS 11"></a>
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3.12-3776AB" alt="Python 3.12"></a>
  <a href="https://docs.celeryq.dev/"><img src="https://img.shields.io/badge/Celery-5.4-37814A" alt="Celery 5.4"></a>
  <br />
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" alt="Docker Deployment"></a>
  <a href="https://redis.io/"><img src="https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white" alt="Redis Result Backend"></a>
  <a href="https://www.rabbitmq.com/"><img src="https://img.shields.io/badge/RabbitMQ-FF6600?logo=rabbitmq&logoColor=white" alt="RabbitMQ Message Broker"></a>
  <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL Database"></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="Prisma ORM"></a>
</p>

<img width="100%" alt="SupaMeet Dashboard - AI Meeting Assistant for Transcription and Summary" src="https://github.com/user-attachments/assets/053f2df6-6e3c-46d1-b895-e3f778b97880" />

## 🌍 Works with Every Meeting Platform

SupaMeet is platform-agnostic. Whether you're in a scheduled boardroom sync or a quick huddle, we've got you covered.

<p align="center">
  <img src="https://img.shields.io/badge/Google%20Meet-4285F4?style=for-the-badge&logo=google-meet&logoColor=white" alt="Google Meet">
  <img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white" alt="Zoom">
  <img src="https://img.shields.io/badge/Microsoft%20Teams-6264A7?style=for-the-badge&logo=microsoft-teams&logoColor=white" alt="Microsoft Teams">
  <img src="https://img.shields.io/badge/Cisco%20Webex-003851?style=for-the-badge&logo=cisco-webex&logoColor=white" alt="Webex">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack Huddles">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord">
</p>

## 🚀 Key Features: AI Meeting Transcription & Insights

SupaMeet is designed to be the most comprehensive **AI Meeting Assistant** for developers and teams who value privacy and high-quality insights.

- 🎙️ **High-Accuracy Transcription**: Powered by **OpenAI Whisper (WhisperX)**, SupaMeet provides word-level timestamps and near-perfect speech-to-text for MP3, WAV, and M4A files.
- 👥 **Advanced Speaker Diarization**: Utilize **pyannote-audio** to automatically identify and label different speakers in your meeting recordings.
- 🤖 **AI-Powered Meeting Summaries**: Leverage **Google Gemini AI** to generate smart meeting titles, executive summaries, and high-priority action items automatically.
- 🌐 **Chrome Extension for Browser Recording**: Record Google Meet, Zoom, and Microsoft Teams directly from your browser with our seamless one-click extension.
- ⏱️ **Real-Time WebSocket Updates**: Monitor your transcription and analysis progress in real-time with **Socket.io** integration.
- 🔍 **Global Full-Text Search**: Search through your entire history of transcripts, summaries, and meeting notes with a powerful global search engine.

## 🏗️ System Architecture

Built for scale, privacy, and speed. Our microservices architecture ensures that even your longest meetings are processed without a hitch.

```mermaid
graph TD
    User([User]) <--> Frontend[Next.js Frontend]
    Frontend <--> Backend[NestJS API Gateway]
    Backend <--> PostgreSQL[(PostgreSQL DB)]
    Backend <--> Redis[(Redis Result Backend)]
    Backend <--> MinIO[(MinIO Blob Storage)]
    Backend -- Publish Task --> RabbitMQ[[RabbitMQ Broker]]
    RabbitMQ -- Consume Task --> Worker[Python Celery Worker]
    Worker <--> MinIO
    Worker <--> Gemini[Google Gemini AI]
    Worker <--> Whisper[WhisperX/Whisper.cpp]
    Worker <--> Redis
    Backend -- Real-time Updates --> SocketIO[Socket.io WebSockets]
    SocketIO --> Frontend
```

### Core Components
- **Frontend**: A modern Next.js 15 application utilizing Tailwind CSS and Radix UI for a responsive, accessible user experience.
- **Backend (API)**: A NestJS 11 Gateway that manages authentication, meeting metadata, file uploads, and coordinates with the worker pool.
- **Worker Service**: A high-performance Python 3.12 service powered by Celery, specialized in audio transcription, speaker diarization, and AI-driven analysis.
- **Blob Storage**: MinIO (S3-compatible) for secure and scalable storage of raw audio, transcripts, and analysis reports.
- **Messaging**: RabbitMQ as the robust message broker for task distribution and Redis for task result tracking and caching.

---

## 🛠️ Tech Stack & Architecture

SupaMeet is built with a scalable **Microservices Architecture** to handle enterprise-grade audio processing workloads.

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | **Next.js 15**, React 19, TypeScript, Tailwind CSS, Radix UI, TanStack Query |
| **API Gateway** | **NestJS 11**, Prisma ORM, PostgreSQL, Passport.js (JWT), Socket.io |
| **Worker Engine** | **Python 3.12**, **Celery**, WhisperX, pywhispercpp, pyannote-audio |
| **AI / NLP** | **Google Gemini (GenAI)**, Hugging Face Transformers, PyTorch |
| **Infrastructure** | **Docker**, MinIO (S3), RabbitMQ, Redis, Nginx |

---

## 🔄 How SupaMeet Works (The Recording Lifecycle)

```mermaid
sequenceDiagram
    participant U as User / Extension
    participant F as Next.js Frontend
    participant B as NestJS API Gateway
    participant S as MinIO (S3)
    participant Q as RabbitMQ
    participant W as Celery Worker
    participant AI as Google Gemini

    U->>F: Upload Audio / Start Extension
    F->>B: Request Upload URL
    B-->>F: Signed URL / Session ID
    F->>S: PUT Raw Audio
    F->>B: Signal Upload Complete
    B->>Q: Publish Transcription Job
    B-->>U: "Processing Started" (WS)
    
    Q->>W: Consume Job
    W->>S: GET Raw Audio
    W->>W: WhisperX Transcription
    W->>W: pyannote Diarization
    W->>AI: Send Transcript for Analysis
    AI-->>W: AI Summary, Tasks, Sentiment
    W->>S: Store VTT & JSON Analysis
    W->>B: Webhook: Processing Complete
    B->>U: "Meeting Ready" (WS)
```

1.  **Ingestion**: Capture audio via the **SupaMeet Browser Extension** or direct upload to the web dashboard.
2.  **Secure Storage**: Audio files are stored in a private **MinIO** S3 bucket using secure pre-signed URLs.
3.  **Task Queuing**: **RabbitMQ** handles asynchronous job distribution to prevent system bottlenecks.
4.  **AI Processing**: The **Celery Worker** runs WhisperX for transcription and pyannote for speaker identification.
5.  **LLM Analysis**: **Google Gemini** processes the transcript to extract action items, key points, and sentiment.
6.  **Delivery**: Results are pushed to the frontend via **WebSockets**, making the analysis available instantly.

---

## 📂 Project Structure

SupaMeet is organized into a modular monorepo structure, allowing for independent scaling and development of each service.

```text
supameet/
├── 🌐 backend/                 # NestJS 11 API Gateway
│   ├── src/
│   │   ├── auth/              # JWT-based authentication & strategies
│   │   ├── meetings/          # Meeting management & session coordination
│   │   ├── notifications/     # Socket.io gateways for real-time updates
│   │   ├── prisma/            # Type-safe database service
│   │   ├── storage/           # MinIO S3 adapter for file management
│   │   ├── tasks/             # Action item management (To-dos)
│   │   └── workers/           # RabbitMQ producers for task distribution
│   ├── prisma/                # Database schema (schema.prisma) & migrations
│   └── Dockerfile             # Production NestJS build
│
├── 🎨 frontend/                # Next.js 15 Web Dashboard
│   ├── app/                   # App Router: Layouts & Dashboard pages
│   ├── components/            # UI library using Shadcn/UI & Radix
│   │   ├── shared/            # Reusable UI primitives
│   │   └── ui/                # Core Radix-based components
│   ├── hooks/                 # Custom React hooks (Queries & Mutations)
│   ├── lib/                   # Utility functions & API clients (Axios)
│   └── Dockerfile             # Multi-stage Next.js build
│
├── ⚙️ worker/                  # Python 3.12 Celery Worker
│   ├── core/                  # Celery config, RabbitMQ/Redis adapters
│   ├── services/
│   │   ├── ai_analysis/       # Google Gemini (GenAI) integration logic
│   │   └── transcription/     # WhisperX & pyannote-audio pipeline
│   ├── pyproject.toml         # Python dependencies (uv-managed)
│   └── Dockerfile             # Optimized PyTorch/CUDA environment
│
├── 🧩 browser-extension/       # Chrome/Edge Meeting Recorder
│   ├── manifest.json          # Extension V3 configuration
│   ├── js/
│   │   ├── background.js      # Recording coordinator & API sync
│   │   └── offscreen.js       # High-performance tab audio capture
│   └── html/                  # Popup & offscreen capture documents
│
├── 📚 docs/                    # Detailed API & implementation guides
└── 🐳 docker-compose.yml       # Full infrastructure orchestration
```

---

## 🗺️ Roadmap: The Future of SupaMeet

- [ ] **MCP (Model Context Protocol) Support**: Enable AI agents to query your meeting history securely.
- [ ] **Google Workspace & MS 365 Integration**: Sync calendars and push notes directly to Google Docs.
- [ ] **Live Meeting Transcription**: Real-time captions and summaries during live sessions.
- [ ] **Custom AI Personalities**: Summarize meetings from a Developer, PM, or Sales perspective.
- [ ] **Team Collaboration**: Shared folders and automated Slack/Discord highlights.

---

## 💻 Installation & Getting Started

### Prerequisites
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- Google Gemini API Key

### Quick Start with Docker
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/supameet.git
   cd supameet
   ```
2. **Configure Environment**:
   ```bash
   cp .env.example .env # Add your GENAI_API_KEY
   ```
3. **Run SupaMeet**:
   ```bash
   docker-compose up --build
   ```
4. **Access SupaMeet**:
   - Web Dashboard: [http://localhost:3001](http://localhost:3001)
   - API Documentation: [http://localhost:3000/api](http://localhost:3000/api)
   - Monitoring (Flower): [http://localhost:5555](http://localhost:5555)

---

## ⚙️ Development

For service-specific details, please refer to:
- [Backend Development Guide](./backend/README.md)
- [Frontend Development Guide](./frontend/README.md)
- [Worker Service Guide](./worker/README.md)

---

## 📄 License
SupaMeet is licensed under the **MIT License**.

Made with ❤️ in _India_
