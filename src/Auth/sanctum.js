import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
    withCredentials: true,
});

export const csrfToken = () => {
    return apiClient.get('/sanctum/csrf-cookie');
};

export default apiClient;