---
description: Create a doc page with rich content.
---

# Proxy 和 defineProperty 的区别

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
