# AI Meeting SaaS - Implementation Guide

## Overview

This document describes the implementation guide for AI Meeting SaaS application. The API provides endpoints for meeting management, real-time meeting coordination, audio processing coordination, transcription, AI-powered analysis, user authentication, and task management. The architecture uses MinIO as blob storage, RabbitMQ for message queuing with adapter pattern, and a separate microservice for audio processing.

## Base URL

```
http://localhost:7860/api/v1
```

## Authentication

The API uses JWT (JSON Web Token) based authentication. Include the token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

## API Endpoints

### 1. Authentication Endpoints

#### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "full_name": "John Doe",
  "company": "Acme Corp"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "full_name": "John Doe",
      "company": "Acme Corp",
      "created_at": "2024-03-15T10:30:00Z"
    },
    "access_token": "jwt_token_here",
    "token_type": "bearer"
  }
}
```

#### POST /auth/login
Authenticate user and return JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "access_token": "jwt_token_here",
    "token_type": "bearer",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "full_name": "John Doe"
    }
  }
}
```

#### POST /auth/refresh
Refresh JWT token.

**Headers:**
```
Authorization: Bearer <refresh_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "access_token": "new_jwt_token_here",
    "token_type": "bearer"
  }
}
```

#### POST /auth/logout
Logout user (invalidate token).

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

### 2. Meeting Management Endpoints

#### POST /meetings/{meeting_id}/start
Start a meeting session and generate MinIO upload credentials.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Meeting started successfully",
  "data": {
    "meeting_id": "uuid",
    "session_id": "uuid",
    "started_at": "2024-03-15T14:00:00Z",
    "upload_credentials": {
      "minio_upload_url": "https://minio.example.com/buckets/audio/presigned-url",
      "upload_id": "uuid",
      "expires_at": "2024-03-15T18:00:00Z",
      "max_file_size": 104857600,
      "allowed_extensions": ["wav", "mp3", "ogg", "m4a", "webm"]
    },
    "websocket_url": "ws://localhost:7860/ws/meeting/{session_id}"
  }
}
```

#### POST /meetings/{meeting_id}/end
End a meeting session and trigger audio processing.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "session_id": "uuid",
  "recording_metadata": {
    "duration_seconds": 3600,
    "file_size_bytes": 52428800,
    "format": "mp3",
    "sample_rate": 44100
  },
  "processing_options": {
    "diarize": true,
    "language": "en",
    "min_speakers": 2,
    "max_speakers": 10
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Meeting ended and processing initiated",
  "data": {
    "meeting_id": "uuid",
    "session_id": "uuid",
    "ended_at": "2024-03-15T15:00:00Z",
    "processing_job_id": "uuid",
    "minio_audio_url": "https://minio.example.com/buckets/audio/meeting_recording.mp3",
    "estimated_processing_time": 300,
    "status": "processing_queued"
  }
}
```

#### GET /meetings
Retrieve all meetings for the authenticated user with optional filtering.

**Query Parameters:**
- `status` (optional): Filter by status ("upcoming", "completed", "all")
- `date_from` (optional): Filter meetings from date (ISO 8601)
- `date_to` (optional): Filter meetings to date (ISO 8601)
- `page` (optional): Page number for pagination (default: 1)
- `limit` (optional): Items per page (default: 20, max: 100)

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "meetings": [
      {
        "id": "uuid",
        "title": "Project Alpha Kickoff",
        "date": "2024-03-15T14:00:00Z",
        "duration": "1h 15m",
        "status": "upcoming",
        "participants": ["John Doe", "Alice Smith", "Bob Johnson"],
        "platform": "Zoom",
        "meeting_link": "https://zoom.us/j/123456789",
        "summary": "Initial project kickoff meeting to discuss timeline...",
        "transcript_available": true,
        "analysis_available": true,
        "created_at": "2024-03-10T10:00:00Z",
        "updated_at": "2024-03-10T10:00:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 3,
      "total_items": 45,
      "items_per_page": 20
    }
  }
}
```

#### GET /meetings/{meeting_id}
Retrieve a specific meeting by ID.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "meeting": {
      "id": "uuid",
      "title": "Project Alpha Kickoff",
      "date": "2024-03-15T14:00:00Z",
      "duration": "1h 15m",
      "status": "upcoming",
      "participants": ["John Doe", "Alice Smith", "Bob Johnson"],
      "platform": "Zoom",
      "meeting_link": "https://zoom.us/j/123456789",
      "summary": "Initial project kickoff meeting...",
      "transcript": "Full meeting transcript text here...",
      "analysis": {
        "meeting_title": "Project Alpha Kickoff",
        "meeting_summary": "The team discussed the Q2 product roadmap...",
        "meeting_keypoints": [
          "Q2 roadmap includes 3 major features",
          "Development team is on track with 80% of Q1 goals"
        ],
        "meeting_todos": [
          {
            "todo_title": "Finalize Q2 feature requirements",
            "todo_description": "Document detailed requirements",
            "todo_priority": "high",
            "todo_deadline": "2024-03-22",
            "todo_assignee": "Alex"
          }
        ],
        "meeting_notes": "The meeting started with a review..."
      },
      "created_at": "2024-03-10T10:00:00Z",
      "updated_at": "2024-03-10T10:00:00Z"
    }
  }
}
```

#### POST /meetings
Create a new meeting.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "title": "Project Alpha Kickoff",
  "date": "2024-03-15T14:00:00Z",
  "duration": "1h 15m",
  "participants": ["John Doe", "Alice Smith", "Bob Johnson"],
  "platform": "Zoom",
  "meeting_link": "https://zoom.us/j/123456789",
  "summary": "Initial project kickoff meeting..."
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Meeting created successfully",
  "data": {
    "meeting": {
      "id": "uuid",
      "title": "Project Alpha Kickoff",
      "date": "2024-03-15T14:00:00Z",
      "duration": "1h 15m",
      "status": "upcoming",
      "participants": ["John Doe", "Alice Smith", "Bob Johnson"],
      "platform": "Zoom",
      "meeting_link": "https://zoom.us/j/123456789",
      "summary": "Initial project kickoff meeting...",
      "created_at": "2024-03-15T10:00:00Z",
      "updated_at": "2024-03-15T10:00:00Z"
    }
  }
}
```

#### PUT /meetings/{meeting_id}
Update an existing meeting.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "title": "Updated Project Alpha Kickoff",
  "date": "2024-03-16T14:00:00Z",
  "duration": "2h",
  "participants": ["John Doe", "Alice Smith", "Bob Johnson", "Charlie Davis"],
  "platform": "Teams",
  "meeting_link": "https://teams.microsoft.com/l/meetup-join/123456789",
  "summary": "Updated project kickoff meeting..."
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Meeting updated successfully",
  "data": {
    "meeting": {
      "id": "uuid",
      "title": "Updated Project Alpha Kickoff",
      "date": "2024-03-16T14:00:00Z",
      "duration": "2h",
      "status": "upcoming",
      "participants": ["John Doe", "Alice Smith", "Bob Johnson", "Charlie Davis"],
      "platform": "Teams",
      "meeting_link": "https://teams.microsoft.com/l/meetup-join/123456789",
      "summary": "Updated project kickoff meeting...",
      "updated_at": "2024-03-15T11:00:00Z"
    }
  }
}
```

#### DELETE /meetings/{meeting_id}
Delete a meeting.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Meeting deleted successfully"
}
```

### 3. Audio Processing Coordination Endpoints

These endpoints coordinate with the separate Audio Processing Microservice for audio transcription and AI analysis.

#### POST /upload
Upload audio file to MinIO and initiate processing through the audio processing microservice.

**Headers:**
```
Authorization: Bearer <jwt_token>
Content-Type: multipart/form-data
```

**Request Body (multipart/form-data):**
- `file`: Audio file (wav, mp3, ogg, m4a, webm) - Max 100MB
- `meeting_id` (optional): Associate with existing meeting
- `diarize` (optional): Enable speaker diarization (default: true)
- `language` (optional): Language code (default: "en")
- `min_speakers` (optional): Minimum number of speakers
- `max_speakers` (optional): Maximum number of speakers

**Response (202):**
```json
{
  "success": true,
  "message": "File uploaded and processing initiated",
  "data": {
    "upload_id": "uuid",
    "processing_job_id": "uuid",
    "filename": "20240315_143000_meeting_audio.mp3",
    "file_size_kb": 15360.5,
    "file_type": "audio/mpeg",
    "minio_object_url": "https://minio.example.com/buckets/audio/20240315_143000_meeting_audio.mp3",
    "processing_status": "queued",
    "estimated_processing_time": 300,
    "created_at": "2024-03-15T14:30:00Z"
  }
}
```

#### GET /upload/{upload_id}/status
Check processing status of uploaded audio by querying the audio processing microservice.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "upload_id": "uuid",
    "processing_job_id": "uuid",
    "status": "processing", // "queued", "uploading", "transcribing", "analyzing", "completed", "failed"
    "progress_percentage": 65,
    "current_step": "AI analysis in progress...",
    "estimated_time_remaining": 120,
    "error_message": null,
    "minio_audio_url": "https://minio.example.com/buckets/audio/20240315_143000_meeting_audio.mp3",
    "minio_transcript_url": null, // Available when completed
    "minio_analysis_url": null, // Available when completed
    "updated_at": "2024-03-15T14:35:00Z"
  }
}
```

#### GET /upload/{upload_id}/transcript
Download transcript file (VTT format) from MinIO storage.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```
Content-Type: text/vtt
Content-Disposition: attachment; filename="transcript.vtt"
X-MinIO-Object: buckets/transcripts/20240315_143000_meeting_audio.vtt

WEBVTT

00:00:00.000 --> 00:00:05.000
<SPEAKER_00> Hello everyone, welcome to the meeting.

00:00:05.000 --> 00:00:10.000
<SPEAKER_01> Thanks for joining. Let's get started.
```

#### GET /upload/{upload_id}/analysis
Retrieve AI analysis results from MinIO storage.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "upload_id": "uuid",
    "analysis": {
      "meeting_title": "Project Alpha Kickoff",
      "meeting_summary": "The team discussed the Q2 product roadmap...",
      "meeting_keypoints": [
        "Q2 roadmap includes 3 major features",
        "Development team is on track with 80% of Q1 goals"
      ],
      "meeting_todos": [
        {
          "todo_title": "Finalize Q2 feature requirements",
          "todo_description": "Document detailed requirements",
          "todo_priority": "high",
          "todo_deadline": "2024-03-22",
          "todo_assignee": "Alex"
        }
      ],
      "meeting_notes": "The meeting started with a review..."
    },
    "speakers": [
      {
        "speaker_id": "SPEAKER_00",
        "name": "John Doe",
        "confidence": 0.95
      },
      {
        "speaker_id": "SPEAKER_01", 
        "name": "Alice Smith",
        "confidence": 0.92
      }
    ],
    "processing_time_seconds": 245,
    "minio_analysis_url": "https://minio.example.com/buckets/analysis/20240315_143000_analysis.json"
  }
}
```

### 4. Task Management Endpoints

#### GET /tasks
Retrieve all tasks for the authenticated user with optional filtering.

**Query Parameters:**
- `meeting_id` (optional): Filter by meeting ID
- `status` (optional): Filter by status ("pending", "completed", "all")
- `priority` (optional): Filter by priority ("high", "medium", "low")
- `assignee` (optional): Filter by assignee
- `due_date_from` (optional): Filter tasks due from date
- `due_date_to` (optional): Filter tasks due to date
- `page` (optional): Page number for pagination
- `limit` (optional): Items per page

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": "uuid",
        "meeting_id": "uuid",
        "title": "Finalize Q2 feature requirements",
        "description": "Document detailed requirements for the new search functionality",
        "status": "pending",
        "priority": "high",
        "assignee": "Alex",
        "due_date": "2024-03-22",
        "created_at": "2024-03-15T14:30:00Z",
        "updated_at": "2024-03-15T14:30:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 2,
      "total_items": 15,
      "items_per_page": 20
    }
  }
}
```

#### POST /tasks
Create a new task.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "meeting_id": "uuid",
  "title": "Finalize Q2 feature requirements",
  "description": "Document detailed requirements for the new search functionality",
  "priority": "high",
  "assignee": "Alex",
  "due_date": "2024-03-22"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "task": {
      "id": "uuid",
      "meeting_id": "uuid",
      "title": "Finalize Q2 feature requirements",
      "description": "Document detailed requirements for the new search functionality",
      "status": "pending",
      "priority": "high",
      "assignee": "Alex",
      "due_date": "2024-03-22",
      "created_at": "2024-03-15T14:30:00Z",
      "updated_at": "2024-03-15T14:30:00Z"
    }
  }
}
```

#### PUT /tasks/{task_id}
Update an existing task.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "title": "Updated task title",
  "description": "Updated description",
  "status": "completed",
  "priority": "medium",
  "assignee": "Bob",
  "due_date": "2024-03-25"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "task": {
      "id": "uuid",
      "meeting_id": "uuid",
      "title": "Updated task title",
      "description": "Updated description",
      "status": "completed",
      "priority": "medium",
      "assignee": "Bob",
      "due_date": "2024-03-25",
      "updated_at": "2024-03-16T10:00:00Z"
    }
  }
}
```

#### DELETE /tasks/{task_id}
Delete a task.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

#### PATCH /tasks/{task_id}/toggle
Toggle task completion status.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Task status updated successfully",
  "data": {
    "task": {
      "id": "uuid",
      "status": "completed",
      "updated_at": "2024-03-16T10:00:00Z"
    }
  }
}
```

### 5. User Management Endpoints

#### GET /users/profile
Get current user profile.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "full_name": "John Doe",
      "company": "Acme Corp",
      "avatar_url": "https://example.com/avatar.jpg",
      "timezone": "America/New_York",
      "language": "en",
      "created_at": "2024-01-01T10:00:00Z",
      "updated_at": "2024-03-15T10:00:00Z"
    },
    "statistics": {
      "total_meetings": 45,
      "completed_meetings": 32,
      "total_tasks": 128,
      "completed_tasks": 95,
      "upcoming_meetings": 3
    }
  }
}
```

#### PUT /users/profile
Update user profile.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "full_name": "John Smith",
  "company": "New Corp",
  "timezone": "America/Los_Angeles",
  "language": "en"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "full_name": "John Smith",
      "company": "New Corp",
      "timezone": "America/Los_Angeles",
      "language": "en",
      "updated_at": "2024-03-16T10:00:00Z"
    }
  }
}
```

#### POST /users/change-password
Change user password.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "current_password": "oldPassword123",
  "new_password": "newPassword456"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Password changed successfully"
}
```

### 6. Analytics Endpoints

#### GET /analytics/dashboard
Get dashboard analytics data.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Query Parameters:**
- `period` (optional): Time period ("week", "month", "quarter", "year") - default: "month"

**Response (200):**
```json
{
  "success": true,
  "data": {
    "overview": {
      "total_meetings": 45,
      "completed_meetings": 32,
      "total_meeting_duration": "72h 30m",
      "total_tasks": 128,
      "completed_tasks": 95,
      "productivity_score": 87
    },
    "meeting_trends": [
      {
        "date": "2024-03-01",
        "meetings_count": 3,
        "duration_minutes": 180
      },
      {
        "date": "2024-03-02", 
        "meetings_count": 2,
        "duration_minutes": 120
      }
    ],
    "task_completion_rate": [
      {
        "date": "2024-03-01",
        "completed_tasks": 5,
        "total_tasks": 7,
        "completion_rate": 71.4
      }
    ],
    "top_participants": [
      {
        "name": "Alice Smith",
        "meetings_attended": 28,
        "tasks_assigned": 15
      }
    ],
    "meeting_platforms": [
      {
        "platform": "Zoom",
        "usage_count": 25,
        "percentage": 55.6
      },
      {
        "platform": "Teams",
        "usage_count": 20,
        "percentage": 44.4
      }
    ]
  }
}
```

#### GET /analytics/meetings/{meeting_id}
Get detailed analytics for a specific meeting.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "meeting_id": "uuid",
    "analytics": {
      "duration_analysis": {
        "scheduled_duration": "1h 15m",
        "actual_duration": "1h 22m",
        "variance": "+7 minutes"
      },
      "participation_analysis": [
        {
          "participant": "John Doe",
          "speaking_time_percentage": 35.2,
          "words_spoken": 1250,
          "interruptions": 3
        },
        {
          "participant": "Alice Smith",
          "speaking_time_percentage": 28.7,
          "words_spoken": 1020,
          "interruptions": 1
        }
      ],
      "sentiment_analysis": {
        "overall_sentiment": "positive",
        "sentiment_score": 0.75,
        "sentiment_timeline": [
          {
            "timestamp": "00:05:00",
            "sentiment": "positive",
            "score": 0.8
          }
        ]
      },
      "key_topics": [
        {
          "topic": "Product Roadmap",
          "mentions": 12,
          "sentiment": "positive"
        },
        {
          "topic": "Budget",
          "mentions": 8,
          "sentiment": "neutral"
        }
      ]
    }
  }
}
```

### 7. Search Endpoints

#### GET /search/meetings
Search meetings by content.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Query Parameters:**
- `q` (required): Search query
- `date_from` (optional): Filter meetings from date
- `date_to` (optional): Filter meetings to date
- `status` (optional): Filter by status
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  "success": true,
  "data": {
    "meetings": [
      {
        "id": "uuid",
        "title": "Project Alpha Kickoff",
        "date": "2024-03-15T14:00:00Z",
        "duration": "1h 15m",
        "status": "completed",
        "participants": ["John Doe", "Alice Smith"],
        "summary": "Initial project kickoff meeting...",
        "relevance_score": 0.95,
        "matched_content": [
          {
            "type": "title",
            "text": "Project Alpha Kickoff",
            "highlight": "Project <mark>Alpha</mark> Kickoff"
          },
          {
            "type": "transcript",
            "text": "We need to focus on the alpha features",
            "highlight": "We need to focus on the <mark>alpha</mark> features"
          }
        ]
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 1,
      "total_items": 3,
      "items_per_page": 20
    },
    "search_metadata": {
      "query": "alpha",
      "search_time_ms": 45,
      "total_results": 3
    }
  }
}
```

#### GET /search/tasks
Search tasks by content.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Query Parameters:**
- `q` (required): Search query
- `status` (optional): Filter by status
- `priority` (optional): Filter by priority
- `assignee` (optional): Filter by assignee
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": "uuid",
        "meeting_id": "uuid",
        "title": "Finalize Q2 feature requirements",
        "description": "Document detailed requirements for the new search functionality",
        "status": "pending",
        "priority": "high",
        "assignee": "Alex",
        "due_date": "2024-03-22",
        "relevance_score": 0.88,
        "matched_content": [
          {
            "type": "title",
            "text": "Finalize Q2 feature requirements",
            "highlight": "Finalize Q2 feature <mark>requirements</mark>"
          }
        ]
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 1,
      "total_items": 2,
      "items_per_page": 20
    }
  }
}
```

### 8. Integration Endpoints

#### POST /integrations/calendar/connect
Connect calendar integration (Google Calendar, Outlook).

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "provider": "google_calendar",
  "access_token": "oauth_access_token",
  "refresh_token": "oauth_refresh_token"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Calendar integration connected successfully",
  "data": {
    "integration_id": "uuid",
    "provider": "google_calendar",
    "status": "active",
    "connected_at": "2024-03-15T10:00:00Z"
  }
}
```

#### GET /integrations/calendar/events
Sync calendar events.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Query Parameters:**
- `integration_id` (required): Integration ID
- `date_from` (optional): Sync events from date
- `date_to` (optional): Sync events to date

**Response (200):**
```json
{
  "success": true,
  "message": "Calendar events synced successfully",
  "data": {
    "synced_events": 12,
    "new_meetings_created": 3,
    "existing_meetings_updated": 2,
    "sync_time": "2024-03-15T10:05:00Z"
  }
}
```

## Error Responses

All endpoints return consistent error responses:

### 400 Bad Request
```json
{
  "success": false,
  "error": {
    "code": "BAD_REQUEST",
    "message": "Invalid request parameters",
    "details": {
      "field": "email",
      "issue": "Invalid email format"
    }
  }
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired authentication token"
  }
}
```

### 403 Forbidden
```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Access denied to this resource"
  }
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
```

### 429 Rate Limited
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests, please try again later",
    "retry_after": 60
  }
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred",
    "request_id": "uuid"
  }
}
```

## Rate Limiting

The API implements rate limiting to ensure fair usage:

- **Authentication endpoints**: 5 requests per minute
- **Upload endpoints**: 10 requests per hour
- **Standard endpoints**: 100 requests per minute
- **Search endpoints**: 50 requests per minute

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1647360000
```

## WebSocket Connections

### Real-time Updates
Connect to WebSocket for real-time meeting updates and processing status:

```
ws://localhost:7860/ws/updates
```

**Authentication:**
```
Authorization: Bearer <jwt_token>
```

**Message Format:**
```json
{
  "type": "meeting_update",
  "data": {
    "meeting_id": "uuid",
    "status": "processing",
    "progress": 75
  }
}
```

**Supported Message Types:**
- `meeting_update`: Meeting status changes
- `task_update`: Task creation/completion
- `upload_progress`: Audio processing progress
- `notification`: System notifications

## Data Models

### Meeting Model
```typescript
interface Meeting {
  id: string;
  title: string;
  date: string; // ISO 8601 datetime
  duration: string; // "1h 15m"
  status: "upcoming" | "completed";
  participants: string[];
  platform?: string;
  meeting_link?: string;
  summary?: string;
  transcript?: string;
  analysis?: MeetingAnalysis;
  transcript_available: boolean;
  analysis_available: boolean;
  audio_url?: string; // MinIO URL
  transcript_url?: string; // MinIO URL
  analysis_url?: string; // MinIO URL
  created_at: string;
  updated_at: string;
}
```

### Task Model
```typescript
interface Task {
  id: string;
  meeting_id?: string;
  title: string;
  description?: string;
  status: "pending" | "completed";
  priority: "high" | "medium" | "low";
  assignee?: string;
  due_date?: string; // ISO 8601 date
  created_at: string;
  updated_at: string;
}
```

### Meeting Analysis Model
```typescript
interface MeetingAnalysis {
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
```

### User Model
```typescript
interface User {
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
```

# Message Queue Adapter Pattern

### Architecture Overview

The application uses an adapter pattern for message queuing, allowing seamless switching between different message brokers (RabbitMQ, Redis, Apache Kafka, etc.) without changing the business logic.

#### Message Queue Interface
```python
# Abstract base class for message queue adapters
from abc import ABC, abstractmethod
from typing import Dict, Any, Optional

class MessageQueueAdapter(ABC):
    """Abstract interface for message queue implementations"""
    
    @abstractmethod
    async def publish(self, queue_name: str, message: Dict[str, Any]) -> bool:
        """Publish a message to a queue"""
        pass
    
    @abstractmethod
    async def consume(self, queue_name: str, callback) -> None:
        """Consume messages from a queue"""
        pass
    
    @abstractmethod
    async def create_queue(self, queue_name: str, **kwargs) -> bool:
        """Create a new queue"""
        pass
    
    @abstractmethod
    async def delete_queue(self, queue_name: str) -> bool:
        """Delete a queue"""
        pass
    
    @abstractmethod
    async def close(self) -> None:
        """Close connection to message broker"""
        pass
```

#### RabbitMQ Implementation
```python
import aio_pika
from aio_pika import connect_robust, Message
from .message_queue_adapter import MessageQueueAdapter

class RabbitMQAdapter(MessageQueueAdapter):
    """RabbitMQ implementation of message queue adapter"""
    
    def __init__(self, connection_url: str):
        self.connection_url = connection_url
        self.connection = None
        self.channel = None
    
    async def connect(self):
        """Establish connection to RabbitMQ"""
        self.connection = await connect_robust(self.connection_url)
        self.channel = await self.connection.channel()
    
    async def publish(self, queue_name: str, message: Dict[str, Any]) -> bool:
        """Publish message to RabbitMQ queue"""
        try:
            await self.channel.declare_queue(queue_name, durable=True)
            
            message_body = Message(
                json.dumps(message).encode(),
                content_type='application/json',
                delivery_mode=2  # Persistent message
            )
            
            await self.channel.default_exchange.publish(
                message_body,
                routing_key=queue_name
            )
            return True
        except Exception as e:
            logger.error(f"Failed to publish to RabbitMQ: {e}")
            return False
    
    async def consume(self, queue_name: str, callback):
        """Consume messages from RabbitMQ queue"""
        await self.channel.declare_queue(queue_name, durable=True)
        
        async def wrapper(message: aio_pika.IncomingMessage):
            async with message.process():
                try:
                    body = json.loads(message.body.decode())
                    await callback(body)
                except Exception as e:
                    logger.error(f"Error processing message: {e}")
        
        await self.channel.basic_consume(queue_name, wrapper)
    
    async def create_queue(self, queue_name: str, **kwargs) -> bool:
        """Create RabbitMQ queue"""
        try:
            await self.channel.declare_queue(
                queue_name, 
                durable=kwargs.get('durable', True),
                auto_delete=kwargs.get('auto_delete', False)
            )
            return True
        except Exception as e:
            logger.error(f"Failed to create queue: {e}")
            return False
    
    async def delete_queue(self, queue_name: str) -> bool:
        """Delete RabbitMQ queue"""
        try:
            queue = await self.channel.declare_queue(queue_name, durable=True)
            await queue.delete()
            return True
        except Exception as e:
            logger.error(f"Failed to delete queue: {e}")
            return False
    
    async def close(self):
        """Close RabbitMQ connection"""
        if self.connection:
            await self.connection.close()
```

#### Redis Implementation
```python
import aioredis
import json
from .message_queue_adapter import MessageQueueAdapter

class RedisAdapter(MessageQueueAdapter):
    """Redis implementation of message queue adapter"""
    
    def __init__(self, connection_url: str):
        self.connection_url = connection_url
        self.redis = None
    
    async def connect(self):
        """Establish connection to Redis"""
        self.redis = await aioredis.from_url(self.connection_url)
    
    async def publish(self, queue_name: str, message: Dict[str, Any]) -> bool:
        """Publish message to Redis list (queue)"""
        try:
            await self.redis.lpush(queue_name, json.dumps(message))
            return True
        except Exception as e:
            logger.error(f"Failed to publish to Redis: {e}")
            return False
    
    async def consume(self, queue_name: str, callback):
        """Consume messages from Redis list"""
        while True:
            try:
                message = await self.redis.brpop(queue_name, timeout=1)
                if message:
                    body = json.loads(message[1].decode())
                    await callback(body)
            except Exception as e:
                logger.error(f"Error consuming from Redis: {e}")
                await asyncio.sleep(1)
    
    async def create_queue(self, queue_name: str, **kwargs) -> bool:
        """Redis doesn't need explicit queue creation"""
        return True
    
    async def delete_queue(self, queue_name: str) -> bool:
        """Delete Redis list"""
        try:
            await self.redis.delete(queue_name)
            return True
        except Exception as e:
            logger.error(f"Failed to delete Redis queue: {e}")
            return False
    
    async def close(self):
        """Close Redis connection"""
        if self.redis:
            await self.redis.close()
```

#### Message Queue Factory
```python
from enum import Enum
from typing import Union
from .rabbitmq_adapter import RabbitMQAdapter
from .redis_adapter import RedisAdapter

class QueueType(Enum):
    RABBITMQ = "rabbitmq"
    REDIS = "redis"
    KAFKA = "kafka"

class MessageQueueFactory:
    """Factory for creating message queue adapters"""
    
    @staticmethod
    def create_adapter(queue_type: QueueType, connection_url: str) -> MessageQueueAdapter:
        """Create appropriate message queue adapter"""
        if queue_type == QueueType.RABBITMQ:
            return RabbitMQAdapter(connection_url)
        elif queue_type == QueueType.REDIS:
            return RedisAdapter(connection_url)
        else:
            raise ValueError(f"Unsupported queue type: {queue_type}")
```

### Message Types and Queues

#### Audio Processing Messages
```python
# Audio processing job message
{
    "message_type": "audio_processing_job",
    "job_id": "uuid",
    "meeting_id": "uuid",
    "audio_url": "https://minio.example.com/buckets/audio/meeting.mp3",
    "options": {
        "diarize": true,
        "language": "en",
        "min_speakers": 2,
        "max_speakers": 10
    },
    "callback_url": "http://main-api:7860/api/v1/webhook/audio-processing-complete",
    "created_at": "2024-03-15T14:30:00Z"
}

# Processing status update message
{
    "message_type": "processing_status_update",
    "job_id": "uuid",
    "status": "processing",
    "progress": 65,
    "current_step": "AI analysis in progress...",
    "estimated_time_remaining": 120,
    "updated_at": "2024-03-15T14:35:00Z"
}

# Processing completion message
{
    "message_type": "processing_complete",
    "job_id": "uuid",
    "meeting_id": "uuid",
    "status": "completed",
    "results": {
        "transcript_url": "https://minio.example.com/buckets/transcripts/meeting.vtt",
        "analysis_url": "https://minio.example.com/buckets/analysis/meeting.json",
        "processing_time_seconds": 245,
        "speakers": [...]
    },
    "completed_at": "2024-03-15T14:40:00Z"
}
```

#### Queue Configuration
```python
# Queue definitions
QUEUES = {
    "audio_processing": {
        "name": "audio_processing_jobs",
        "durable": True,
        "max_priority": 10
    },
    "processing_status": {
        "name": "processing_status_updates",
        "durable": True,
        "max_priority": 5
    },
    "notifications": {
        "name": "user_notifications",
        "durable": True,
        "max_priority": 3
    }
}
```

### Usage Examples

#### Publishing Audio Processing Job
```python
from services.message_queue_factory import MessageQueueFactory, QueueType

# Initialize message queue adapter
queue_type = QueueType(os.getenv("MESSAGE_QUEUE_TYPE", "rabbitmq"))
connection_url = os.getenv("RABBITMQ_URL", "amqp://localhost:5672")
message_queue = MessageQueueFactory.create_adapter(queue_type, connection_url)

await message_queue.connect()

# Publish audio processing job
job_message = {
    "message_type": "audio_processing_job",
    "job_id": job_id,
    "meeting_id": meeting_id,
    "audio_url": audio_url,
    "options": processing_options
}

success = await message_queue.publish(
    QUEUES["audio_processing"]["name"],
    job_message
)
```

#### Consuming Messages
```python
async def process_audio_job(message: Dict[str, Any]):
    """Handle audio processing job message"""
    if message["message_type"] == "audio_processing_job":
        # Start audio processing
        await audio_processor.start_processing(message)
    elif message["message_type"] == "processing_status_update":
        # Update processing status
        await update_job_status(message)

# Start consuming messages
await message_queue.consume(
    QUEUES["audio_processing"]["name"],
    process_audio_job
)
```

# Worker Service Architecture - Celery Integration

### 🔄 **Celery-Based Architecture Overview**

The worker service has been completely redesigned to use **Celery** for robust task queue management with comprehensive retry and failure handling.

#### **Core Architecture Components**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CELERY WORKER ECOSYSTEM                     │
│                                                                     │
│  ┌─────────────────┐    ┌─────────────────┐    ┌──────────────┐ │
│  │   FastAPI      │    │   Celery       │    │   Flower     │ │
│  │   HTTP API     │◄──►│   Task Queue   │◄──►│  Monitoring  │ │
│  └─────────────────┘    └─────────────────┘    └──────────────┘ │
│           │                     │                     │         │
│           ▼                     ▼                     ▼         │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │              WORKER SERVICES                     │     │
│  │                                                     │     │
│  │  ┌─────────────────┐  ┌─────────────────┐           │     │
│  │  │ Transcription  │  │   AI Analysis  │           │     │
│  │  │   Tasks        │  │   Tasks        │           │     │
│  │  └─────────────────┘  └─────────────────┘           │     │
│  │         │                     │                     │     │
│  │         ▼                     ▼                     │     │
│  │  ┌─────────────────────────────────┐               │     │
│  │  │     MinIO Storage            │               │     │
│  │  │  - Audio Files               │               │     │
│  │  │  - Transcripts               │               │     │
│  │  │  - Analysis Results           │               │     │
│  │  └─────────────────────────────────┘               │     │
│  └─────────────────────────────────────────────────────────┘     │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │              MESSAGE BROKER                      │     │
│  │                                                     │     │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │     │
│  │  │   Redis     │  │  RabbitMQ   │  │   Result    │ │     │
│  │  │   Broker    │  │   Broker    │  │   Backend   │ │     │
│  │  └─────────────┘  └─────────────┘  └─────────────┘ │     │
│  └─────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

#### **🎯 Key Benefits of Celery Integration**

- **✅ Built-in Retry Logic**: Exponential backoff with configurable retry policies
- **✅ Rich Task States**: PENDING, STARTED, PROGRESS, SUCCESS, FAILURE, RETRY
- **✅ Task Monitoring**: Real-time task tracking via Flower dashboard
- **✅ Distributed Processing**: Multiple workers with load balancing
- **✅ Task Chaining**: Complex workflows with dependent tasks
- **✅ Result Backend**: Persistent task results and status tracking
- **✅ Graceful Shutdown**: Proper task completion on worker termination

### **🔄 Task Processing Flow**

#### **Complete Job Lifecycle**

```
┌─────────────┐    POST /transcribe/job    ┌─────────────┐
│   Client    │──────────────────────────►│   FastAPI   │
│             │                          │   HTTP API  │
└─────────────┘                          └─────────────┘
                                            │
                                            ▼
                                    ┌─────────────┐
                                    │   Celery    │
                                    │   Task      │
                                    │   Queue     │
                                    └─────────────┘
                                            │
                                            ▼
                                    ┌─────────────┐
                                    │   Worker    │
                                    │   Process   │
                                    │             │
                                    │  Task State │
                                    │  Tracking   │
                                    └─────────────┘
                                            │
                                            ▼
                                    ┌─────────────┐
                                    │   MinIO     │
                                    │   Storage   │
                                    └─────────────┘
                                            │
                                            ▼
                                    ┌─────────────┐
                                    │   Result    │
                                    │   Backend   │
                                    └─────────────┘
```

#### **Task State Transitions**

```
PENDING ──► STARTED ──► PROGRESS ──► SUCCESS
    │           │           │           │
    │           │           │           ▼
    │           │           │      (Result Stored)
    │           │           │
    │           │           ▼
    │           │         RETRY ──► STARTED
    │           │           │
    │           ▼           ▼
    │         FAILURE     (Max Retries)
    │           │           │
    ▼           ▼           ▼
(Cleanup)  (Error Log)  (Failure State)
```

### **🛠️ Service Implementation Details**

#### **Transcription Tasks**
```python
@celery_app.task(
    bind=True,
    max_retries=3,
    default_retry_delay=60,
    soft_time_limit=1800,  # 30 minutes
    time_limit=3600,       # 1 hour hard limit
    autoretry_for=(Exception,),
    retry_backoff=True,
    retry_backoff_max=300,
    retry_jitter=True
)
def transcribe_audio(self, job_data: Dict[str, Any]):
    """Transcribe audio with comprehensive retry handling"""
```

**Features:**
- **Exponential Backoff**: 60s → 120s → 240s → 300s max
- **Progress Tracking**: Real-time status updates via `update_state()`
- **Error Classification**: Retry vs permanent failure logic
- **Resource Cleanup**: Automatic temp file cleanup on failure
- **Time Limits**: Soft/hard limits to prevent hanging tasks

#### **AI Analysis Tasks**
```python
@celery_app.task(
    bind=True,
    max_retries=3,
    default_retry_delay=60,
    soft_time_limit=900,   # 15 minutes
    time_limit=1800,       # 30 minutes hard limit
    autoretry_for=(Exception,),
    retry_backoff=True,
    retry_jitter=True
)
def analyze_transcript(self, job_data: Dict[str, Any]):
    """Analyze transcript with Google GenAI"""
```

**Features:**
- **Batch Processing**: Multiple transcripts in single task
- **Confidence Scoring**: AI response quality assessment
- **Fallback Handling**: Graceful JSON parsing failures
- **Structured Output**: Consistent result format

#### **Combined Workflow Tasks**
```python
@celery_app.task(bind=True, max_retries=3, default_retry_delay=60)
def transcribe_and_analyze(self, job_data: Dict[str, Any]):
    """Combined transcription + AI analysis workflow"""
    # Chain: Transcription → AI Analysis → Combined Result
```

### **🌐 HTTP API Integration**

#### **Job Submission Endpoints**
```python
# Transcription
POST /transcribe/job
{
    "audio_url": "minio://audio/meeting123.mp3",
    "options": {"language": "en", "diarize": true},
    "meeting_metadata": {"title": "Team Meeting"}
}

# AI Analysis  
POST /ai/analyze
{
    "transcript_url": "minio://transcripts/meeting123.vtt",
    "meeting_metadata": {"title": "Team Meeting"},
    "options": {"sentiment_analysis": true}
}

# Combined Workflow
POST /combined/process
{
    "audio_url": "minio://audio/meeting123.mp3",
    "meeting_metadata": {"title": "Team Meeting"},
    "transcription_options": {"language": "en"},
    "ai_options": {"sentiment_analysis": true}
}
```

#### **Job Status Tracking**
```python
GET /transcribe/status/{task_id}
GET /ai/status/{task_id}
GET /combined/status/{task_id}

Response:
{
    "job_id": "uuid-123",
    "task_id": "celery-task-456",
    "status": "processing",  # PENDING, STARTED, PROGRESS, SUCCESS, FAILURE, RETRY
    "progress": {
        "current": "transcribing",
        "percentage": 65
    },
    "result": {...},  # On success
    "error": "...",   # On failure
    "created_at": "2024-01-01T10:00:00Z",
    "completed_at": "2024-01-01T10:05:00Z"
}
```

### **⚙️ Configuration Management**

#### **Celery Configuration**
```python
# Broker Configuration
broker_url=config.redis_url  # or rabbitmq_url
result_backend=config.redis_url

# Task Configuration  
task_soft_time_limit=1800    # 30 minutes
task_time_limit=3600         # 1 hour
task_max_retries=3
task_retry_backoff=True
task_retry_backoff_max=300   # 5 minutes max

# Worker Configuration
worker_concurrency=2
worker_prefetch_multiplier=1
worker_max_tasks_per_child=1000
#### **Environment Variables**
```env
# Celery Configuration
CELERY_BROKER_URL=redis://localhost:6379/0
CELERY_RESULT_BACKEND=db+postgresql://user:password@localhost:5432/ai_meeting_saas
TASK_SOFT_TIME_LIMIT=1800
TASK_TIME_LIMIT=3600
TASK_MAX_RETRIES=3
TASK_RETRY_BACKOFF=true

# Worker Configuration
WORKER_CONCURRENCY=2
WORKER_PREFETCH_MULTIPLIER=1
WORKER_MAX_TASKS_PER_CHILD=1000

# Monitoring
ENABLE_FLOWER=true
FLOWER_PORT=5555
FLOWER_HOST=0.0.0.0
```

### **🚀 Deployment Modes**

#### **Multi-Process Deployment**
```bash
# Terminal 1: API Server
python main.py --mode api --port 7861

# Terminal 2: Celery Worker
python main.py --mode worker --worker-id worker-1

# Terminal 3: Celery Beat Scheduler  
python main.py --mode beat

# Terminal 4: Flower Monitoring
python main.py --mode flower
```

#### **Development Combined Mode**
```bash
# Single process with API + Worker (development only)
python main.py --mode combined --port 7861
```

#### **Production Docker Setup**
```yaml
version: '3.8'
services:
  worker-api:
    build: .
    command: python main.py --mode api
    ports:
      - "7861:7861"
    
  worker-celery:
    build: .
    command: python main.py --mode worker
    deploy:
      replicas: 3
      
  worker-beat:
    build: .
    command: python main.py --mode beat
    
  worker-flower:
    build:  
    command: python main.py --mode flower
    ports:
      - "5555:5555"
      
  redis:
    image: redis:7-alpine
    
  rabbitmq:
    image: rabbitmq:3-management
```

### **📊 Monitoring & Observability**

#### **Flower Dashboard**
- **URL**: `http://localhost:5555`
- **Features**:
  - Real-time task monitoring
  - Worker status and metrics
  - Task history and failures
  - Queue depth monitoring
  - Worker resource usage

#### **Health Check Endpoints**
```python
GET /health
{
    "service": "AI Meeting Worker Service",
    "status": "healthy",
    "celery": {
        "status": "healthy",
        "workers": 3,
        "active_tasks": 5,
        "broker_connected": true
    },
    "services": {
        "minio": {"status": "healthy"}
    }
}

GET /metrics
{
    "celery": {
        "workers": 3,
        "active_tasks": 5,
        "registered_tasks": ["transcribe_audio", "analyze_transcript"]
    }
}

GET /workers
{
    "workers": {
        "worker-1@hostname": {
            "pool": {"max-concurrency": 2},
            "total": 150,
            "concurrency": 2
        }
    }
}
```

### **🔄 Retry & Failure Handling**

#### **Retry Strategy**
```python
# Exponential Backoff with Jitter
Retry 1: 60s delay
Retry 2: 120s delay  
Retry 3: 240s delay
Max: 300s delay (5 minutes)

# Retry Conditions
- Network errors → Retry
- Temporary service failures → Retry
- Rate limiting → Retry
- Invalid input → No retry (permanent failure)
- Authentication errors → No retry (permanent failure)
```

#### **Failure Classification**
```python
class TaskResult:
    @staticmethod
    def success(result_data, task_id):
        return {"status": "SUCCESS", "result": result_data}
    
    @staticmethod  
    def failure(error_message, task_id, exc_info):
        return {"status": "FAILURE", "error": error_message}
    
    @staticmethod
    def retry_info(retry_count, max_retries, reason, task_id):
        return {"status": "RETRY", "retry_count": retry_count}
```

### **🎯 API Structure**

#### **HTTP Endpoints**
- `POST /transcribe/job` - Create transcription job
- `GET /transcribe/status/{task_id}` - Get transcription status
- `GET /transcribe/health` - Transcription service health

- `POST /ai/analyze` - Create AI analysis job
- `GET /ai/status/{task_id}` - Get AI analysis status  
- `GET /ai/health` - AI analysis service health

- `POST /combined/process` - Create combined workflow job
- `GET /combined/status/{task_id}` - Get combined job status

- `POST /batch/analyze` - Create batch analysis job
- `GET /batch/status/{task_id}` - Get batch job status

#### **Common Endpoints**
- `GET /` - Service information
- `GET /health` - Comprehensive health check
- `GET /metrics` - Service metrics
- `GET /status` - Detailed configuration
- `GET /workers` - Celery worker information

### **🔧 Scaling Considerations**

#### **Horizontal Scaling**
- **Multiple Workers**: `python main.py --mode worker --worker-id worker-2`
- **Load Balancing**: Automatic via Celery queue distribution
- **Queue Isolation**: Separate queues for different task types
- **Resource Allocation**: Per-worker concurrency limits

#### **Performance Optimization**
- **Worker Concurrency**: `WORKER_CONCURRENCY=4` per worker
- **Prefetch Control**: `WORKER_PREFETCH_MULTIPLIER=1`
- **Task Limits**: Soft/hard time limits prevent hanging
- **Memory Management**: `WORKER_MAX_TASKS_PER_CHILD=1000`

#### **Production Best Practices**
- **Separate Processes**: API, Worker, Beat, Flower in different containers
- **Health Monitoring**: Flower + custom health checks
- **Log Aggregation**: Centralized logging for all workers
- **Graceful Shutdown**: Proper task completion on termination
- **Resource Limits**: CPU/memory limits per worker

# Worker Service Architecture

### Modular Design Overview

The worker service has been completely redesigned with a modular architecture that supports multiple deployment modes:

#### Service Modes
- **Combined Mode**: Both transcription and AI analysis in one process
- **Transcription-Only Mode**: Only audio transcription service
- **AI-Only Mode**: Only AI analysis service

#### Architecture Components

```
┌─────────────────────────────────────────────────────────────────┐
│                    Worker Service                           │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │  Transcription  │  │   AI Analysis  │              │
│  │    Service     │  │    Service     │              │
│  └─────────────────┘  └─────────────────┘              │
│           │                     │                          │
│           ▼                     ▼                          │
│  ┌─────────────────────────────────────────┐              │
│  │        Base Service Class         │              │
│  │  - Job Management               │              │
│  │  - Health Checks               │              │
│  │  - Metrics Collection           │              │
│  │  - Message Queue Integration     │              │
│  └─────────────────────────────────────────┘              │
│           │                     │                          │
│           ▼                     ▼                          │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │ Message Queue  │  │   MinIO Client │              │
│  │   Adapter     │  │               │              │
│  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

### Service Implementation Details

#### Transcription Service
- **Technology**: WhisperX with Pyannote Audio for diarization
- **Input**: Audio files from MinIO storage
- **Output**: VTT format transcripts uploaded to MinIO
- **Features**: Multi-language support, speaker diarization, GPU acceleration
- **API Routes**: `/transcribe/job`, `/transcribe/status/{job_id}`, `/transcribe/health`

#### AI Analysis Service
- **Technology**: Google GenAI (Gemini Pro)
- **Input**: VTT transcripts from MinIO storage
- **Output**: Structured JSON analysis uploaded to MinIO
- **Features**: Meeting summary, action items, sentiment analysis, recommendations
- **API Routes**: `/ai/analyze`, `/ai/status/{job_id}`, `/ai/health`

#### Message Queue Adapter Pattern

**Abstract Interface:**
```python
class MessageQueueAdapter(ABC):
    async def connect(self) -> bool
    async def publish(self, queue_name: str, message: Dict) -> bool
    async def consume(self, queue_name: str, callback: Callable) -> None
    async def health_check(self) -> bool
```

**Supported Implementations:**
- **RabbitMQ Adapter**: Production-ready with HA queues
- **Redis Adapter**: Lightweight for development/small deployments
- **Factory Pattern**: Automatic selection based on `MESSAGE_QUEUE_TYPE` environment variable

#### MinIO Integration

**MinIO Client Features:**
- S3-compatible async client
- Presigned URL generation for direct uploads
- Bucket management and file operations
- Health checks and error handling

**Storage Structure:**
```
├── audio/           # Original audio files
├── transcripts/     # VTT transcript files
├── analysis/        # JSON analysis results
└── temp/           # Temporary processing files
```

### Deployment Modes

#### Combined Mode (Default)
```bash
# Start both services in one process
python main.py --mode combined --port 7861
```

**Benefits:**
- Simplified deployment for small teams
- Shared resources and configuration
- Lower resource usage

#### Separate Services Mode
```bash
# Transcription-only service
python main.py --mode transcription --port 7861

# AI analysis-only service  
python main.py --mode ai --port 7862
```

**Benefits:**
- Independent scaling based on workload
- Isolated failure domains
- Team specialization (transcription vs AI)
- Separate resource allocation

#### Microservice Split Path

The modular design enables clean separation into independent microservices:

**Phase 1: Separate Processes**
- Same codebase, different entry points
- Independent configuration
- Separate message queue subscriptions

**Phase 2: Separate Repositories** (Future)
- Split `services/transcription/` to own repo
- Split `services/ai_analysis/` to own repo
- Shared utilities as common package

**Phase 3: Independent Services** (Future)
- Separate deployment pipelines
- Independent versioning
- Specialized infrastructure

### Configuration Management

#### Environment-Based Configuration
```python
# Automatic service mode detection
SERVICE_MODE=combined  # combined, transcription, ai

# Message queue selection
MESSAGE_QUEUE_TYPE=redis  # rabbitmq, redis

# Service-specific settings
WHISPER_MODEL=base
GENAI_API_KEY=your_key
```

#### Service Mode Logic
```python
class WorkerConfig:
    @property
    def is_transcription_enabled(self) -> bool:
        return self.service_mode in [ServiceMode.COMBINED, ServiceMode.TRANSCRIPTION_ONLY]
    
    @property
    def is_ai_enabled(self) -> bool:
        return self.service_mode in [ServiceMode.COMBINED, ServiceMode.AI_ONLY]
```

### Job Processing Flow

#### Unified Job Pipeline
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Client    │    │ Message     │    │   Worker    │
│             │───►│   Queue     │───►│   Service   │
│ POST /job  │    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
                            │                     │
                            │                     ▼
                            │            ┌─────────────┐
                            │            │   MinIO    │
                            │◄───────────│   Storage   │
                            │            └─────────────┘
                            │                     │
                            │                     ▼
                            │            ┌─────────────┐
                            │            │  Status     │
                            └───────────►│  Updates    │
                                         └─────────────┘
```

#### Job Status Tracking
- **Real-time updates** via message queue
- **Progress tracking** with percentage completion
- **Error handling** with detailed error messages
- **Metrics collection** for performance monitoring

### API Structure

#### Worker Service Endpoints (Health Checks Only)
- `GET /transcribe/health` - Transcription service health check
- `GET /ai/health` - AI analysis service health check

#### Common Endpoints
- `GET /` - Service information and status
- `GET /health` - Comprehensive health check
- `GET /metrics` - Service metrics
- `GET /status` - Detailed configuration status

#### Job Creation (External Services)
Jobs are created by the main API service and published to message queues:
- `worker_transcription_jobs` - For transcription jobs
- `worker_ai_analysis_jobs` - For AI analysis jobs
- `worker_job_status_updates` - For status updates
- `worker_notifications` - For notifications

### Scaling Considerations

#### Horizontal Scaling
- **Multiple worker instances** with unique `WORKER_ID`
- **Load balancing** at message queue level
- **Shared MinIO** storage for consistency

#### Resource Optimization
- **GPU allocation** for transcription services
- **Memory management** for AI models
- **Concurrent job limits** per worker

#### Monitoring
- **Health checks** for all dependencies
- **Metrics collection** for performance analysis
- **Error tracking** and alerting

# MinIO and Audio Processing Microservice

### MinIO Storage Configuration

The application uses MinIO as object storage for audio files, transcripts, and analysis results.

#### Storage Buckets
- `audio`: Original audio files
- `transcripts`: VTT transcript files
- `analysis`: JSON analysis results
- `avatars`: User avatar images

#### MinIO Integration
All file operations are handled through MinIO S3-compatible API:

**File Upload Flow:**
1. Client uploads audio to main API
2. Main API uploads file to MinIO `audio` bucket
3. Main API creates processing job in audio microservice
4. Audio microservice downloads from MinIO, processes, and uploads results
5. Main API updates database with MinIO object URLs

**File URLs Format:**
```
Audio: https://minio.example.com/buckets/audio/{filename}
Transcript: https://minio.example.com/buckets/transcripts/{filename}
Analysis: https://minio.example.com/buckets/analysis/{filename}
```

### Audio Processing Microservice API

The audio processing microservice handles CPU-intensive operations separately from the main API.

#### Microservice Base URL
```
http://audio-processor:7861/api/v1
```

#### Internal Endpoints

##### POST /process
Initiate audio processing job.

**Request Body:**
```json
{
  "job_id": "uuid",
  "audio_url": "https://minio.example.com/buckets/audio/filename.mp3",
  "options": {
    "diarize": true,
    "language": "en",
    "min_speakers": 2,
    "max_speakers": 10
  },
  "callback_url": "http://main-api:7860/api/v1/webhook/audio-processing-complete",
  "minio_config": {
    "endpoint": "minio:9000",
    "access_key": "minio_access_key",
    "secret_key": "minio_secret_key",
    "region": "us-east-1"
  }
}
```

**Response (202):**
```json
{
  "success": true,
  "job_id": "uuid",
  "status": "queued",
  "estimated_time": 300
}
```

##### GET /jobs/{job_id}
Check job status.

**Response (200):**
```json
{
  "success": true,
  "job_id": "uuid",
  "status": "processing",
  "progress": 65,
  "current_step": "AI analysis in progress...",
  "estimated_time_remaining": 120,
  "results": {
    "transcript_url": null,
    "analysis_url": null
  },
  "error": null
}
```

##### POST /webhook/audio-processing-complete
Webhook endpoint for main API to receive processing completion notifications.

**Request Body:**
```json
{
  "job_id": "uuid",
  "status": "completed",
  "results": {
    "transcript_url": "https://minio.example.com/buckets/transcripts/filename.vtt",
    "analysis_url": "https://minio.example.com/buckets/analysis/filename.json",
    "processing_time_seconds": 245,
    "speakers": [
      {
        "speaker_id": "SPEAKER_00",
        "name": "John Doe",
        "confidence": 0.95
      }
    ]
  }
}
```

## Environment Variables

### Backend Configuration
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/ai_meeting_saas

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE_MINUTES=30
JWT_REFRESH_EXPIRE_DAYS=7

# MinIO Configuration
MINIO_ENDPOINT=localhost:9000
MINIO_ACCESS_KEY=minio_access_key
MINIO_SECRET_KEY=minio_secret_key
MINIO_REGION=us-east-1
MINIO_SECURE=false
MINIO_BUCKET_AUDIO=audio
MINIO_BUCKET_TRANSCRIPTS=transcripts
MINIO_BUCKET_ANALYSIS=analysis
MINIO_BUCKET_AVATARS=avatars

# Audio Processing Microservice
AUDIO_PROCESSOR_URL=http://audio-processor:7861/api/v1
AUDIO_PROCESSOR_API_KEY=your_microservice_api_key

# AI Services (Used by microservice)
GENAI_API_KEY=your_google_ai_api_key
HF_API_KEY=your_huggingface_api_key

# CORS
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

# Message Queue Configuration
MESSAGE_QUEUE_TYPE=rabbitmq  # rabbitmq, redis, kafka
RABBITMQ_URL=amqp://guest:guest@localhost:5672/
RABBITMQ_USER=guest
RABBITMQ_PASSWORD=guest
RABBITMQ_HOST=localhost
RABBITMQ_PORT=5672
RABBITMQ_VIRTUAL_HOST=/

# Redis (alternative message queue)
REDIS_URL=redis://localhost:6379
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=0

# Rate Limiting (still uses Redis)
RATE_LIMIT_REDIS_URL=redis://localhost:6379
```

# Worker Service Configuration
```env
# Service Mode
SERVICE_MODE=combined  # combined, transcription, ai
SERVICE_PORT=7861
SERVICE_HOST=0.0.0.0
WORKER_ID=worker-1

# MinIO Configuration
MINIO_ENDPOINT=localhost:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_REGION=us-east-1
MINIO_SECURE=false

# Message Queue Configuration
MESSAGE_QUEUE_TYPE=redis  # rabbitmq, redis
RABBITMQ_URL=amqp://guest:guest@localhost:5672/
REDIS_URL=redis://localhost:6379

# AI Services
GENAI_API_KEY=your_google_ai_api_key
HF_API_KEY=your_huggingface_api_key

# Transcription Configuration
WHISPER_MODEL=base
WHISPER_DEVICE=auto
MAX_CONCURRENT_JOBS=2

# Processing Configuration
TEMP_DIR=./temp
MAX_FILE_SIZE=104857600  # 100MB
ALLOWED_EXTENSIONS=wav,mp3,ogg,m4a,webm

# Health Check Configuration
HEALTH_CHECK_INTERVAL=30

# API Configuration
API_KEY=your_microservice_api_key
```

### Audio Processing Microservice Configuration
```env
# Service Configuration
SERVICE_PORT=7861
SERVICE_HOST=0.0.0.0

# MinIO Configuration
MINIO_ENDPOINT=minio:9000
MINIO_ACCESS_KEY=minio_access_key
MINIO_SECRET_KEY=minio_secret_key
MINIO_REGION=us-east-1
MINIO_SECURE=false

# AI Services
GENAI_API_KEY=your_google_ai_api_key
HF_API_KEY=your_huggingface_api_key

# Processing Configuration
WHISPER_MODEL=base
WHISPER_DEVICE=cpu
MAX_CONCURRENT_JOBS=3
TEMP_DIR=/tmp/audio_processing

# Authentication
API_KEY=your_microservice_api_key
```

## Deployment Considerations

### Production Requirements
- **Database**: PostgreSQL 14+
- **Cache**: Redis 6+
- **Object Storage**: MinIO cluster with replication
- **Audio Processing Microservice**: Separate deployment with GPU support
- **Message Queue**: RabbitMQ cluster with HA (or Redis via adapter)
- **Monitoring**: Application monitoring and logging
- **SSL**: HTTPS required for production
- **Load Balancer**: NGINX or similar for routing

### Architecture Overview
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Main API      │    │  Audio Processor│
│   (Next.js)     │◄──►│   (FastAPI)     │◄──►│   Microservice  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │                        │
                              ▼                        ▼
                       ┌─────────────────┐    ┌─────────────────┐
│   PostgreSQL    │    │     MinIO       │    │    RabbitMQ     │
│   Database      │    │   Object Store  │    │   Message Queue │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │                        │
                              ▼                        ▼
                       ┌─────────────────┐    ┌─────────────────┐
│     Redis       │    │    Workers      │
│  Rate Limiting  │    │   Audio Jobs    │
└─────────────────┘    └─────────────────┘
```

## Detailed Architecture Diagrams

### 1. Meeting Lifecycle Flow
```
┌─────────────┐    POST /meetings    ┌─────────────┐
│   Client    │─────────────────────►│   Main API  │
│  (Frontend) │                     │  (FastAPI)  │
└─────────────┘                     └─────────────┘
      │                                   │
      │ 201 Created (meeting_id)           │
      │◄───────────────────────────────────│
      │                                   │
      │ POST /meetings/{id}/start         │
      │──────────────────────────────────►│
      │                                   │
      │ 200 OK (session_id, upload_url)   │
      │◄──────────────────────────────────│
      │                                   │
      │ PUT to MinIO (presigned URL)      │
      │──────────────────────────────────►│ MinIO Store │
      │                                   │
      │ POST /meetings/{id}/end           │
      │──────────────────────────────────►│
      │                                   │
      │ 200 OK (job_id, audio_url)        │
      │◄──────────────────────────────────│
      │                                   │
      │                                   │ Publish Job
      │                                   │─────────────────►│ RabbitMQ   │
      │                                   │                 │ Workers     │
      │                                   │                 │◄────────────│
      │                                   │                 │
      │ GET /upload/{id}/status           │                 │
      │◄──────────────────────────────────│                 │
```

### 2. Audio Processing Pipeline
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Main API      │    │   RabbitMQ      │    │ Audio Processor │
│                 │    │   Message Queue │    │   Microservice  │
│ Publish Job     │───►│                 │───►│                 │
│ (audio_url,     │    │                 │    │ Download Audio  │
│  options)       │    │                 │    │ from MinIO      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
      ▲                        │                        │
      │                        │                        ▼
      │                        │                ┌─────────────────┐
      │                        │                │ WhisperX +      │
      │                        │                │ Pyannote Audio  │
      │                        │                │ (Transcription) │
      │                        │                └─────────────────┘
      │                        │                        │
      │                        │                        ▼
      │                        │                ┌─────────────────┐
      │                        │                │ Google GenAI    │
      │                        │                │ (Analysis)      │
      │                        │                └─────────────────┘
      │                        │                        │
      │                        │                        ▼
      │                        │                ┌─────────────────┐
      │                        │                │ Upload to MinIO │
      │                        │                │ (transcript,    │
      │                        │                │  analysis)      │
      │                        │                └─────────────────┘
      │                        │                        │
      │                        │                        ▼
      │                        │                ┌─────────────────┐
      │                        │                │ Webhook to API  │
      │                        │                │ (completion)    │
      │                        │                └─────────────────┘
      │                        │                        │
      │                        │◄───────────────────────│
      │◄───────────────────────│
```

### 3. Message Queue Adapter Pattern
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Main API      │    │ Message Queue   │    │   RabbitMQ      │
│                 │    │    Factory      │    │   Adapter       │
│                 │───►│                 │───►│                 │
│ publish()       │    │ create_adapter()│    │ aio_pika        │
│ consume()       │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │                        │
                              │                        │
                              ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Redis         │    │   Kafka         │    │   Future        │
│   Adapter       │    │   Adapter       │    │   Adapters      │
│                 │    │                 │    │                 │
│ aioredis        │    │ aiokafka        │    │ (SNS/SQS, etc.) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 4. Data Flow Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Main API      │    │   PostgreSQL    │
│                 │    │                 │    │   Database      │
│ Meeting Data    │◄──►│                 │◄──►│                 │
│ Audio Upload    │    │ Session Mgmt    │    │ Meeting Records │
│ Status Updates  │    │ Auth/Validation │    │ User Data       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
      │                        │                        │
      │                        │                        │
      ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   MinIO         │    │   RabbitMQ      │    │   Redis         │
│   Object Store  │    │   Message Queue │    │   Cache         │
│                 │    │                 │    │                 │
│ Audio Files     │    │ Job Queue      │    │ Rate Limiting   │
│ Transcripts     │    │ Status Updates  │    │ Session Cache   │
│ Analysis        │    │ Notifications   │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 5. Production Deployment Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                        Load Balancer (NGINX)                   │
│                     SSL Termination, Routing                   │
└─────────────────────┬───────────────────────────────────────────┘
                      │
         ┌────────────┼────────────┐
         ▼            ▼            ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Frontend    │ │ Main API    │ │ Admin UI    │
│ (Next.js)   │ │ (FastAPI)   │ │ (Optional)  │
│ x3 instances │ │ x5 instances│ │ x1 instance │
└─────────────┘ └─────────────┘ └─────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Service Mesh (Optional)                      │
│              Service Discovery, Circuit Breaker                 │
└─────────────────────┬───────────────────────────────────────────┘
                      │
         ┌────────────┼────────────┐
         ▼            ▼            ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ PostgreSQL  │ │ MinIO       │ │ RabbitMQ    │
│ Cluster     │ │ Cluster     │ │ Cluster     │
│ (1 Primary, │ │ (4 Nodes,   │ │ (3 Nodes,   │
│  2 Replicas)│ │  Erasure)   │ │  HA Queues)  │
└─────────────┘ └─────────────┘ └─────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Audio Processing Cluster                       │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │ Worker 1    │ │ Worker 2    │ │ Worker 3    │               │
│  │ (GPU)       │ │ (GPU)       │ │ (GPU)       │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
└─────────────────────────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Monitoring & Logging                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │ Prometheus  │ │ Grafana     │ │ ELK Stack   │               │
│  │ (Metrics)   │ │ (Dashboards)│ │ (Logs)      │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
└─────────────────────────────────────────────────────────────────┘
```

### Scaling Considerations
- **Main API**: Horizontal scaling with load balancer
- **Audio Processing**: Scale microservice independently based on CPU/GPU load
- **MinIO**: Distributed deployment with erasure coding
- **Database**: Read replicas for analytics queries
- **CDN**: CloudFlare or similar for MinIO object delivery
- **Queue Processing**: Multiple worker instances for audio jobs
- **RabbitMQ**: Clustered deployment with HA queues and mirroring
- **Message Queue Adapter**: Easy switching between RabbitMQ, Redis, or Kafka

### MinIO Production Setup
```yaml
# docker-compose.yml excerpt
minio:
  image: minio/minio:latest
  command: server /data --console-address ":9001"
  ports:
    - "9000:9000"
    - "9001:9001"
  environment:
    MINIO_ROOT_USER: minioadmin
    MINIO_ROOT_PASSWORD: minioadmin
  volumes:
    - minio_data:/data
  deploy:
    replicas: 4
    placement:
      constraints:
        - node.role == manager
```

### RabbitMQ Production Setup
```yaml
# docker-compose.yml excerpt
rabbitmq:
  image: rabbitmq:3.12-management-alpine
  ports:
    - "5672:5672"    # AMQP port
    - "15672:15672"  # Management UI
  environment:
    RABBITMQ_DEFAULT_USER: admin
    RABBITMQ_DEFAULT_PASS: admin_password
    RABBITMQ_DEFAULT_VHOST: /
  volumes:
    - rabbitmq_data:/var/lib/rabbitmq
    - ./rabbitmq.conf:/etc/rabbitmq/rabbitmq.conf
  deploy:
    replicas: 3
    placement:
      constraints:
        - node.role == worker
```

### RabbitMQ Configuration (rabbitmq.conf)
```ini
# Enable HA queues
default_vhost = /
ha_mode = all
ha_sync_mode = automatic
ha_sync_batch_size = 10

# Memory and disk thresholds
vm_memory_high_watermark.relative = 0.6
disk_free_limit.absolute = 1GB

# Cluster configuration
custer_formation.peer_discovery_backend = rabbitmq_peer_discovery_k8s
cluster_formation.k8s.host_name_suffix = .default.svc.cluster.local
cluster_formation.node_cleanup.interval = 30
cluster_formation.node_cleanup.only_log_warning = true
```

## Testing

### API Testing Examples

#### Meeting Start/End Workflow
```bash
# Step 1: Create a meeting
curl -X POST \
  http://localhost:7860/api/v1/meetings \
  -H 'Authorization: Bearer your_jwt_token' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Team Standup",
    "date": "2024-03-16T09:00:00Z",
    "duration": "30m",
    "participants": ["John Doe", "Alice Smith"]
  }'

# Step 2: Start the meeting and get upload credentials
curl -X POST \
  http://localhost:7860/api/v1/meetings/{meeting_id}/start \
  -H 'Authorization: Bearer your_jwt_token'

# Step 3: Upload audio file directly to MinIO using presigned URL
curl -X PUT \
  '{minio_upload_url}' \
  -H 'Content-Type: audio/mpeg' \
  --upload-file meeting_audio.mp3

# Step 4: End the meeting and trigger processing
curl -X POST \
  http://localhost:7860/api/v1/meetings/{meeting_id}/end \
  -H 'Authorization: Bearer your_jwt_token' \
  -H 'Content-Type: application/json' \
  -d '{
    "session_id": "uuid",
    "recording_metadata": {
      "duration_seconds": 1800,
      "file_size_bytes": 52428800,
      "format": "mp3"
    },
    "processing_options": {
      "diarize": true,
      "language": "en"
    }
  }'

# Step 5: Check processing status
curl -X GET \
  http://localhost:7860/api/v1/upload/{upload_id}/status \
  -H 'Authorization: Bearer your_jwt_token'

# Step 6: Download transcript when complete
curl -X GET \
  http://localhost:7860/api/v1/upload/{upload_id}/transcript \
  -H 'Authorization: Bearer your_jwt_token' \
  -o transcript.vtt
```

#### Legacy Upload and Process Audio
```bash
# Step 1: Upload audio file (legacy method)
curl -X POST \
  http://localhost:7860/api/v1/upload \
  -H 'Authorization: Bearer your_jwt_token' \
  -F 'file=@meeting_audio.mp3' \
  -F 'diarize=true' \
  -F 'language=en'

# Step 2: Check processing status
curl -X GET \
  http://localhost:7860/api/v1/upload/{upload_id}/status \
  -H 'Authorization: Bearer your_jwt_token'

# Step 3: Download transcript when complete
curl -X GET \
  http://localhost:7860/api/v1/upload/{upload_id}/transcript \
  -H 'Authorization: Bearer your_jwt_token' \
  -o transcript.vtt
```

#### Create Meeting
```bash
curl -X POST \
  http://localhost:7860/api/v1/meetings \
  -H 'Authorization: Bearer your_jwt_token' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Team Standup",
    "date": "2024-03-16T09:00:00Z",
    "duration": "30m",
    "participants": ["John Doe", "Alice Smith"]
  }'
```

#### Get Meetings
```bash
curl -X GET \
  'http://localhost:7860/api/v1/meetings?status=upcoming&page=1&limit=10' \
  -H 'Authorization: Bearer your_jwt_token'
```

## Dependencies

### Worker Service Dependencies
```bash
# Core dependencies
pip install celery[redis] redis psycopg2-binary sqlalchemy

# AI Services
pip install google-generativeai huggingface_hub

# Audio Processing
pip install whisperx torch torchaudio

# Storage
pip install minio

# Monitoring (optional)
pip install flower
```

### PostgreSQL Integration with Existing Application Tables

The worker should store results directly in the existing application database tables that are already defined in the main application.

#### Use Existing Tables Structure
Based on the existing application schema, we can use:

**1. Meetings Table** (already exists - just add processing columns)
```sql
-- Add processing status columns to existing meetings table
ALTER TABLE meetings ADD COLUMN processing_status VARCHAR(20) DEFAULT 'pending';
ALTER TABLE meetings ADD COLUMN processing_job_id VARCHAR(155);
ALTER TABLE meetings ADD COLUMN processing_started_at TIMESTAMP;
ALTER TABLE meetings ADD COLUMN processing_completed_at TIMESTAMP;
ALTER TABLE meetings ADD COLUMN processing_error TEXT;

-- These columns already exist in meetings table:
-- transcript_available: boolean
-- analysis_available: boolean  
-- transcript_url: string (MinIO URL)
-- analysis_url: string (MinIO URL)
-- audio_url: string (MinIO URL)
```

**2. Use Existing Columns for Storage**
```sql
-- Store transcript content directly in meetings table (if needed)
ALTER TABLE meetings ADD COLUMN transcript_content TEXT;
ALTER TABLE meetings ADD COLUMN analysis_content JSONB;

-- Or keep using MinIO URLs as currently designed:
-- meetings.transcript_url -> MinIO VTT file
-- meetings.analysis_url -> MinIO JSON analysis file
```

#### Worker Task Integration with Existing Schema
```python
# In worker tasks, update existing application tables directly
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Database connection to main application database
engine = create_engine("postgresql://user:password@localhost:5432/ai_meeting_saas")
SessionLocal = sessionmaker(bind=engine)

@celery_app.task
def transcribe_audio(self, job_data):
    try:
        # Update existing meetings table
        session = SessionLocal()
        meeting = session.query(Meeting).filter_by(id=job_data['meeting_id']).first()
        
        # Update processing status
        meeting.processing_status = 'processing'
        meeting.processing_job_id = self.request.id
        meeting.processing_started_at = datetime.now()
        session.commit()
        
        # Process transcription...
        result = controller.transcribe_audio(job_data)
        
        # Update existing meetings table with results
        meeting.transcript_url = result['transcript_url']  # MinIO URL
        meeting.transcript_available = True
        meeting.processing_status = 'completed'
        meeting.processing_completed_at = datetime.now()
        
        # Optionally store content directly in database
        # meeting.transcript_content = result['transcript_data']['vtt_content']
        
        session.commit()
        
        return TaskResult.success(result, self.request.id)
        
    except Exception as e:
        # Update meeting with error
        meeting.processing_status = 'failed'
        meeting.processing_error = str(e)
        session.commit()
        raise

@celery_app.task  
def analyze_transcript(self, job_data):
    try:
        session = SessionLocal()
        meeting = session.query(Meeting).filter_by(id=job_data['meeting_id']).first()
        
        # Update processing status
        meeting.processing_status = 'processing'
        meeting.processing_job_id = self.request.id
        meeting.processing_started_at = datetime.now()
        session.commit()
        
        # Process AI analysis...
        result = controller.analyze_transcript(job_data)
        
        # Update existing meetings table with analysis results
        meeting.analysis_url = result['analysis_url']  # MinIO URL
        meeting.analysis_available = True
        meeting.processing_status = 'completed'
        meeting.processing_completed_at = datetime.now()
        
        # Optionally store analysis content directly
        # meeting.analysis_content = result['analysis_data']
        
        session.commit()
        
        return TaskResult.success(result, self.request.id)
        
    except Exception as e:
        meeting.processing_status = 'failed'
        meeting.processing_error = str(e)
        session.commit()
        raise
```

#### Environment Configuration
```env
# Use main application database for results
CELERY_BROKER_URL=redis://localhost:6379/0
CELERY_RESULT_BACKEND=db+postgresql://user:password@localhost:5432/ai_meeting_saas
DATABASE_URL=postgresql://user:password@localhost:5432/ai_meeting_saas
```

#### Benefits of Using Existing Tables
✅ **No Schema Changes** - Use existing application structure  
✅ **Consistent Data Model** - Same tables as main application  
✅ **Simpler Queries** - Single meeting table contains all data  
✅ **Backward Compatible** - Doesn't break existing application code  
✅ **Direct Integration** - No need for additional joins or relationships

## Version History

- **v1.1.0**: Updated architecture with MinIO and microservice
  - MinIO integration for object storage
  - Separate audio processing microservice
  - Asynchronous processing workflow
  - Webhook-based job completion
  - Improved scalability and reliability

- **v1.0.0**: Initial API specification
  - Core meeting management
  - Audio processing and transcription
  - AI-powered analysis
  - Task management
  - User authentication

## Support

For API support and questions:
- Documentation: [API Docs](https://docs.yourdomain.com)
- Support Email: api-support@yourdomain.com
- Status Page: [API Status](https://status.yourdomain.com)

# NestJS Backend Implementation

## Tech Stack
- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT with Passport.js
- **Storage**: MinIO (S3 compatible)
- **Message Broker**: RabbitMQ (AMQP)
- **Real-time**: Socket.io
- **Validation**: class-validator, class-transformer

## Module Architecture

### 1. Auth & Users
- **AuthModule**: Handles registration, login, and JWT issuance.
- **UsersModule**: Manages user profiles and persistence.
- **Security**: Password hashing with bcrypt, JWT strategy for route protection.

### 2. Meetings Management
- **MeetingsModule**: Core CRUD for meetings.
- **Lifecycle**:
  - `POST /meetings/{id}/start`: Generates MinIO presigned URL for direct client-to-storage upload.
  - `POST /meetings/{id}/end`: Updates status to `processing` and publishes job to RabbitMQ.

### 3. Task Management
- **TasksModule**: Manages action items extracted from meetings.
- **Integration**: Tasks are automatically created by `WebhooksService` after AI analysis.

### 4. Storage & Upload
- **StorageModule**: Wrapper for MinIO client.
- **UploadModule**: Handles legacy multipart uploads and coordinates with `WorkersService`.

### 5. Worker Integration
- **WorkersModule**: Connects to RabbitMQ.
- **Publishing**: Sends jobs to `transcription`, `ai_analysis`, and `combined` queues.
- **Format**: Decoupled from NestJS microservices to support Python/Celery workers.

### 6. Real-time Notifications
- **NotificationsModule**: WebSocket gateway using Socket.io.
- **Features**: Room-based subscriptions (`meeting_{id}`) for live processing status.

### 7. Webhooks
- **WebhooksModule**: Receives processing results from workers.
- **Processing**: Updates database, creates tasks, and triggers WebSocket notifications.

### 8. Search & Analytics
- **SearchModule**: Provides `ILike` based search over meetings and tasks.
- **AnalyticsModule**: Aggregates productivity scores and meeting counts for the dashboard.

## Database Schema (TypeORM Entities)
- **User**: ID, Email, Password, FullName, Company, Timezone, Language.
- **Meeting**: ID, Title, Date, Duration, Status, Participants, Platform, Summary, Transcript, Analysis (JSONB), URLs (Audio, Transcript, Analysis).
- **Task**: ID, Title, Description, Status, Priority, Assignee, DueDate, MeetingId, UserId.

## Development Setup
```bash
cd backend
pnpm install
# Configure .env
pnpm run start:dev
```
