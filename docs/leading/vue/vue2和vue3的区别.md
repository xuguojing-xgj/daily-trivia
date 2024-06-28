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

      ```js
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

    - 注册一个回调函数,在组件因为响应式状态变更而更新其 DOM 树之后调用
    - 类型

      ```js
          function onUpdated(callback: () => void) :void
      ```

    - 详细信息
      > 父组件的更新钩子将在其子组件的更新钩子之后调用
    - 这个钩子会在组件的任意 DOM 更新后被调用, 这些更新可能是由不同的状态变更导致的,因为多个状态变更可以在同一个渲染周期中批量执行(考虑到性能因素)。如果你需要在某个特定的状态更改后访问更新后的 DOM, 请使用 `nextTick()` 作为代替
    - **这个钩子在服务器渲染期间不会被调用**
      :::tip

      不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环！

      :::

    - 示例

      > 访问更新后的 DOM

      ```html
      <script setup>
        import { ref, onUpdated } from "vue";

        const count = ref(0);

        onUpdated(() => {
          // 文本内容应该与当前的 `count.value` 一致
          console.log(document.getElementById("count").textContent);
        });
      </script>

      <template>
        <button id="count" @click="count++">{{ count }}</button>
      </template>
      ```

  - onUnmounted

    - 注册一个回调函数,在组件实例被卸载之后调用
    - 类型

      ```js
          function onUnmounted(callback: () => void): void
      ```

    - 详细信息
      > 一个组件在以下情况下被视为已卸载
      - 其子组件都已被卸载
      - 所有相关的响应式作用(渲染作用以及 `setup()` 时创建的计算属性和侦听器)都已经停止
        > 可以在这个钩子中手动清理一些副作用,例如计时器、DOM、事件侦听器或者与服务器的连接
      - **这个钩子在服务器渲染期间不会被调用**
    - 示例

      ```html
      <script setup>
        import { onMounted, onUnmounted } from "vue";

        let intervalId;
        onMounted(() => {
          intervalId = setInterval(() => {
            // ...
          });
        });

        onUnmounted(() => clearInterval(intervalId));
      </script>
      ```

  - onBeforeMount

    - 注册一个钩子,在组件被挂载之前被调用
    - 类型

      ```js
        function onBeforeMount(callback: () => void): void
      ```

    - 详细信息

    > 当这个钩子被调用时,组件已经完成了其响应式状态的设置,但还没创建 DOM 节点, 它即将首次执行 DOM 渲染过程

    - **这个钩子在服务器渲染期间不会被调用**

  - onBeforeUpdate

    - 注册一个钩子, 在组件即将因为响应式状态变更而更新其 DOM 树之前调用
    - 类型

      ```js
        function onBeforeUpdate(callback: () => void): void
      ```

    - 详细信息
      > 这个钩子可以用来在 Vue 更新 DOM 之前访问 DOM 状态。在这个钩子中更改状态也是安全的
      - **这个钩子在服务器端渲染期间不会被调用。**

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
