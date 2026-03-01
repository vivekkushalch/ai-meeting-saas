import apiClient from "../client";
import { 
  DashboardAnalyticsResponse, 
  MeetingAnalyticsResponse
} from "../../types";

export const analyticsController = {
  getDashboard: async (period?: string): Promise<DashboardAnalyticsResponse> => {
    const response = await apiClient.get<DashboardAnalyticsResponse>("/analytics/dashboard", {
      params: { period },
    });
    return response.data;
  },

  getMeetingAnalytics: async (meetingId: string): Promise<MeetingAnalyticsResponse> => {
    const response = await apiClient.get<MeetingAnalyticsResponse>(`/analytics/meetings/${meetingId}`);
    return response.data;
  },
};
