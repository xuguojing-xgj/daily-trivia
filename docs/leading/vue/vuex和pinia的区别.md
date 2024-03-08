# vuex 和 pinia 的区别, 为什么使用 pinia?

## 1. vuex 和 pinia 的区别

- pinia 和 vuex, 都用于管理全局的状态

区别:

- vuex 的核心概念为 state, action, mutation, getters, modules;

  - mutation 必须是处理同步数据, action 处理异步数据, 相对于 pinia 来说 vuex 的结构相对复杂;

- pinia 的核心概念为 定义(stores)为一个函数 state, actions, getters;

  - 对于 pinia 来说可以更好的支持 typescript, 并且 pinia 支持持久化存储;
  - 并且 pinia 是一个轻量级的管理状态库打包体积更小 结构简介 API 更直观;

