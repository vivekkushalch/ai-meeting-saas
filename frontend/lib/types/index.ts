export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

// User Types
export interface User {
  id: string;
  email: string;
  full_name: string;
  company?: string;
  avatar_url?: string;
  timezone: string;
  language: string;
  created_at: string;
  updated_at: string;
}

export interface UserStatistics {
  total_meetings: number;
  completed_meetings: number;
  total_tasks: number;
  completed_tasks: number;
  upcoming_meetings: number;
}

export interface UserProfileResponse extends ApiResponse<{
  user: User;
  statistics: UserStatistics;
}> {}

export interface UpdateProfileRequest {
  full_name?: string;
  company?: string;
  timezone?: string;
  language?: string;
}

export interface ChangePasswordRequest {
  current_password: string;
  new_password: string;
}

// Auth Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends ApiResponse<{
  access_token: string;
  token_type: string;
  user: Partial<User>;
}> {}

export interface RegisterRequest {
  email: string;
  password: string;
  full_name: string;
  company?: string;
}

export interface RegisterResponse extends ApiResponse<{
  user: User;
  access_token: string;
  token_type: string;
}> {}

export interface RefreshResponse extends ApiResponse<{
  access_token: string;
  token_type: string;
}> {}

// Meeting Types
export interface Meeting {
  id: string;
  title: string;
  date: string;
  duration: string;
  status: "upcoming" | "completed";
  participants: string[];
  platform?: string;
  meeting_link?: string;
  summary?: string;
  transcript?: string;
  analysis?: MeetingAnalysis;
  transcript_available: boolean;
  analysis_available: boolean;
  created_at: string;
  updated_at: string;
}

export interface MeetingAnalysis {
  meeting_title: string;
  meeting_summary: string;
  meeting_keypoints: string[];
  meeting_todos: Array<{
    todo_title: string;
    todo_description: string;
    todo_priority: "high" | "medium" | "low";
    todo_deadline: string;
    todo_assignee: string;
  }>;
  meeting_notes: string;
}

export interface CreateMeetingRequest {
  title: string;
  date: string;
  duration: string;
  participants: string[];
  platform?: string;
  meeting_link?: string;
  summary?: string;
}

export interface UpdateMeetingRequest extends Partial<CreateMeetingRequest> {}

export interface MeetingListResponse extends ApiResponse<{
  meetings: Meeting[];
  pagination: Pagination;
}> {}

export interface MeetingDetailResponse extends ApiResponse<{
  meeting: Meeting;
}> {}

export interface StartMeetingResponse extends ApiResponse<{
  meeting_id: string;
  session_id: string;
  started_at: string;
  upload_credentials: {
    minio_upload_url: string;
    upload_id: string;
    expires_at: string;
    max_file_size: number;
    allowed_extensions: string[];
  };
  websocket_url: string;
}> {}

export interface EndMeetingRequest {
  session_id: string;
  recording_metadata: {
    duration_seconds: number;
    file_size_bytes: number;
    format: string;
    sample_rate: number;
  };
  processing_options: {
    diarize: boolean;
    language: string;
    min_speakers?: number;
    max_speakers?: number;
  };
}

// Task Types
export interface Task {
  id: string;
  meeting_id?: string;
  title: string;
  description?: string;
  status: "pending" | "completed";
  priority: "high" | "medium" | "low";
  assignee?: string;
  due_date?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateTaskRequest {
  meeting_id?: string;
  title: string;
  description?: string;
  priority: "high" | "medium" | "low";
  assignee?: string;
  due_date?: string;
}

export interface UpdateTaskRequest extends Partial<CreateTaskRequest> {
  status?: "pending" | "completed";
}

export interface TaskListResponse extends ApiResponse<{
  tasks: Task[];
  pagination: Pagination;
}> {}

export interface TaskDetailResponse extends ApiResponse<{
  task: Task;
}> {}

// Upload Types
export interface UploadResponse extends ApiResponse<{
  upload_id: string;
  processing_job_id: string;
  filename: string;
  file_size_kb: number;
  file_type: string;
  minio_object_url: string;
  processing_status: string;
  estimated_processing_time: number;
  created_at: string;
}> {}

export interface UploadStatusResponse extends ApiResponse<{
  upload_id: string;
  processing_job_id: string;
  status: string;
  progress_percentage: number;
  current_step: string;
  estimated_time_remaining: number;
  error_message: string | null;
  minio_audio_url: string;
  minio_transcript_url: string | null;
  minio_analysis_url: string | null;
  updated_at: string;
}> {}

export interface AnalysisResponse extends ApiResponse<{
  upload_id: string;
  analysis: MeetingAnalysis;
  speakers: Array<{
    speaker_id: string;
    name: string;
    confidence: number;
  }>;
  processing_time_seconds: number;
  minio_analysis_url: string;
}> {}

// Analytics Types
export interface DashboardAnalyticsResponse extends ApiResponse<{
  overview: {
    total_meetings: number;
    completed_meetings: number;
    total_meeting_duration: string;
    total_tasks: number;
    completed_tasks: number;
    productivity_score: number;
  };
  meeting_trends: Array<{
    date: string;
    meetings_count: number;
    duration_minutes: number;
  }>;
  task_completion_rate: Array<{
    date: string;
    completed_tasks: number;
    total_tasks: number;
    completion_rate: number;
  }>;
  top_participants: Array<{
    name: string;
    meetings_attended: number;
    tasks_assigned: number;
  }>;
  meeting_platforms: Array<{
    platform: string;
    usage_count: number;
    percentage: number;
  }>;
}> {}

export interface MeetingAnalyticsResponse extends ApiResponse<{
  meeting_id: string;
  analytics: {
    duration_analysis: {
      scheduled_duration: string;
      actual_duration: string;
      variance: string;
    };
    participation_analysis: Array<{
      participant: string;
      speaking_time_percentage: number;
      words_spoken: number;
      interruptions: number;
    }>;
    sentiment_analysis: {
      overall_sentiment: string;
      sentiment_score: number;
      sentiment_timeline: Array<{
        timestamp: string;
        sentiment: string;
        score: number;
      }>;
    };
    key_topics: Array<{
      topic: string;
      mentions: number;
      sentiment: string;
    }>;
  };
}> {}

// Search Types
export interface SearchMeetingsResponse extends ApiResponse<{
  meetings: Array<Meeting & {
    relevance_score: number;
    matched_content: Array<{
      type: string;
      text: string;
      highlight: string;
    }>;
  }>;
  pagination: Pagination;
  search_metadata: {
    query: string;
    search_time_ms: number;
    total_results: number;
  };
}> {}

export interface SearchTasksResponse extends ApiResponse<{
  tasks: Array<Task & {
    relevance_score: number;
    matched_content: Array<{
      type: string;
      text: string;
      highlight: string;
    }>;
  }>;
  pagination: Pagination;
}> {}

// Common Types
export interface Pagination {
  current_page: number;
  total_pages: number;
  total_items: number;
  items_per_page: number;
}
