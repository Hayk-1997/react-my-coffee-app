import axios from 'axios';

const  axiosInstance = axios.create({
    baseURL: 'http://localhost:3100/',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
    },
});

 axiosInstance.interceptors.request.use((config) => {
     config.headers.authorization = localStorage.getItem('token');
     return config;
 });

export { axiosInstance };