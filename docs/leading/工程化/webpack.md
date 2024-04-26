# webpack

## 模块化 cjs esm umd

- cjs commonJS

```js
cosnt app = request('./xxx')

const a = [];

module.exports = {
    a,
}
```

- esm ESModule

```js
import {} from "xxx";

export const a = [];

import xxx from "xxx";

export default xxx;
```

- umd 可以编码适配 cjs 和 esm

- main 字段一般打包的是 cjs module 一般打包的是 esm

## 打包优化

- Tree Shaking (rollup) 依赖于 esm 结构 Tree Shaking 不会处理 cjs 模块

```js
// maths.js
function sum(x, y) {
  return x + y;
}
sum(5, 5);

// TREE SHAKING 删除未引用的代码
console.log(10);
```

- TerserPlugin 压缩 js

- css-minimizer-webpack-plugin 压缩 css

- image-webpack-loader 压缩图片

## 路由拆包

- webpack + vue cli
- 魔法注释

```js
{
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */'@/pages/About/About.vue')
},
```
