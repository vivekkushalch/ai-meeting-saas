import apiClient from "../client";
import { 
  ApiResponse, 
  UploadResponse,
  UploadStatusResponse,
  AnalysisResponse
} from "../../types";

export const uploadController = {
  uploadFile: async (file: File, options?: {
    meeting_id?: string;
    diarize?: boolean;
    language?: string;
    min_speakers?: number;
    max_speakers?: number;
  }): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append("file", file);
    if (options?.meeting_id) formData.append("meeting_id", options.meeting_id);
    if (options?.diarize !== undefined) formData.append("diarize", String(options.diarize));
    if (options?.language) formData.append("language", options.language);
    if (options?.min_speakers) formData.append("min_speakers", String(options.min_speakers));
    if (options?.max_speakers) formData.append("max_speakers", String(options.max_speakers));

    const response = await apiClient.post<UploadResponse>("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  getStatus: async (uploadId: string): Promise<UploadStatusResponse> => {
    const response = await apiClient.get<UploadStatusResponse>(`/upload/${uploadId}/status`);
    return response.data;
  },

  getTranscript: async (uploadId: string): Promise<string> => {
    const response = await apiClient.get<string>(`/upload/${uploadId}/transcript`, {
      responseType: "text",
    });
    return response.data;
  },

  getAnalysis: async (uploadId: string): Promise<AnalysisResponse> => {
    const response = await apiClient.get<AnalysisResponse>(`/upload/${uploadId}/analysis`);
    return response.data;
  },
};
