import json
import os

from google import genai
from google.genai import types
from pydantic import BaseModel
from rich import print
import json_repair


from dotenv import load_dotenv
load_dotenv()

class MeetingAnalysis(BaseModel):
    meeting_title: str
    meeting_summery: str
    meeting_keypoints: list[str]
    meeting_todos: list[dict[str, str]]
    meeting_notes: str


API_KEY = os.environ.get("GENAI_API_KEY")

client = genai.Client(api_key=API_KEY)


def llm_process_subs_file(subs_file_path):
    prompt = """You are a professional meeting assistant. 
    given the following srt file contents of my meeting please analyze it and generate a output in strict json as follows
    {
        "meeting_title": title of the meeting that u think will suite the best,
        "meeting_summery":  a good summary of the meeting,
        "meeting_keypoints":  the keypoints and keytakeaways from the meeting,
        "meeting_todos" : [{todo_title, todo_deadline, todo_
        priority}] the todos and action items from the meeting,
        "meeting_notes" :  the notes from the meeting,
    }

    Here is the meeting srt file contents:

    """
    with open(subs_file_path, 'r') as f:
        prompt += f.read()
        

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    #     config=types.GenerateContentConfig(
    #     response_mime_type='application/json',
    #     response_schema=MeetingAnalysis,
    # )
    )

    # try to parse the response as json, fix any issues
    try:
        response_json = response.text
        response_json = response_json.replace('```json', '').replace('```', '')
        fix_json = json_repair.repair_json(response_json)
        print(fix_json)
        return json.loads(fix_json)
    except Exception as e:
        print(f"Error parsing response as json: {e}")
        return None



# processed = llm_process_subs_file(
#     './uploads/20251019_134140_recording.srt'
#     )
