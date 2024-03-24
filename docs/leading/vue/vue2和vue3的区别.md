# vue2 和 vue3 的区别

## 1. 生命周期

- vue2
  - beforeCreate
  - created
  - beforeMount
  - mounted
  - beforeUpdate
  - updated
  - activated
  - deactivated
  - beforeDestroy
  - destroyed
  - errorCaptured
- vue3
  - onMounted
  - onUpdated
  - onUnmounted
  - onBeforeMount
  - onBeforeUpdate
  - onBeforeUnmount
  - onErrorCaptured
  - onRenderTracked
  - onRenderTriggered
  - onActivated
  - onDeactivated
  - onServerPrefetch

## 2. 响应式数据

- 重写了 Object.defineProperty() 和 Proxy 两种方式

## 3. 组件化开发

- vue3 composition API 函数式编程 vue2 options 选项式编程

## 4. 虚拟 DOM

- vue2 diff 算法基于双端比较

## 5. 组件通信

- vue2 是 emit 和 props

- vue3 是 defineEmits 和 defineProps

<!-- ## 6. 状态管理 -->

<!-- ## 7. 路由 -->

<!-- ## 8. 打包工具 -->

<!-- ## 9. 性能优化 -->

<!-- ## 10. 兼容性 -->
