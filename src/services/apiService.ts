
import axios, { 
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse, 
  AxiosError,
  InternalAxiosRequestConfig 
} from 'axios';
import { APP_CONFIG } from '../config/app.config';

// Types for API responses
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
}

export interface ApiError {
  message: string;
  code: number;
  details?: Record<string, any>;
}

// File upload progress callback type
export type UploadProgressCallback = (progressEvent: { loaded: number; total: number; percentage: number }) => void;

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    // Create axios instance with base configuration
    this.axiosInstance = axios.create({
      baseURL: APP_CONFIG.api.baseUrl,
      timeout: APP_CONFIG.api.timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log('🔗 API Request:', {
          method: config.method?.toUpperCase(),
          url: config.url,
          baseURL: config.baseURL,
          timestamp: new Date().toISOString(),
        });

        // Add auth token if available
        const token = this.getAuthToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error: AxiosError) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log('✅ API Response:', {
          status: response.status,
          url: response.config.url,
          timestamp: new Date().toISOString(),
        });
        return response;
      },
      async (error: AxiosError) => {
        console.error('❌ Response Error:', {
          status: error.response?.status,
          message: error.message,
          url: error.config?.url,
        });

        // Handle different error types
        if (error.response?.status === 401) {
          console.warn('🔐 Authentication error detected');
          this.handleAuthError();
        }

        // Retry logic for failed requests
        if (this.shouldRetry(error)) {
          return this.retryRequest(error);
        }

        return Promise.reject(this.formatError(error));
      }
    );
  }

  private getAuthToken(): string | null {
    // Get token from localStorage, Redux store, or other storage
    try {
      return localStorage.getItem('auth_token');
    } catch {
      return null;
    }
  }

  private handleAuthError(): void {
    // Handle authentication errors (logout, redirect to login, etc.)
    localStorage.removeItem('auth_token');
    // You can dispatch Redux actions or redirect here
    window.location.href = '/login';
  }

  private shouldRetry(error: AxiosError): boolean {
    // Retry on network errors or 5xx server errors
    return !error.response || (error.response.status >= 500 && error.response.status < 600);
  }

  private async retryRequest(error: AxiosError): Promise<AxiosResponse> {
    const config = error.config as InternalAxiosRequestConfig & { retryCount?: number };
    config.retryCount = config.retryCount || 0;

    if (config.retryCount < APP_CONFIG.api.retryAttempts) {
      config.retryCount++;
      console.log(`🔄 Retrying request (${config.retryCount}/${APP_CONFIG.api.retryAttempts}):`, config.url);
      
      // Exponential backoff delay
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, config.retryCount) * 1000));
      
      return this.axiosInstance(config);
    }

    throw error;
  }

  private formatError(error: AxiosError): ApiError {
    if (error.response) {
      // Server responded with error status
      const responseData = error.response.data as any;
      return {
        message: responseData?.message || error.message,
        code: error.response.status,
        details: responseData,
      };
    } else if (error.request) {
      // Request was made but no response received
      return {
        message: 'Network error - no response received',
        code: 0,
        details: { request: error.request },
      };
    } else {
      // Something else happened
      return {
        message: error.message,
        code: -1,
        details: { error: error.toJSON() },
      };
    }
  }

  // GET method
  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  // POST method
  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  // PUT method
  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  // PATCH method
  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.patch<T>(url, data, config);
    return response.data;
  }

  // DELETE method
  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }

  // HEAD method
  async head(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.head(url, config);
  }

  // OPTIONS method
  async options(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.options(url, config);
  }

  // File upload method with progress tracking
  async uploadFile<T = any>(
    url: string,
    file: File,
    onUploadProgress?: UploadProgressCallback,
    additionalData?: Record<string, any>
  ): Promise<T> {
    const formData = new FormData();
    formData.append('file', file);

    // Add additional data to form if provided
    if (additionalData) {
      Object.keys(additionalData).forEach(key => {
        formData.append(key, additionalData[key]);
      });
    }

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onUploadProgress && progressEvent.total) {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onUploadProgress({
            loaded: progressEvent.loaded,
            total: progressEvent.total,
            percentage,
          });
        }
      },
    };

    const response = await this.axiosInstance.post<T>(url, formData, config);
    return response.data;
  }

  // Multiple files upload
  async uploadMultipleFiles<T = any>(
    url: string,
    files: File[],
    onUploadProgress?: UploadProgressCallback,
    additionalData?: Record<string, any>
  ): Promise<T> {
    const formData = new FormData();
    
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });

    if (additionalData) {
      Object.keys(additionalData).forEach(key => {
        formData.append(key, additionalData[key]);
      });
    }

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onUploadProgress && progressEvent.total) {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onUploadProgress({
            loaded: progressEvent.loaded,
            total: progressEvent.total,
            percentage,
          });
        }
      },
    };

    const response = await this.axiosInstance.post<T>(url, formData, config);
    return response.data;
  }

  // Download file method
  async downloadFile(url: string, filename?: string): Promise<void> {
    const response = await this.axiosInstance.get(url, {
      responseType: 'blob',
    });

    const blob = new Blob([response.data]);
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  }

  // Set auth token
  setAuthToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // Clear auth token
  clearAuthToken(): void {
    localStorage.removeItem('auth_token');
  }

  // Get axios instance for custom configurations
  getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

// Create and export singleton instance
export const apiService = new ApiService();
export default apiService;
