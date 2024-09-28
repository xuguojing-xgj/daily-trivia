# axios

## 请求拦截

```js
// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    console.log("请求被拦截:", config);
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);
```

## 响应拦截

```js
// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    console.log("响应被拦截:", response);
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);
```

## 取消一个 Axios 请求

```js
import axios from "axios";

// 创建一个 CancelToken 源
const source = axios.CancelToken.source();

// 发起一个 GET 请求
const fetchUserData = axios
  .get("https://api.example.com/user", {
    cancelToken: source.token,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      // 处理其他错误
      console.log("Error:", error.message);
    }
  });

// 在需要的时候取消请求
source.cancel("Operation canceled by the user.");
```
