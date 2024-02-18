import axios, { type AxiosResponse } from 'axios';
import { useUserStore } from '@/store';

const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
});

service.interceptors.request.use(
  (config) => {
    const token = useUserStore().token;
    console.log('请求之前，写入token', token);
    if (token) config.headers.Authorization = `${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200) return response;

    throw new Error(response.status.toString());
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
