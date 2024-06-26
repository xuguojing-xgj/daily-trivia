# vue2 和 vue3 的区别

## 1. 生命周期

- vue2

  - beforeCreate
    - 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用
  - created
    - 在实例创建完成后被立即同步调用
  - beforeMount
    - 在挂载之前被调用: 相关的 `render` 函数首次被调用
  - mounted

    - 实例被挂载后调用
    - 这时 `el` 被新创建的 `vm.$el` 替换了
    - 如果根实例挂载到了一个文档内的元素上, 当 `mounted` 被调用时 `vm.$el` 也在文档内
    - 注意 `mounted` **不会** 保证所有的子组件也被挂载完成,如果你希望等到整个视图都渲染完毕再执行某些操作,可以在 `mounted` 内部使用 `vm.$nextTick:`

      ```js
        mounted: function () {
            this.$nextTick(function () {
                // 仅在整个视图都被渲染之后才会运行的代码
            })
        }
      ```

    - **该钩子在服务器端渲染期间不被调用。**

  - beforeUpdate

    - 在数据发生改变后, DOM 被更新之前被调用。
    - 这里合适在现有 DOM 将要被更新之前访问它,比如移出手动添加的事件监听器
    - **该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务器端进行。**

  - updated

    - 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
    - `updated` 与 `mounted` 一样,不会保证所有的子组件也都被重新渲染完毕,如果你希望等到整个视图都渲染完毕,可以在 `updated` 里使用 `vm.$nextTick`

    ```js
        updated: function () {
            this.$nextTick(function () {
                //  仅在整个视图都被重新渲染之后才会运行的代码
            })
        }
    ```

    - **该钩子在服务器端渲染期间不被调用。**

  - activated

    - 被 keep-alive 缓存的组件激活时调用
    - **该钩子在服务器端渲染期间不被调用。**
    - 参考
      - [构建组件 - keep-alive](https://v2.cn.vuejs.org/v2/api/#keep-alive)
      - [动态组件 - keep-alive](https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive)

  - deactivated

    - 被 keep=alive 缓存的组件失活时调用
    - **该钩子在服务器端渲染期间不被调用。**
    - 参考
      - [构建组件 - keep-alive](https://v2.cn.vuejs.org/v2/api/#keep-alive)
      - [动态组件 - keep-alive](https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive)

  - beforeDestroy

    - 实例销毁之前调用,在这一步,实例仍然完全可用
    - **该钩子在服务器端渲染期间不被调用。**

  - destroyed

    - 实例销毁后调用,该钩子被调用后,对应 Vue 实例的所有指令都被解绑,所有的事件侦听器都被移出,所有的子实例也都被销毁
    - **该钩子在服务器端渲染期间不被调用。**

  - errorCaptured

    > 2.5.0+ 新增

    - [errorCaptured](https://v2.cn.vuejs.org/v2/api/#errorCaptured)

- vue3

  - onMounted

    - 注册一个回调函数,在组件挂载之后完成执行
    - 类型

    ```ts
    function onMounted(callback: () => void): void;
    ```

    - 详细信息

      > 组件在以下情况下被视为已挂载

      - 其所有同步子组件都已经被挂载(不包含异步组件或 `<Suspense>`树内的组件)
      - 其自身的 DOM 树已经创建完成并插入了父容器中。注意仅当根容器在文档中时,才可以保证组件 DOM 树也在文档中。
      - 这个钩子通常用于执行需要访问组件所渲染的 DOM 树相关的副作用, 或是在 [服务端渲染应用](https://cn.vuejs.org/guide/scaling-up/ssr.html) 中用于确保 DOM 相关代码仅在客户端执行

      - **这个钩子在服务器端渲染期间不会被调用。**
      - 示例

        > 通过模板引用访问一个元素

        ```html
        <script setup>
          import { ref, onMounted } from "vue";

          const el = ref();

          onMounted(() => {
            el.value; // <div>
          });
        </script>

        <template>
          <div ref="el"></div>
        </template>
        ```

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

```

```
