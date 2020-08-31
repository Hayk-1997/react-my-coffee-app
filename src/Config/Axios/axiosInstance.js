import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = localStorage.getItem('token');

  return config;
});


// Add a response interceptor
axiosInstance.interceptors.response.use((response) => response, (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    window.location = '/login';
  }

  return Promise.reject(error);
});

export { axiosInstance };