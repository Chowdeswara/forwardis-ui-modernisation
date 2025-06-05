
import { useState, useCallback } from 'react';
import { apiService, ApiError, UploadProgressCallback } from '../services/apiService';
import { toast } from 'sonner';

export interface UseApiServiceOptions {
  showErrorToast?: boolean;
  showSuccessToast?: boolean;
}

export const useApiService = (options: UseApiServiceOptions = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const { showErrorToast = true, showSuccessToast = false } = options;

  const handleRequest = useCallback(async <T>(
    requestFn: () => Promise<T>,
    successMessage?: string
  ): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await requestFn();
      
      if (showSuccessToast && successMessage) {
        toast.success(successMessage);
      }
      
      return result;
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError);
      
      if (showErrorToast) {
        toast.error(apiError.message || 'An error occurred');
      }
      
      return null;
    } finally {
      setLoading(false);
    }
  }, [showErrorToast, showSuccessToast]);

  // Wrapper methods for all HTTP methods
  const get = useCallback(<T>(url: string, successMessage?: string) => {
    return handleRequest<T>(() => apiService.get<T>(url), successMessage);
  }, [handleRequest]);

  const post = useCallback(<T>(url: string, data?: any, successMessage?: string) => {
    return handleRequest<T>(() => apiService.post<T>(url, data), successMessage);
  }, [handleRequest]);

  const put = useCallback(<T>(url: string, data?: any, successMessage?: string) => {
    return handleRequest<T>(() => apiService.put<T>(url, data), successMessage);
  }, [handleRequest]);

  const patch = useCallback(<T>(url: string, data?: any, successMessage?: string) => {
    return handleRequest<T>(() => apiService.patch<T>(url, data), successMessage);
  }, [handleRequest]);

  const del = useCallback(<T>(url: string, successMessage?: string) => {
    return handleRequest<T>(() => apiService.delete<T>(url), successMessage);
  }, [handleRequest]);

  const uploadFile = useCallback(<T>(
    url: string, 
    file: File, 
    onProgress?: UploadProgressCallback,
    additionalData?: Record<string, any>,
    successMessage?: string
  ) => {
    return handleRequest<T>(
      () => apiService.uploadFile<T>(url, file, onProgress, additionalData), 
      successMessage
    );
  }, [handleRequest]);

  const uploadMultipleFiles = useCallback(<T>(
    url: string, 
    files: File[], 
    onProgress?: UploadProgressCallback,
    additionalData?: Record<string, any>,
    successMessage?: string
  ) => {
    return handleRequest<T>(
      () => apiService.uploadMultipleFiles<T>(url, files, onProgress, additionalData), 
      successMessage
    );
  }, [handleRequest]);

  return {
    loading,
    error,
    get,
    post,
    put,
    patch,
    delete: del,
    uploadFile,
    uploadMultipleFiles,
    apiService, // Direct access to service if needed
  };
};
