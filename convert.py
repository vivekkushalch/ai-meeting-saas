import os
import argparse
from typing import Optional, List, Dict, Any
from whisperx.transcribe import transcribe_task

from dataclasses import dataclass
from dataclasses import asdict as dataclass_asdict

# def transcribe_audio(
#     audio_path: str,
#     model_name: str = "base",
#     device: str = "cpu",
#     language: Optional[str] = None,
#     batch_size: int = 8,
#     compute_type: str = "int8",
#     output_dir: str = "./output",
#     output_format: str = "all",
#     diarize: bool = False,
#     hf_token: Optional[str] = os.getenv("HF_API_KEY"),
#     verbose: bool = False,
#     **kwargs
# ) -> Dict[str, Any]:
#     """
#     Transcribe audio file using WhisperX with optional diarization.
    
#     Args:
#         audio_path: Path to the audio file to transcribe
#         model_name: Name of the Whisper model to use (default: "small")
#         device: Device to use for inference (default: "cuda" if available, else "cpu")
#         language: Language code (e.g., "en"), or None for auto-detection
#         batch_size: Batch size for inference (default: 8)
#         compute_type: Compute type (default: "float16")
#         output_dir: Directory to save output files (default: current directory)
#         output_format: Output format (default: "all" for all formats)
#         diarize: Whether to perform speaker diarization (default: False)
#         hf_token: Hugging Face token for accessing gated models
#         **kwargs: Additional arguments to pass to WhisperX
        
#     Returns:
#         Dictionary containing transcription results and metadata
#     """
#     # import torch
#     # from whisperx.utils import LANGUAGES, TO_LANGUAGE_CODE
    
#     # Create arguments dictionary similar to CLI
#     args = {
#         "audio": [audio_path],
#         "model": model_name,
#         "device": device,
#         "language": language,
#         "batch_size": batch_size,
#         "compute_type": compute_type,
#         "output_dir": output_dir,
#         "output_format": output_format,
#         "diarize": diarize,
#         "hf_token": hf_token,
#         "verbose": verbose,
#         "align_model": None,
#         "model_dir": "./models",
#         "model_cache_only": True,
#         "device_index": 0,
#         "verbose": False,
#     "interpolate_method": "nearest",
#     "no_align": False,
#     "return_char_alignments": False,

#     "chunk_size": 30,
#     # "diarize": True,
#     "min_speakers": None,
#     "max_speakers": None,
#     "diarize_model": "pyannote/speaker-diarization-3.1",
#     "speaker_embeddings": False,
#     "temperature": 0,
#     "best_of": 5,
#     "beam_size": 5,
#     "patience": 1.0,
#     "length_penalty": 1.0,
#     "suppress_tokens": "-1",
#     "suppress_numerals": False,
#     "initial_prompt": None,
#     "hotwords": None,
#     "condition_on_previous_text": False,
#     "fp16": False,
#     "temperature_increment_on_fallback": 0.2,
#     "compression_ratio_threshold": 2.4,
#     "logprob_threshold": -1.0,
#     "no_speech_threshold": 0.6,
#     "max_line_width": None,
#     "max_line_count": None,
#     "highlight_words": False,
#     "segment_resolution": "sentence",
#     "threads": 2,
#     "task": "transcribe",
#     # "hf_token": None,
#     "print_progress": True,

#     "vad_method": "pyannote",
#             "vad_onset": 0.5,
#             "vad_offset": 0.363,
#             "chunk_size": 30,
#         **kwargs
#     }
    


@dataclass
class TranscribeAudioConfig:
    audio: list[str]
    model: str = "base"
    device: str = "cpu"
    language: Optional[str] = None
    batch_size: int = 8
    compute_type: str = "int8"
    output_dir: str = "./output"
    output_format: str = "all"
    diarize: bool = False
    hf_token: Optional[str] = os.getenv("HF_API_KEY")
    verbose: bool = False
    align_model: Optional[str] = None
    model_dir: str = "./models"
    model_cache_only: bool = True
    device_index: int = 0
    interpolate_method: str = "nearest"
    no_align: bool = False
    return_char_alignments: bool = False
    chunk_size: int = 30
    min_speakers: Optional[int] = None
    max_speakers: Optional[int] = None
    diarize_model: str = "pyannote/speaker-diarization-3.1"
    speaker_embeddings: bool = False
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
    compression_ratio_threshold: float = 2.4
    logprob_threshold: float = -1.0
    no_speech_threshold: float = 0.6
    max_line_width: Optional[int] = None
    max_line_count: Optional[int] = None
    highlight_words: bool = False
    segment_resolution: str = "sentence"
    threads: int = 2
    task: str = "transcribe"
    print_progress: bool = True
    vad_method: str = "pyannote"
    vad_onset: float = 0.5
    vad_offset: float = 0.363


def transcribe_audio(
    config: TranscribeAudioConfig
) -> Dict[str, Any]:
    # Transcription logic here

    print(config)
    
    # Create a dummy parser for error handling
    temp_parser = argparse.ArgumentParser()
    
    try:
        # Call the transcribe_task function with our arguments
        return transcribe_task(dataclass_asdict(config), temp_parser)
    except Exception as e:
        return {"error": str(e), "success": False}


def transcribe_diarize_audio(filepath:str):
    config = TranscribeAudioConfig(
        audio=[filepath],
        diarize=True,
    )
    result = transcribe_audio(config)
    if result and result["success"]:
        raise Exception(result["error"])
        return None
    return os.path.splitext(filepath)[0] + ".vtt"

# transcribe_diarize_audio("uploads/20251019_142409_recording.webm")

# if __name__ == "__main__":
    # Example: Transcribe a single file
    # config = TranscribeAudioConfig(
    #     ["uploads/20251019_142409_recording.mp3"],
    #     # model_name="base",
    #     # language="en",
    #     output_format="vtt",
    #     diarize=True,
    #     # hf_token=os.getenv("HF_API_KEY"),
    #     # model_dir="./models",
    #     # model_cache_only=True,
    #     # device_index = 0,
    #     # verbose=True,
    # )
    # result = transcribe_audio(config)
    # print("Transcription complete. Results:", result)


# main()

#             else:
#                 print(f"  No speaker found for this segment")
        
#         # Merge consecutive segments of the same speaker
#         speaker_transcriptions = self.merge_consecutive_segments(speaker_transcriptions)
#         return speaker_transcriptions

#     def find_best_match(self, diarization, start_time, end_time):
#         best_match = None
#         max_intersection = 0

#         for turn, _, speaker in diarization.itertracks(yield_label=True):
#             turn_start = turn.start
#             turn_end = turn.end

#             # Calculate intersection manually
#             intersection_start = max(start_time, turn_start)
#             intersection_end = min(end_time, turn_end)

#             if intersection_start < intersection_end:
#                 intersection_length = intersection_end - intersection_start
#                 if intersection_length > max_intersection:
#                     max_intersection = intersection_length
#                     best_match = (turn_start, turn_end, speaker)

#         return best_match

#     def merge_consecutive_segments(self, segments):
#         merged_segments = []
#         previous_segment = None

#         for segment in segments:
#             if previous_segment is None:
#                 previous_segment = segment
#             else:
#                 if segment[0] == previous_segment[0]:
#                     # Merge segments of the same speaker that are consecutive
#                     previous_segment = (
#                         previous_segment[0],
#                         previous_segment[1],
#                         segment[2],
#                         previous_segment[3] + segment[3]
#                     )
#                 else:
#                     merged_segments.append(previous_segment)
#                     previous_segment = segment

#         if previous_segment:
#             merged_segments.append(previous_segment)

#         return merged_segments
#     def get_last_segment(self, annotation):
#         last_segment = None
#         for segment in annotation.itersegments():
#             last_segment = segment
#         return last_segment






# def audio_speaker_recognition(filepath):

#     print("loding model...")
#     pipeline = Pipeline.from_pretrained(
#         "pyannote/speaker-diarization-3.1",
#         cache_dir="./models",
#         use_auth_token=HF_TOKEN
#     )

#     # send pipeline to GPU (when available)
#     # pipeline.to(torch.device("cuda"))

#     print("processing audio...")
#     # apply pretrained pipeline (with optional progress hook)
#     with ProgressHook() as hook:
#         output = pipeline(filepath, hook=hook)  # runs locally

#     print(output)
#     return output



# def transcribe_audio(audio_path: str, model_path: str = './ggml-tiny.bin', language: str = 'auto') -> str:
#     """
#     Transcribe audio file to SRT format
    
#     Args:
#         audio_path: Path to the audio file
#         model_path: Path to the Whisper model file
#         language: Language code for transcription (default: auto-detect)
        
#     Returns:
#         str: filepath
#     """
#     model = Model(model_path, language=language)
#     segments = model.transcribe(audio_path)
#     # return output_srt(segments, f'{os.path.splitext(audio_path)[0]}.srt')
#     print(segments)
#     return {
#         "vvt_filepath": output_vtt(segments, f'{os.path.splitext(audio_path)[0]}.vtt'),
#         "segments": segments
#         }







# # text = transcribe_audio(
# #     'uploads/20251019_133141_recording.webm',
# #     './ggml-tiny.bin',
# #     'auto'
# #     )

# # print(text)    


# def format_timestamp(seconds):
#     """Convert seconds to VTT timestamp format (HH:MM:SS.mmm)"""
#     hours = int(seconds // 3600)
#     minutes = int((seconds % 3600) // 60)
#     seconds = seconds % 60
#     return f"{hours:02d}:{minutes:02d}:{seconds:06.3f}".replace('.', ',')

# def create_speaker_vtt(aligned_transcription, output_path):
#     """
#     Create a VTT file with speaker labels from aligned transcription
    
#     Args:
#         aligned_transcription: List of tuples (speaker, start_time, end_time, text)
#         output_path: Path to save the VTT file
        
#     Returns:
#         dict: Dictionary containing output file path and metadata
#     """
#     # Create VTT content manually to avoid webvtt library issues with large timestamps
#     vtt_content = "WEBVTT\n\n"
    
#     # Add speaker information as a note
#     speakers = sorted(set(segment[0] for segment in aligned_transcription))
#     vtt_content += f"NOTE\nTotal speakers: {len(speakers)}\n"
#     vtt_content += f"Speakers: {', '.join(speakers)}\n\n"
    
#     # Add each caption
#     for speaker, start_time, end_time, text in aligned_transcription:
#         start_str = format_timestamp(start_time)
#         end_str = format_timestamp(end_time)
#         vtt_content += f"{start_str} --> {end_str}\n"
#         # Add speaker label and text
#         vtt_content += f"[{speaker}] {text}\n\n"
    
#     # Ensure output directory exists
#     os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
#     # Write to file
#     with open(output_path, 'w', encoding='utf-8') as f:
#         f.write(vtt_content)
    
#     # Calculate duration
#     duration = max(segment[2] for segment in aligned_transcription) if aligned_transcription else 0
    
#     return {
#         'vtt_file': output_path,
#         'total_speakers': len(speakers),
#         'speakers': speakers,
#         'duration_seconds': float(duration)
#     }

# def process_audio_with_speakers(audio_path: str, segments_text: str = None, model_path: str = './ggml-tiny.bin', language: str = 'auto') -> dict:
#     """
#     Process audio file to generate speaker-aware transcription
    
#     Args:
#         audio_path: Path to the audio file
#         segments_text: Optional pre-processed segments text in the format 't0=0, t1=100, text=...'
#         model_path: Path to the Whisper model file
#         language: Language code for transcription (default: auto-detect)
        
#     Returns:
#         dict: Dictionary containing aligned transcription and metadata
#     """
#     print("Starting audio processing...")
    
#     # Get base filename for output
#     base_path = os.path.splitext(audio_path)[0]
#     output_vtt = f"{base_path}_speakers.vtt"
    
#     # If segments_text is not provided, transcribe the audio
#     if segments_text is None:
#         print("Starting transcription...")
#         transcription = transcribe_audio(audio_path, model_path, language)
#         segments_text = '\n'.join([
#             f"t0={int(segment.t0*1000)}, t1={int(segment.t1*1000)}, text={segment.text}" 
#             for segment in transcription['segments']
#         ])
    
#     print("Starting speaker diarization...")
#     diarization = audio_speaker_recognition(audio_path)
    
#     # Combine and create final VTT
#     print("Combining results...")

#     speaker_aligner = SpeakerAligner()
#     aligned_transcription = speaker_aligner.align(segments_text, diarization)
    
#     # Create VTT file with speaker information
#     result = create_speaker_vtt(aligned_transcription, output_vtt)
    
#     print(f"Processing complete. Found {result['total_speakers']} speakers: {', '.join(result['speakers'])}")
    
#     # Also include the raw transcription data
#     result['transcription'] = [
#         {'speaker': speaker, 'start': start, 'end': end, 'text': text}
#         for speaker, start, end, text in aligned_transcription
#     ]
    
#     return result

# if __name__ == "__main__":
#     # Example usage
#     audio_file = 'uploads/20251019_142409_recording.mp3'  # Update this path as needed
#     result = process_audio_with_speakers(audio_file)
#     print(f"Processing complete. Results: {result}")


# # audio_speaker_recognition('uploads/20251019_142923_recording.')







# =================================================================================


# import whisperx
# import gc
# from whisperx.diarize import DiarizationPipeline
# from rich import print


# device = "cpu"
# audio_file = "uploads/20251019_142409_recording.mp3"
# batch_size = 6 # reduce if low on GPU mem
# compute_type = "int8" # change to "int8" if low on GPU mem (may reduce accuracy)





# # 1. Transcribe with original whisper (batched)
# # model = whisperx.load_model("base", device, compute_type=compute_type)

# # save model to local path (optional)
# model_dir = "./models"
# model = whisperx.load_model("base", device, compute_type=compute_type, download_root=model_dir)

# audio = whisperx.load_audio(audio_file)
# result = model.transcribe(audio, batch_size=batch_size)

# print("\n\n==========================================")
# print(result)
# print(result["segments"]) # before alignment

# # delete model if low on GPU resources
# # import gc; import torch; gc.collect(); torch.cuda.empty_cache(); del model

# # 2. Align whisper output
# model_a, metadata = whisperx.load_align_model(language_code=result["language"], device=device)
# result = whisperx.align(result["segments"], model_a, metadata, audio, device, return_char_alignments=False)

# print("\n\n==========================================")
# print(result)
# print(result["segments"]) # after alignment

# # delete model if low on GPU resources
# # import gc; import torch; gc.collect(); torch.cuda.empty_cache(); del model_a

# import os
# HF_TOKEN = os.getenv("HF_API_KEY")
# # 3. Assign speaker labels
# diarize_model = DiarizationPipeline(use_auth_token=HF_TOKEN, device=device)

# # add min/max number of speakers if known
# diarize_segments = diarize_model(audio)
# # diarize_model(audio, min_speakers=min_speakers, max_speakers=max_speakers)

# result = whisperx.assign_word_speakers(diarize_segments, result)
# print("\n\n==========================================")
# print(diarize_segments)
# print("\n\n==========================================")
# print(result)
# print(result["segments"]) # segments are now assigned speaker IDs

# # from whisperx.transcribe import transcribe_task


# from whisperx.utils import WriteVTT

# writer = WriteVTT("./output")
# writer.write_result(result, "output.vtt")