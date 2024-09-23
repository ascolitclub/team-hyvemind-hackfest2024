import axios, { Method, AxiosRequestConfig, AxiosError } from 'axios';
import { API_URL } from './helper';
import { ApiResponse } from '../types/apiResponse';
const axiosInstance = axios.create({
  baseURL: API_URL,
});

interface AxiosBody extends AxiosRequestConfig {
  method: Method;
  url: string;
  headers?: Record<string, string>;
  data?: any;
}

// Helper function for making API requests
const makeRequest = async (
  method: Method,
  url: string,
  body: any,
  headers: Record<string, string>
): Promise<ApiResponse> => {
  const config: AxiosBody = {
    method,
    url,
    headers,
    data: body,
  };

  try {
    const response = await axiosInstance(config);
    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data as ApiResponse;
  }
};

// Unauthenticated request
export const commonRequest = async <T = any>(
  method: Method,
  url: string,
  body: any = '',
  header: Record<string, string> = { 'Content-Type': 'application/json' }
): Promise<ApiResponse<T>> => {
  return makeRequest(method, url, body, header);
};

// Authenticated request
export const authRequest = async <T = any>(
  method: Method,
  url: string,
  body: any = '',
  header: Record<string, string> = { 'Content-Type': 'application/json' }
): Promise<ApiResponse<T>> => {
  const token = localStorage.getItem('authToken');
  if (token) {
    header['Authorization'] = `${token}`;
  }
  return makeRequest(method, url, body, header);
};
