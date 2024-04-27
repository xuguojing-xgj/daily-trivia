---
description: Create a doc page with rich content.
---

# Proxy 和 defineProperty 的区别

兼容性

- `Object.defineProperty`在 ES5 中就已经被引入，所以它有更好的浏览器兼容性。Proxy 是 ES6 加入的新功能，老版的浏览器可能没有实现。

- `Object.defineProperty`只能劫持对象的属性，而 Proxy 可以劫持整个对象。

- `Object.defineProperty`方法中，不能直接定义新增的属性，否则会报错。Proxy 对象定义的属性，都是动态的，可以任意定义。

能力

- `Proxy`比`Object.defineProperty`更强大。`Proxy`有 13 种拦截方法，包括 get、set、has、delete、apply、construct 等，所以它能拦截更多操作。而`Object.defineProperty`只能劫持到对象属性的读取和设置行为。

### defineProperty

- 属性描述符
  - 数据描述符
    - value
    - writable
  - 访问器描述符
    - get
    - set

```js
let obj = {
  a: 1,
  b: 2,
  c: {
    a: 3,
    b: 4,
  },
};

// 判断一个东西是不是对象
function _isObject(v) {
  return typeof v === "object" && v !== "null";
}

// 深度遍历 (观察)
function observe(obj) {
  for (const k in obj) {
    // 如果这个属性的值 仍然是一个对象
    let v = obj[k];

    if (_isObject(v)) {
      observe(v);
    }
    // defineproperty 截取 更改 针对属性的侦听
    Object.defineProperty(obj, k, {
      get() {
        console.log("k 读取", v);
        return v;
      },
      set(val) {
        if (v !== val) {
          console.log("k 更改", val);
          v = val;
        }
      },
    });
  }
}

observe(obj);
```

### Proxy

- Proxy 对象用于创建一个对象的代理, 实现基本操作的拦截和自定义(查找、赋值、枚举、函数调用等)

  - handler
    - 包含捕捉器(trap)的占位符对象, 可译为处理器对象
  - traps
    - 提供属性访问的方法
  - target
    - 被 Proxy 代理虚拟化的对象

- 方法
  - Proxy.revocable()
  - 可撤销一个代理对象

```js
Proxy.revocable(target, handler);
```

```js
// Proxy 观察

function obServe(obj) {
  const proxy = new Proxy(obj, {
    get(terget, k) {
      let v = terget[k];
      // 如果一个属性的值是一个对象
      if (_isObject(v)) {
        v = obServe(v);
      }
      console.log("读取", k, v);
      return v;
    },
    set(terget, k, val) {
      if (terget[k] !== val) {
        terget[k] = val;
        console.log("更改", k, terget[k]);
      }
    },

    // deleteProperty() 删除属性
  });
  return proxy;
}

const proxy = obServe(obj);
```
