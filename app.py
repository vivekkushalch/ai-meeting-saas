import os
import shutil
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

from fastapi import FastAPI, File, HTTPException, Request, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from services.audio_transcriber import transcribe_diarize_audio
from services.ai_analyzer import llm_process_subs_file

# Configuration
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'wav', 'mp3', 'ogg', 'm4a', 'webm'}
MAX_FILE_SIZE = 100 * 1024 * 1024  # 100MB max file size
MIN_FILE_SIZE = 1 * 1024  # 1KB min file size

# Ensure upload and output directories exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs('./output', exist_ok=True)
os.makedirs('./ai_models_cache', exist_ok=True)

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
# app.mount("/static", StaticFiles(directory="."), name="static")
templates = Jinja2Templates(directory="templates")

def allowed_file(filename: str) -> bool:
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/analysis", response_class=HTMLResponse)
async def view_analysis(request: Request):
    return templates.TemplateResponse("view_analysis.html", {"request": request})


@app.get("/check_transcript", response_class=HTMLResponse)
async def check_transcript(request: Request):
    """View the audio and its transcription in sync
    """
    return templates.TemplateResponse("check_transcript.html", {"request": request})


def get_dummy_analysis():
    """Return a dummy analysis response for UI testing"""
    import json
    from datetime import datetime, timedelta
    
    # Generate a future date for deadlines
    future_date = (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d")
    
    dummy_data = {
        'success': True,
        'message': 'File uploaded and transcribed successfully',
        'vtt_path': 'vtt_path',
        'filename': 'filename',
        'filepath': 'filepath',
        'size_kb': round(1024, 2),
        'file_type': 'file_type',

        'llm_processed': {
            "meeting_title": "Quarterly Product Strategy Discussion",
            "meeting_date": datetime.now().strftime("%B %d, %Y"),
            "meeting_duration": "1h 24m",
            "meeting_summery": "The team discussed the Q2 product roadmap, focusing on key features and priorities. We reviewed the current progress and aligned on the next steps for the development team. Marketing provided updates on the upcoming campaign.",
            "meeting_keypoints": [
                "Q2 roadmap includes 3 major features and 5 minor updates",
                "Development team is on track with 80% of Q1 goals completed",
                "New marketing campaign to launch in 3 weeks",
                "Customer feedback will be collected for feature prioritization"
            ],
            "meeting_todos": [
                {
                    "todo_title": "Finalize Q2 feature requirements",
                    "todo_description": "Document detailed requirements for the new search functionality",
                    "todo_priority": "high",
                    "todo_deadline": future_date,
                    "todo_assignee": "Alex"
                },
                {
                    "todo_title": "Prepare marketing materials",
                    "todo_description": "Create slides and documentation for the new features",
                    "todo_priority": "medium",
                    "todo_deadline": future_date,
                    "todo_assignee": "Jordan"
                },
                {
                    "todo_title": "Schedule customer feedback sessions",
                    "todo_description": "Reach out to 10 customers for feedback on the beta features",
                    "todo_priority": "low",
                    "todo_deadline": future_date,
                    "todo_assignee": "Taylor"
                }
            ],
            "meeting_notes": "The meeting started with a review of the Q1 achievements and challenges. The product team presented the proposed Q2 roadmap, which was well-received. There was a discussion about resource allocation and potential risks. Action items were assigned, and the next meeting was scheduled for two weeks from now."
        }
    }
    
    return dummy_data

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        # Check file extension
        if not allowed_file(file.filename):
            raise HTTPException(
                status_code=400,
                detail=f'Invalid file type. Allowed types: {", ".join(ALLOWED_EXTENSIONS)}'
            )
        
        # Generate unique filename
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{file.filename}"
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        
        # Save the file temporarily to check size
        temp_path = f"{filepath}.temp"
        with open(temp_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Check file size
        file_size = os.path.getsize(temp_path)
        
        if file_size < MIN_FILE_SIZE:
            os.remove(temp_path)
            raise HTTPException(
                status_code=400,
                detail=f'File too small. Minimum size: {MIN_FILE_SIZE/1024}KB'
            )
            
        if file_size > MAX_FILE_SIZE:
            os.remove(temp_path)
            raise HTTPException(
                status_code=400,
                detail=f'File too large. Maximum size: {MAX_FILE_SIZE/(1024*1024):.1f}MB'
            )
        
        # Rename temp file to final name
        os.rename(temp_path, filepath)
        file_size_kb = file_size / 1024

        print("Transcribing audio...")
        # Transcribe audio
        vtt_path = transcribe_diarize_audio(
            audio_path=filepath,
            output_dir='./output',
            hf_token=os.getenv("HF_API_KEY")
        )
        
        print("LLM processing...")
        # Process with LLM
        processed = llm_process_subs_file(vtt_path.replace('uploads', 'output'))
        
        # Read the VTT file content
        try:
            vtt_file_path = vtt_path.replace('uploads', 'output')
            print(f"Attempting to read VTT file from: {vtt_file_path}")
            
            with open(vtt_file_path, 'r', encoding='utf-8') as f:
                transcript_text = f.read()
            
            print("Successfully read transcript text:")
            print(transcript_text[:200] + "..." if len(transcript_text) > 200 else transcript_text)
            
            # Ensure processed is a dictionary
            if not isinstance(processed, dict):
                processed = {}
                print("Warning: processed is not a dictionary, using empty dict")
            
            # Add transcript text to the processed data
            processed['meeting_transcript_text'] = transcript_text
            
            print("Returning response...")
            return {
                'success': True,
                'message': 'File uploaded and transcribed successfully',
                'vtt_path': vtt_path,
                'filename': filename,
                'filepath': filepath,
                'size_kb': round(file_size_kb, 2),
                'file_type': file.content_type,
                'llm_processed': processed
            }
            
        except Exception as e:
            print(f"Error reading transcript file: {str(e)}")
            # Return the response even if transcript fails
            return {
                'success': True,
                'message': 'File processed but could not read transcript',
                'vtt_path': vtt_path,
                'filename': filename,
                'filepath': filepath,
                'size_kb': round(file_size_kb, 2),
                'file_type': file.content_type,
                'llm_processed': processed if isinstance(processed, dict) else {}
            }
        
        # return a dummy respone
        # return get_dummy_analysis()
    except Exception as e:
        # Clean up temp file if it exists
        temp_path = f"{filepath}.temp"
        if os.path.exists(temp_path):
            os.remove(temp_path)
            
        raise HTTPException(
            status_code=500,
            detail=f'An error occurred: {str(e)}'
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=7860)
