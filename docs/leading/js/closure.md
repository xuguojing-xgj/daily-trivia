---
outline: deep
---

# 闭包

> #### 定义

- 允许访问另一个函数中的变量

```js

function foo() {
  let i = 1;
  return function run() {
    return i++;
  };
}

let a = foo();

console.log(a() == 1 && a() == 2 && a() == 3); // true

```

> #### 使用场景

- 创建私有变量
- 延长变量的生命周期

> ###### 模块化代码

```js

let myModule = (function () {
  let private = "我是私有变量...";
  return {
    publicMethod: function () {
      console.log("访问私有变量: " + private);
    },
  };
})();

myModule.publicMethod(); // 输出 '访问私有变量: 我是私有变量...'

```

> ###### 封装函数和私有化变量

```js

function encapsulation() {
  let privateVariable = "我是一个变量...";
  return {
    privateOne: function () {
      privateVariable += "1";
    },
    privateTwo: function () {
      return privateVariable;
    },
  };
}

const myEncapsulation = encapsulation();
myEncapsulation.privateOne();
console.log(myEncapsulation.privateTwo()); // 我是一个变量...1

```

> ###### 回调函数和异步编程

```js

function asyncRequest(callback) {
  // 模拟异步操作
  setTimeout(() => {
    callback("result");
  }, 1500);
}

function logResult() {
  let result = "Waiting...";
  asyncRequest((response) => {
    result = response;
    console.log(result); // 即使在异步完成后也能访问到 'result'
  });
}
logResult();

```

> ###### 函数工厂

```js

function makeAdder(x) {
  return (y) => {
    return x + y;
  };
}

let add = makeAdder(5);
console.log(add(2)); // 输出 7

```

> ###### 事件处理器和回调

```html
 <button type="button" id="myButton" >按钮</button>
```

```js

function setupButton(buttonId, onClick) {
  let button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    onClick(buttonId);
  });
}

setupButton("myButton", function (id) {
  console.log("Button clicked:", id);
});

```
