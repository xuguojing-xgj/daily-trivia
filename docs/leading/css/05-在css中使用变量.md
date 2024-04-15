---
# sidebar_position: 1
---

# 在 css 中使用变量

- 自定义属性(css 变量或者级联变量)由自己定义
- 而自定义属性是区分大写小的 `--my-color` 和 `--My-color` 是两种不同的自定义属性

```css
/*基本用法*/
/*声明自定义属性，属性名需要以两个减号(--)开始*/
/*自定义属性也是写在规则集之内，规则集所指定的选择器定义自定义属性的可见作用域*/
/*通常定义在根伪类:root下*/
:root {
  /* --main-color: red;   使用 color: var(--main-color)*/
  --main-color: red;
  --test: blue;
}

element {
  /*var() 函数可以定义多个参数*/
  /*var() 函数的第一参数是自定义值，当第一个参数为定义时则第二个参数生效*/
  color: var(--main-color, skyblue);
  color: var(--main-color, --test, pink);
  color: var(--main-color, var(--test, skyblue));
}
```
