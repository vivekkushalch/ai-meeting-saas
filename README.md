# MeetBuddy

MeetBuddy is an intelligent meeting assistant that helps you transcribe, analyze, and summarize your meeting recordings. It processes audio files, generates transcripts, and provides AI-powered insights including meeting summaries, key points, and action items.

## Features

- 🎙️ Upload and process audio recordings (supports WAV, MP3, OGG, M4A, WebM)
- ✍️ Automatic transcription of meeting content
- 🤖 AI-powered meeting analysis including:
  - Meeting title generation
  - Concise meeting summary
  - Key points and takeaways
  - Action items with priorities and deadlines
  - Detailed meeting notes
- 📱 Responsive web interface
- ⚡ Fast processing with local transcription models

## Prerequisites

- Python 3.8+
- pip (Python package manager)
- Google Gemini API key (for AI analysis)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd meetbuddy
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   .\.venv\Scripts\activate  # Windows
   # or
   source .venv/bin/activate  # Linux/Mac
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   Create a `.env` file in the project root and add your Google Gemini API key:
   ```
   GENAI_API_KEY=your_api_key_here
   ```

## Usage

1. Start the application:
   ```bash
   python main.py
   ```

2. Open your browser and navigate to `http://localhost:5000`

3. Upload your meeting recording file through the web interface

4. View the processed results including transcription and AI analysis

## Project Structure

- `main.py` - Main Flask application and API endpoints
- `llm.py` - AI processing using Google's Gemini model
- `convert.py` - Audio processing and transcription logic
- `templates/` - HTML templates for the web interface
- `uploads/` - Directory for uploaded audio files
- `output/` - Directory for generated output files

## Configuration

You can modify the following in `main.py`:
- `ALLOWED_EXTENSIONS` - Supported audio file formats
- `MAX_FILE_SIZE` - Maximum file size for uploads (default: 100MB)
- `UPLOAD_FOLDER` - Directory for storing uploaded files

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, please open an issue in the GitHub repository.

---

Made with ❤️ by [Your Name]