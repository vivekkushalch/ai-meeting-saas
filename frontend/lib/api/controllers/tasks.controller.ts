import apiClient from "../client";
import { 
  Task, 
  ApiResponse, 
  CreateTaskRequest,
  UpdateTaskRequest,
  TaskListResponse,
  TaskDetailResponse
} from "../../types";

export const tasksController = {
  getAll: async (params?: { 
    meeting_id?: string; 
    status?: string; 
    priority?: string; 
    assignee?: string; 
    due_date_from?: string; 
    due_date_to?: string; 
    page?: number; 
    limit?: number 
  }): Promise<TaskListResponse> => {
    const response = await apiClient.get<TaskListResponse>("/tasks", { params });
    return response.data;
  },

  create: async (data: CreateTaskRequest): Promise<TaskDetailResponse> => {
    const response = await apiClient.post<TaskDetailResponse>("/tasks", data);
    return response.data;
  },

  update: async (id: string, data: UpdateTaskRequest): Promise<TaskDetailResponse> => {
    const response = await apiClient.put<TaskDetailResponse>(`/tasks/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<ApiResponse<void>> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/tasks/${id}`);
    return response.data;
  },

  toggle: async (id: string): Promise<TaskDetailResponse> => {
    const response = await apiClient.patch<TaskDetailResponse>(`/tasks/${id}/toggle`);
    return response.data;
  },
};
