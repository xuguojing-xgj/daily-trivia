# Symbol.iterator 和 Array

<!-- [obj[Symbol.iterator]()](https://zh.javascript.info/iterable#zong-jie) -->

- 什么是 Iterable 和 array 的区别是什么
  - Iterable 就是可以被使用一些 for of 的方法 数组是 js 内置的类型本身就带方法

实现一个可迭代的对象，需要实现`Symbol.iterator`方法。

- https://zh.javascript.info/iterable#zong-jie

```js
const myIterable = {
  data: {
    num: 1,
    nume: 5,
  },
  [Symbol.iterator]() {
    const keys = Object.keys(this.data);
    console.log("keys", keys); // [ 'num', 'nume' ]
    let index = 0;
    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index++];
          console.log("key", key); // num,nume
          console.log("this.data[key]", this.data[key]); // 1,5
          return { value: this.data[key], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// 使用 for...of 循环遍历可迭代对象
for (const item of myIterable) {
  console.log(item);
}

// 输出结果：
// 1
// 5

// 使用扩展运算符将可迭代对象转换为数组
const myArray = [...myIterable];
console.log(myArray);

// 输出结果：
// [1, 5]
```

## 什么是[@@iterator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5)
