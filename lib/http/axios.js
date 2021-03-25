import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseURL,
  timeout: 10000, // request timeout  设置请求超时时间
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

//请求发送拦截，把数据发送给后台之前做些什么......
instance.interceptors.request.use(
  request => {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//请求返回拦截，把数据返回到页面之前做些什么...
instance.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
