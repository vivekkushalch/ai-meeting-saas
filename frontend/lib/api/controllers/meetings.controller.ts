import apiClient from "../client";
import { 
  Meeting, 
  ApiResponse, 
  CreateMeetingRequest,
  UpdateMeetingRequest,
  MeetingListResponse,
  MeetingDetailResponse,
  StartMeetingResponse,
  EndMeetingRequest
} from "../../types";

export const meetingsController = {
  getAll: async (params?: { 
    status?: string; 
    date_from?: string; 
    date_to?: string; 
    page?: number; 
    limit?: number 
  }): Promise<MeetingListResponse> => {
    const response = await apiClient.get<MeetingListResponse>("/meetings", { params });
    return response.data;
  },

  getById: async (id: string): Promise<MeetingDetailResponse> => {
    const response = await apiClient.get<MeetingDetailResponse>(`/meetings/${id}`);
    return response.data;
  },

  create: async (data: CreateMeetingRequest): Promise<MeetingDetailResponse> => {
    const response = await apiClient.post<MeetingDetailResponse>("/meetings", data);
    return response.data;
  },

  update: async (id: string, data: UpdateMeetingRequest): Promise<MeetingDetailResponse> => {
    const response = await apiClient.put<MeetingDetailResponse>(`/meetings/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<ApiResponse<void>> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/meetings/${id}`);
    return response.data;
  },

  start: async (id: string): Promise<StartMeetingResponse> => {
    const response = await apiClient.post<StartMeetingResponse>(`/meetings/${id}/start`);
    return response.data;
  },

  end: async (id: string, data: EndMeetingRequest): Promise<ApiResponse<any>> => {
    const response = await apiClient.post<ApiResponse<any>>(`/meetings/${id}/end`, data);
    return response.data;
  },
};
