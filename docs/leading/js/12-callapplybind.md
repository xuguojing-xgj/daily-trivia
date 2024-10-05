# call()、apply()、bind()

## call

- call 在使用 call 方法的时候,你可以将一个对象作为第一个参数传入, 它会被作为函数运行时的 this 之后的参数将作为函数的参数传入

- 例如:

```js
 func.call(thisArg, arg1, arg2, ......)
```

## apply

- apply 的工作方式类似于 call, 但是它接受两个参数, 第一个是要绑定的 this, 第二个是一个参数数组, 参数数组中的元素将作为独立的参数传给函数

- 例如:

```js
 func.apply(thisArg, [arg1, arg2, ......])
```

## bind

- bind 也会改变函数的 this 上下文, 但和 call 与 apply 不同的是 bind 方法会创建一个新的函数,当这个新函数被调用时, bind 第一参数会作为它运行时的 this, 之后的一系列参数将会在传递实参前传入作为它的参数

- 例如:

```js
let newFunc = func.bind(thisArg, arg1, arg2, ......)
```

- 总结:
  - call 和 apply 会立即调用该函数, 改变函数的 this 指向, 并传入相应的参数
  - bind 并不会立即调用函数, 它返回了一个绑定了新 this 的新函数, 原函数的参数列表可以被预定义
