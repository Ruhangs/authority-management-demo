import axios from 'axios'

import { ElMessage } from "element-plus";

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

//请求拦截器
request.interceptors.request.use(config => {
  //config配置对象中的headers属性请求头，经常给服务器端携带公共参数
  //返回配置对象
  return config;
});

//响应拦截器
request.interceptors.response.use((response) => {
  //成功回调
  //简化数据
  return response.data;
}, (error) => {
  //失败回调，处理http网络错误
  let msg = '';
  let status = error.response.status;
  switch (status) {
    case 401:
      msg = "token过期";
      break;
    case 403:
      msg = '无权访问';
      break;
    case 404:
      msg = "请求地址错误";
      break;
    case 500:
      msg = "服务器出现问题";
      break;
    default:
      msg = "无网络";
  }
  ElMessage({
    type: 'error',
    message: msg
  })
  return Promise.reject(error);
});

export default request