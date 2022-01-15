import axios from "axios";
import router from "@/router";
const request = axios.create({
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 1000 * 60,
  withCredentials: true,
});

request.interceptors.request.use((config) => {
  if (config.method.toLowerCase() === "post") {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data; charset=UTF-8";
    }
  }
  return config;
});
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data.code === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          new Error("请求错误");
          break;
        case 401:
          router.push("/login");
          break;
      }
    }
    return Promise.resolve(error.response);
  }
);

export default request;
