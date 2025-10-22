import os
from datetime import datetime
from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename

import convert
from llm import llm_process_subs_file

app = Flask(__name__, template_folder='.', static_folder='.')

# Configuration
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'wav', 'mp3', 'ogg', 'm4a', 'webm'}
MAX_FILE_SIZE = 100 * 1024 * 1024  # 100MB max file size
MIN_FILE_SIZE = 1 * 1024  # 1KB min file size

# Ensure upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs('./output', exist_ok=True)
os.makedirs('./models', exist_ok=True)


app.config.update(
    UPLOAD_FOLDER=UPLOAD_FOLDER,
    MAX_CONTENT_LENGTH=MAX_FILE_SIZE,  # Max upload size
    UPLOAD_EXTENSIONS=ALLOWED_EXTENSIONS,
    UPLOAD_PATH=UPLOAD_FOLDER
)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/view')
def view():
    return render_template('view.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        # Check if the post request has the file part
        if 'file' not in request.files:
            return jsonify({'success': False, 'error': 'No file part'}), 400
        
        file = request.files['file']
        
        # Check if file was selected
        if file.filename == '':
            return jsonify({'success': False, 'error': 'No file selected'}), 400
        
        # Check file extension
        if not allowed_file(file.filename):
            return jsonify({
                'success': False,
                'error': f'Invalid file type. Allowed types: {', '.join(ALLOWED_EXTENSIONS)}'
            }), 400
        
        # Check file size
        file.seek(0, os.SEEK_END)
        file_size = file.tell()
        file.seek(0)  # Reset file pointer
        
        if file_size < MIN_FILE_SIZE:
            return jsonify({
                'success': False,
                'error': f'File too small. Minimum size: {MIN_FILE_SIZE/1024}KB'
            }), 400
            
        if file_size > MAX_FILE_SIZE:
            return jsonify({
                'success': False,
                'error': f'File too large. Maximum size: {MAX_FILE_SIZE/(1024*1024):.1f}MB'
            }), 400
        
        # Generate unique filename
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = secure_filename(f"{timestamp}_{file.filename}")
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        
        # Save the file
        print("saving file...", filename)
        file.save(filepath)
        
        # Get file info after saving
        file_size_kb = os.path.getsize(filepath) / 1024

        print("transcribing audio...")
        # transcribe audio
        vtt_path = convert.transcribe_diarize_audio(filepath)

        print("llm processing...")
        processed = llm_process_subs_file(vtt_path.replace('uploads', 'output'))

        print("returning response...")
        # return response
        return jsonify({
            'success': True,
            'message': 'File uploaded and transcribed successfully',
            'vtt_path': vtt_path,
            'filename': filename,
            'filepath': filepath,
            'size_kb': round(file_size_kb, 2),
            'file_type': file.content_type,
            'llm_processed': processed
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'An error occurred: {str(e)}'
        }), 500

if __name__ == '__main__':
    app.run(debug=True)