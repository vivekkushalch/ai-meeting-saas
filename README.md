# ai-meeting-saas - AI Meeting Assistant

ai-meeting-saas is an intelligent meeting assistant that helps you transcribe, analyze, and summarize your meeting recordings. It processes audio files, generates transcripts, and provides AI-powered insights including meeting summaries, key points, and action items.

## ✨ Features

- 🎙️ **Audio Processing**
  - Upload and process audio recordings (WAV, MP3, OGG, M4A, WebM)
  - Automatic format conversion
  - Background noise reduction

- 📝 **Transcription**
  - High-accuracy speech-to-text
  - Speaker diarization
  - Timestamped transcripts

- 🤖 **AI Analysis**
  - Smart meeting title generation
  - Concise meeting summaries
  - Key points and action items
  - Sentiment analysis
  - Follow-up recommendations

- 🌐 **Web Interface**
  - Responsive design
  - Real-time processing status
  - Downloadable reports
  - Dark/Light theme

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- [uv](https://github.com/astral-sh/uv) (Modern Python package manager)
- Google Gemini API key (for AI analysis)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>.git
   cd ai-meeting-saas
   ```

2. Copy the example environment file and update with your API key:
   ```bash
   cp .env.example .env
   # Edit .env with your API key
   ```

3. Install dependencies using uv:
   ```bash
   uv sync
   ```

### Environment Variables

Create a `.env` file with the following variables:

```env
# Required
GENAI_API_KEY=your_gemini_api_key
HF_API_KEY=your_hf_api_key
```

## 🚦 Usage

1. Start the development server:
   ```bash
   uv run app.py
   ```

2. Open your browser and navigate to [http://localhost:8000](http://localhost:8000)

3. Record your online meeting and upload to the server

4. View the processed results including transcription and AI analysis

## 🏗️ Project Structure

```
ai-meeting-saas/
├── .env.example           # Example environment variables
├── app.py                # Main Flask application
├── pyproject.toml        # Project metadata and dependencies
├── services/
│   ├── __init__.py
│   ├── audio_transcriber.py  # Audio processing and transcription
│   └── ai_analyzer.py        # AI-powered meeting analysis
├── templates/             # HTML templates
│   ├── index.html
│   └── view.html
├── uploads/              # Store uploaded audio files
└── output/               # Generated transcripts
```

## 🛠️ Development

1. Install development dependencies:
   ```bash
   uv pip install -e ".[dev]"
   ```

2. Run the development server with auto-reload:
   ```bash
   python -m flask --app app.py --debug run
   ```

3. Run tests:
   ```bash
   pytest
   ```

## ⚙️ Configuration

### Application Settings

You can configure the application by setting environment variables in your `.env` file:

- `DEBUG`: Enable debug mode (default: `False`)
- `UPLOAD_FOLDER`: Directory for uploaded files (default: `uploads`)
- `MAX_CONTENT_LENGTH`: Maximum file size in bytes (default: 100MB)
- `ALLOWED_EXTENSIONS`: Comma-separated list of allowed file extensions (default: `wav,mp3,ogg,m4a,webm`)

### AI Configuration

- `GENAI_API_KEY`: Your Google Gemini API key (required)
- `MODEL_NAME`: AI model to use (default: `gemini-pro`)
- `TEMPERATURE`: Controls randomness in AI responses (0.0 to 1.0)

## 📚 Documentation

For detailed documentation, please refer to the [docs](./docs) directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's style guidelines and includes appropriate tests.



---

Made with ❤️ in _India_