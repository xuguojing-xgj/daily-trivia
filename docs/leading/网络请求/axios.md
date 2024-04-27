# axios

## 请求拦截

## 响应拦截

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
