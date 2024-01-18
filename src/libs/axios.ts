import axios from 'axios';
import Cookies from 'js-cookie';
import baseUrl from '@/utils/environment/base-url';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${Cookies.get('token')}`,
  },
});

api.interceptors.request.use(
  (config) => {
    if (config.headers && Cookies.get('token') !== undefined) {
      config.headers.Authorization = `Bearer ${Cookies.get('token')}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
