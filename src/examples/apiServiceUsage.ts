
// Example usage of the API service
import { apiService } from '../services/apiService';
import { useApiService } from '../hooks/useApiService';

// Direct usage examples
export const directUsageExamples = {
  // GET request
  async fetchUsers() {
    try {
      const users = await apiService.get('/users');
      console.log('Users:', users);
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },

  // POST request
  async createUser(userData: any) {
    try {
      const newUser = await apiService.post('/users', userData);
      console.log('Created user:', newUser);
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
    }
  },

  // File upload with progress
  async uploadAvatar(file: File) {
    try {
      const result = await apiService.uploadFile(
        '/upload/avatar',
        file,
        (progress) => {
          console.log(`Upload progress: ${progress.percentage}%`);
        },
        { userId: '123' }
      );
      console.log('Upload result:', result);
      return result;
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  },

  // Multiple files upload
  async uploadDocuments(files: File[]) {
    try {
      const result = await apiService.uploadMultipleFiles(
        '/upload/documents',
        files,
        (progress) => {
          console.log(`Upload progress: ${progress.percentage}%`);
        }
      );
      return result;
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  },

  // Download file
  async downloadReport() {
    try {
      await apiService.downloadFile('/reports/monthly', 'monthly-report.pdf');
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  },
};

// Hook usage example in a React component
export const HookUsageExample = () => {
  const { loading, error, get, post, uploadFile } = useApiService({
    showErrorToast: true,
    showSuccessToast: true,
  });

  const handleFetchData = async () => {
    const data = await get('/api/data', 'Data fetched successfully!');
    if (data) {
      console.log('Fetched data:', data);
    }
  };

  const handleCreateItem = async (itemData: any) => {
    const result = await post('/api/items', itemData, 'Item created successfully!');
    if (result) {
      console.log('Created item:', result);
    }
  };

  const handleFileUpload = async (file: File) => {
    const result = await uploadFile(
      '/api/upload',
      file,
      (progress) => console.log(`Progress: ${progress.percentage}%`),
      { category: 'documents' },
      'File uploaded successfully!'
    );
    if (result) {
      console.log('Upload result:', result);
    }
  };

  return {
    loading,
    error,
    handleFetchData,
    handleCreateItem,
    handleFileUpload,
  };
};
