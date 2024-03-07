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
