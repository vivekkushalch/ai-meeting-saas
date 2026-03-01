import apiClient from "../client";
import { 
  SearchMeetingsResponse, 
  SearchTasksResponse
} from "../../types";

export const searchController = {
  searchMeetings: async (params: { 
    q: string; 
    date_from?: string; 
    date_to?: string; 
    status?: string; 
    page?: number; 
    limit?: number 
  }): Promise<SearchMeetingsResponse> => {
    const response = await apiClient.get<SearchMeetingsResponse>("/search/meetings", { params });
    return response.data;
  },

  searchTasks: async (params: { 
    q: string; 
    status?: string; 
    priority?: string; 
    assignee?: string; 
    page?: number; 
    limit?: number 
  }): Promise<SearchTasksResponse> => {
    const response = await apiClient.get<SearchTasksResponse>("/search/tasks", { params });
    return response.data;
  },
};
