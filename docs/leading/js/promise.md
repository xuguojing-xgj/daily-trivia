---
outline: deep
---

# Promise是什么?

> ###### 概念
+   [promise是一个对象,它代表了一个异步操作的最终完成或失败。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)

> ###### Promise的状态

+   一般来讲Promise有三种状态

    1. **Pending(等待)**:初始状态,既不是成功,也不是失败。
    2. **Fulfilled(成功)**:操作成功完成。
    3. **Rejected(失败)**:操作失败。

> ###### Promise的基本用法

+   创建 Promise:

```js

let promise = new Promise(function(resolve, reject) {
  // 异步操作代码
  resolve('success')
});

promise.then((result) => {
 console.log('result is:',result) // result is : success
})

```



