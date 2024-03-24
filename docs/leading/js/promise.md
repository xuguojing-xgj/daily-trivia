---
outline: deep
---

# Promise 是什么?

> ###### 概念

- [promise 是一个对象,它代表了一个异步操作的最终完成或失败。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)

> ###### Promise 的状态

- 一般来讲 Promise 有三种状态

  1. **Pending(等待)**:初始状态,既不是成功,也不是失败。
  2. **Fulfilled(成功)**:操作成功完成。
  3. **Rejected(失败)**:操作失败。

> ###### Promise 的基本用法

- 创建 Promise:

```js
let promise = new Promise(function (resolve, reject) {
  // 异步操作代码
  resolve("success");
});

promise.then((result) => {
  console.log("result is:", result); // result is : success
});
```

## Promise[@@species]

- [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* 静态访问器属性 Promise[@species]返回用于构造 Promise 方法返回值的构造函数

* 语法

```js
Promise[Symbol.species];
```

- 返回值
  get @species 被调用时的构造函数 this 的值, 返回值用于构造函数从创建新 Promise 的 Promise 链式方法的返回值

```js
// 基本实现

class Promise {
  static get [Symbol.species]() {
    return this;
  }
}
```

- 由于这种多态实现,派生子类的 @@species 默认情况下也会返回构造函数本身

```js
class SubPromise extends Promise {}

SubPromise[Symbol.species] === SubPromise; // true
```

- 默认情况下, Promise 方法将返回子类类型的 Promise

```js
class MyPromise extends Promise {
  someValue = 1;
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // 1
```

- 通过覆盖 @@species , Promise 方法将返回基本的 Promise 类型

```js
class MyPromise extends Promise {
  someValue = 1;
  static get [Symbol.species]() {
    return Promise;
  }
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // undefined
```

## 代码练习

```js
class MyPromise extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }
  // ...其他代码
}

let p = new MyPromise((resolve, reject) => {
  resolve("Hello, World!");
});

let derivedP = p.then((value) => value);

console.log(derivedP instanceof MyPromise); // false
console.log(derivedP instanceof Promise); // true
```

## Promise.all()

- 语法

```js
Promise.all(iterable);
//  iterable
//     一个可迭代对象，例如 Array 或 String
```

- Promise.all 静态方法接受一个 Promise 可迭代对象作为输入, 并返回一个 Promise


- 返回值

  - 一个 Promise 状态为 :
    - 已兑现
    - 同步兑现
    - 异步兑现

- Promise.all() 方法是 promise 并发方法之一, 它可用于聚合多个 Promise 的结果。
- 不管是 resolve 还是 reject 状态它都会执行返回

- 示例

```js
const p1 = Promise.resolve("success");
const p2 = "1";
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const p4 = Promise.reject("2");
Promise.all([p1, p2, p3, p4])
  .then((res) => {
    console.log(res); // ['success', '1', 'foo']
  })
  .catch((e) => {
    console.log(e); // 2
  });
```

## Promise.race()

##### 代码

- 静态方法接受一个 Promise 可迭代对象作为输入, 并返回一个 Promise;
- 返回第一个执行成功的 Promise 不论它的状态是 resolve 还是 reject;

```js
function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "兑现") {
        return resolve(value);
      } else {
        return reject(new Error(value));
      }
    }, time);
  });
}

const p1 = sleep(500, "一", "兑现");
const p2 = sleep(100, "二", "兑现");

Promise.race([p1, p2]).then((value) => {
  console.log(value); // “二”
  // 两个都会兑现，但 p2 更快
});
```

## Promise.any()

- 只有当所有的 Promise 都失败(reject)时才会返回一个 rejected 状态的 Promise;

- 如果想在任意一个 Promise 失败时立即返回, 可以考虑使用 Promise.race() 方法;

- Promise.race() 会返回最先完成的 Promise 无论这个结果是 resolve 还是 reject;

```js
const p1 = Promise.resolve("1");

const p2 = Promise.reject("2");

Promise.any([p1, p2]).then((val) => {
  console.log(val); // 1
});
```
