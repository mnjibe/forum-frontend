import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:6006/api/v1',
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});