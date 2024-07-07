import axios, { type AxiosResponse } from 'axios';

// 创建 axios 实例
const myAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// 响应拦截器
myAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: any) => {
    throw new Error(error);
  },
);

// 导出 axios 实例
export default myAxios;
