# sass 和 less 的区别

## 基本概念

- sass 和 less 都是 CSS 预处理器
- 都可以扩展 CSS 语言，添加变量、混合、函数等功能
- 目的是使 CSS 更易维护、方便复用

## 运行环境不同

- sass 基于 Ruby 环境，需要在服务器端运行
- less 基于 JavaScript，可以运行在浏览器端或 Node.js 环境

## 语法差异

### 变量声明

- sass 使用 `$` 符号定义变量
  ```scss
  $primary-color: #333;
  ```
- less 使用 `@` 符号定义变量
  ```less
  @primary-color: #333;
  ```

### 嵌套语法

- 两者都支持选择器嵌套
- sass 支持属性嵌套，使用 `:`
- less 的属性嵌套较为简单

### 混合(Mixin)使用

- sass 使用 `@mixin` 定义，`@include` 引用
- less 直接使用类选择器作为 mixin，使用时直接调用类名

### 继承

- sass 使用 `@extend` 实现继承
- less 使用 `:extend` 实现继承

## 功能特点

- sass 功能更强大，支持条件语句、循环等
- less 相对简单，更容易上手
- sass 有工具库 Compass
- less 有 UI 框架 Bootstrap

## 使用场景

- sass 适合复杂大型项目
- less 适合简单快速的项目开发
