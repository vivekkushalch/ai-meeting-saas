import apiClient from "../client";
import { 
  LoginRequest, 
  LoginResponse, 
  RegisterRequest, 
  RegisterResponse,
  RefreshResponse
} from "../../types";

export const authController = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>("/auth/login", data);
    if (response.data.success && response.data.data.access_token) {
      localStorage.setItem("access_token", response.data.data.access_token);
    }
    return response.data;
  },

  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>("/auth/register", data);
    if (response.data.success && response.data.data.access_token) {
      localStorage.setItem("access_token", response.data.data.access_token);
    }
    return response.data;
  },

  refresh: async (): Promise<RefreshResponse> => {
    const response = await apiClient.post<RefreshResponse>("/auth/refresh");
    if (response.data.success && response.data.data.access_token) {
      localStorage.setItem("access_token", response.data.data.access_token);
    }
    return response.data;
  },

  logout: async (): Promise<void> => {
    try {
      await apiClient.post("/auth/logout");
    } finally {
      localStorage.removeItem("access_token");
    }
  },
};
