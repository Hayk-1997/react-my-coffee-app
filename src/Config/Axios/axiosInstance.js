import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3100/',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token') || '',
    },
});