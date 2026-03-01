"""
Transcription service controller
Handles audio transcription logic
"""

import os
import tempfile
import asyncio
from typing import Dict, Any, Optional
from datetime import datetime

from core.config import config, BUCKETS
from core.storage import create_storage_client
from core.tasks import TaskResult

class TranscriptionController:
    """Transcription service controller"""
    
    def __init__(self):
        self.storage = create_storage_client()
    
    async def transcribe_audio(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Transcribe audio file"""
        job_id = job_data.get("job_id")
        audio_url = job_data.get("audio_url")
        options = job_data.get("options", {})
        
        try:
            # Download audio
            bucket, object_key = self.storage.parse_url(audio_url)
            audio_bytes = await self.storage.download_file(bucket, object_key)
            
            # Save to temp file
            temp_dir = os.path.join(config.temp_dir, job_id)
            os.makedirs(temp_dir, exist_ok=True)
            temp_audio_path = os.path.join(temp_dir, f"{job_id}.mp3")
            
            with open(temp_audio_path, 'wb') as f:
                f.write(audio_bytes)
            
            try:
                # Transcribe
                result = await self._transcribe_with_whisperx(temp_audio_path, options)
                
                # Upload transcript
                transcript_url = await self._upload_transcript(result, job_id)
                
                return {
                    "job_id": job_id,
                    "transcript_url": transcript_url,
                    "transcript_data": result,
                    "processed_at": datetime.now().isoformat()
                }
                
            finally:
                # Cleanup
                if os.path.exists(temp_audio_path):
                    os.unlink(temp_audio_path)
                    
        except Exception as e:
            raise Exception(f"Transcription failed: {e}")
    
    async def _transcribe_with_whisperx(self, audio_path: str, options: Dict[str, Any]) -> Dict[str, Any]:
        """Transcribe using WhisperX"""
        try:
            import whisperx
            import torch
            
            # Load model
            device = "cuda" if torch.cuda.is_available() and config.whisper_device == "auto" else config.whisper_device
            model = whisperx.load_model(config.whisper_model, device=device)
            
            # Transcribe
            loop = asyncio.get_event_loop()
            
            def transcribe():
                result = model.transcribe(
                    audio_path,
                    language=options.get("language") if options.get("language") != "auto" else None
                )
                
                if options.get("diarize", True):
                    diarization_model = whisperx.DiarizationPipeline(
                        use_auth_token=config.hf_api_key if config.hf_api_key else None,
                        device=device
                    )
                    diarize_segments = diarization_model(audio_path)
                    result = whisperx.assign_word_speakers(diarize_segments, result)
                
                return result
            
            result = await loop.run_in_executor(None, transcribe)
            
            # Convert to VTT
            vtt_content = self._convert_to_vtt(result)
            
            # Extract speakers
            speakers = []
            if options.get("diarize", True) and "segments" in result:
                speaker_set = set()
                for segment in result["segments"]:
                    if "speaker" in segment:
                        speaker_set.add(segment["speaker"])
                speakers = sorted(list(speaker_set))
            
            return {
                "vtt_content": vtt_content,
                "segments": result.get("segments", []),
                "language": result.get("language", options.get("language", "en")),
                "speakers": speakers,
                "duration": result.get("duration", 0)
            }
            
        except Exception as e:
            raise Exception(f"WhisperX transcription failed: {e}")
    
    def _convert_to_vtt(self, result: Dict[str, Any]) -> str:
        """Convert transcription to VTT format"""
        vtt_lines = ["WEBVTT", ""]
        
        segments = result.get("segments", [])
        for i, segment in enumerate(segments):
            start_time = segment.get("start", 0)
            end_time = segment.get("end", 0)
            text = segment.get("text", "")
            speaker = segment.get("speaker", "Unknown")
            
            start_vtt = self._format_timestamp(start_time)
            end_vtt = self._format_timestamp(end_time)
            
            vtt_lines.append(f"{i + 1}")
            vtt_lines.append(f"{start_vtt} --> {end_vtt}")
            vtt_lines.append(f"[{speaker}] {text}")
            vtt_lines.append("")
        
        return "\n".join(vtt_lines)
    
    def _format_timestamp(self, seconds: float) -> str:
        """Format timestamp for VTT"""
        hours = int(seconds // 3600)
        minutes = int((seconds % 3600) // 60)
        secs = seconds % 60
        return f"{hours:02d}:{minutes:02d}:{secs:06.3f}"
    
    async def _upload_transcript(self, result: Dict[str, Any], job_id: str) -> str:
        """Upload transcript to storage"""
        vtt_content = result["vtt_content"]
        object_key = f"transcripts/{job_id}.vtt"
        
        url = await self.storage.upload_bytes(
            BUCKETS["transcripts"],
            object_key,
            vtt_content.encode('utf-8'),
            "text/vtt"
        )
        
        return url
