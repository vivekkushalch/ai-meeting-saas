import os
from typing import Optional, List, Dict, Any
from dataclasses import dataclass, asdict
from whisperx.transcribe import transcribe_task
import argparse

from dotenv import load_dotenv
load_dotenv()


@dataclass
class TranscribeAudioConfig:
    """Configuration for audio transcription using WhisperX."""
    
    # Required parameters
    audio: List[str]
    
    # Model parameters
    model: str = "base"
    device: str = "cuda" if os.environ.get("CUDA_VISIBLE_DEVICES") else "cpu"
    compute_type: str = "float16" if device == "cuda" else "int8"
    language: Optional[str] = None
    task: str = "transcribe"
    
    # Output settings
    output_dir: str = "./output"
    output_format: str = "vtt"
    
    # Diarization settings
    diarize: bool = True
    diarize_model: str = "pyannote/speaker-diarization-3.1"
    min_speakers: Optional[int] = None
    max_speakers: Optional[int] = None
    
    # Performance settings
    batch_size: int = 8
    chunk_size: int = 30
    threads: int = 2
    
    # Advanced parameters
    hf_token: Optional[str] = os.getenv("HF_API_KEY")
    model_dir: str = "./ai_models_cache"
    model_cache_only: bool = True
    device_index: int = 0
    align_model: Optional[str] = None
    interpolate_method: str = "nearest"
    no_align: bool = False
    return_char_alignments: bool = False
    speaker_embeddings: bool = False
    
    # Decoding parameters
    temperature: float = 0.0
    best_of: int = 5
    beam_size: int = 5
    patience: float = 1.0
    length_penalty: float = 1.0
    suppress_tokens: str = "-1"
    suppress_numerals: bool = False
    initial_prompt: Optional[str] = None
    hotwords: Optional[List[str]] = None
    condition_on_previous_text: bool = False
    fp16: bool = False
    temperature_increment_on_fallback: float = 0.2
    
    # Output control
    max_line_width: Optional[int] = None
    max_line_count: Optional[int] = None
    highlight_words: bool = False
    segment_resolution: str = "sentence"
    print_progress: bool = True
    
    # Thresholds
    no_speech_threshold: float = 0.6
    logprob_threshold: float = -1.0
    compression_ratio_threshold: float = 2.4
    verbose: bool = False
    
    # Voice Activity Detection
    vad_method: str = "pyannote"
    vad_onset: float = 0.5
    vad_offset: float = 0.363


def transcribe_audio(config: TranscribeAudioConfig) -> Dict[str, Any]:
    """
    Transcribe audio using WhisperX with the given configuration.
    
    Args:
        config: Configuration for the transcription
        
    Returns:
        Dict containing transcription results or error information
    """
    try:
        # Create a dummy parser for error handling
        temp_parser = argparse.ArgumentParser()
        
        # Convert config to dict and call transcribe_task
        config_dict = asdict(config)
        return transcribe_task(config_dict, temp_parser)
    except Exception as e:
        return {"error": str(e), "success": False}


def transcribe_diarize_audio(
    audio_path: str,
    output_dir: str = "./output",
    model: str = "base",
    language: Optional[str] = None,
    hf_token: Optional[str] = None,
    min_speakers: Optional[int] = None,
    max_speakers: Optional[int] = None
) -> str:
    """
    Transcribe and diarize an audio file.
    
    Args:
        audio_path: Path to the audio file
        output_dir: Directory to save output files
        model: Whisper model to use
        language: Language code (e.g., 'en')
        hf_token: Hugging Face authentication token
        min_speakers: Minimum number of speakers
        max_speakers: Maximum number of speakers
        
    Returns:
        Path to the generated VTT file
        
    Raises:
        Exception: If transcription fails
    """
    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    config = TranscribeAudioConfig(
        audio=[audio_path],
        model=model,
        language=language,
        output_dir=output_dir,
        output_format="vtt",
        diarize=True,
        min_speakers=min_speakers,
        max_speakers=max_speakers,
        hf_token=hf_token or os.getenv("HF_API_KEY")
    )
    
    result = transcribe_audio(config)
    
    if result and not result.get("success", True):
        raise Exception(result.get("error", "Unknown error during transcription"))
    
    # Return path to the VTT file
    base_name = os.path.splitext(os.path.basename(audio_path))[0]
    return os.path.join(output_dir, f"{base_name}.vtt")



# use as a cli
# if __name__ == "__main__":
#     import argparse
    
#     parser = argparse.ArgumentParser(description="Transcribe and diarize audio files")
#     parser.add_argument("audio_path", help="Path to the audio file to transcribe")
#     parser.add_argument("--output-dir", default="./output", help="Output directory")
#     parser.add_argument("--model", default="base", help="Whisper model to use")
#     parser.add_argument("--language", help="Language code (e.g., 'en')")
#     parser.add_argument("--min-speakers", type=int, help="Minimum number of speakers")
#     parser.add_argument("--max-speakers", type=int, help="Maximum number of speakers")
    
#     args = parser.parse_args()
    
#     try:
#         vtt_path = transcribe_diarize_audio(
#             audio_path=args.audio_path,
#             output_dir=args.output_dir,
#             model=args.model,
#             language=args.language,
#             min_speakers=args.min_speakers,
#             max_speakers=args.max_speakers
#         )
#         print(f"Transcription complete. VTT file saved to: {vtt_path}")
#     except Exception as e:
#         print(f"Error during transcription: {str(e)}")
#         exit(1)
