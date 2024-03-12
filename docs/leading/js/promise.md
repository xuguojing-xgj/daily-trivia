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

## Promise.all

- 基本示例

```js
let p1 = Promise.resolve("success");
let p2 = "1";
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});
```

- 语法

```js
Promise.all(iterable);
//  iterable
//     一个可迭代对象，例如 Array 或 String
```

- Promise.all 静态方法接受一个 Promise 可迭代对象作为输入, 并返回一个 Promise
