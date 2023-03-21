import axios from 'axios';
import NProgress from 'nprogress';

const request = axios.create({
  baseURL: 'api',
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

request.interceptors.request.use(
  (res) => {
    NProgress.done();
    return res;
  },
  (err) => {
    NProgress.done();
    // message.error(err.message, 1);
    return Promise.reject(new Error('failed'));
  }
);

export default request;
