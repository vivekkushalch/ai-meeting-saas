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

@app.get("/view", response_class=HTMLResponse)
async def view(request: Request):
    """View the audio and its transcription in sync
    """
    return templates.TemplateResponse("view.html", {"request": request})

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

        print("Returning response...")
        #   Return response
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
        
        # return a dummy respone
        # return {
        #     'success': True,
        #     'message': 'File uploaded and transcribed successfully',
        #     'vtt_path': 'dummy_vtt_path',
        #     'filename': 'dummy_filename',
        #     'filepath': 'dummy_filepath',
        #     'size_kb': round(file_size_kb, 2),
        #     'file_type': 'dummy_file_type',
        #     'llm_processed': {
        #         'meeting_title': 'dummy_meeting_title',
        #         'meeting_summery': 'dummy_meeting_summery',
        #         'meeting_keypoints': ['dummy_meeting_keypoint_1', 'dummy_meeting_keypoint_2'],
        #         'meeting_todos': [
        #             {
        #                 'todo_title': 'dummy_todo_title',
        #                 'todo_deadline': 'dummy_todo_deadline',
        #                 'todo_priority': 'dummy_todo_priority'
        #             }
        #         ],
        #         'meeting_notes': 'dummy_meeting_notes'
        #     }
        # }
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
    uvicorn.run(app, host="0.0.0.0", port=8000)
