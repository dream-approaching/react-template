import axios from 'axios';
import { store } from '@redux/store';
import actions from '@redux/global/actions';
import history from './history';

const request = axios.create({
  baseUrl: 'https://api.github.com',
  timeout: 1000 * 10,
});

const setGlobalLoading = async bool => {
  await store.dispatch({
    type: actions.SET_GLOBAL_LOADING,
    payload: bool,
  });
};

// request拦截器
request.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    setGlobalLoading(true);
    console.log('request store.getState():', store.getState());
    return config;
  },
  error => {
    // Do something with request error
    setGlobalLoading(false);
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
request.interceptors.response.use(
  response => {
    const res = response.data;
    console.log('res:', res);
    setGlobalLoading(false);
    return res;
  },
  error => {
    const res = error.response;
    setGlobalLoading(false);
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
