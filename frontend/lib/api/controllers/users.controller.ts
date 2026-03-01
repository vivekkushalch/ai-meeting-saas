import apiClient from "../client";
import { 
  UserProfileResponse, 
  UpdateProfileRequest,
  ApiResponse,
  ChangePasswordRequest
} from "../../types";

export const usersController = {
  getProfile: async (): Promise<UserProfileResponse> => {
    const response = await apiClient.get<UserProfileResponse>("/users/profile");
    return response.data;
  },

  updateProfile: async (data: UpdateProfileRequest): Promise<UserProfileResponse> => {
    const response = await apiClient.put<UserProfileResponse>("/users/profile", data);
    return response.data;
  },

  changePassword: async (data: ChangePasswordRequest): Promise<ApiResponse<void>> => {
    const response = await apiClient.post<ApiResponse<void>>("/users/change-password", data);
    return response.data;
  },
};
