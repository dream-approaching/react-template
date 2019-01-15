import axios from 'axios';
import history from './history';

const request = axios.create({
  baseUrl: 'https://api.github.com',
  timeout: 1000 * 10,
});

// request拦截器
request.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
request.interceptors.response.use(
  response => {
    const res = response.data;
    console.log('res:', res);
    return res;
  },
  error => {
    const res = error.response;
    console.log('error:', res);
    try {
      if (res.status === 401) {
        console.log('登入已过期');
        history.push('/login');
      }
      return error.response.data || error;
    } catch (e) {
      console.log(e);
      return {
        success: false,
        message: '访问失败',
      };
    }
  }
);

export default request;
