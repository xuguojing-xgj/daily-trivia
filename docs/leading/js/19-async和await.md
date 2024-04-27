# Async/Await

## 理解 Async/Await

- async await 是用来解决异步的操作的(回调地狱), 返回一个 Promise 对象
- 相比于 Generator 来说 Async 是 Generator 的语法糖

## Async 比较 Generator 的优势

1. 内置执行器

- Generator 函数的执行必须依靠执行器, 而 Async 函数自带执行器

2. 更好的语义

- async 和 await 相比较于 \* 和 yield 更加语义化

3. 更广的适用性

- yield 命令后面只能是 Thunk 函数或者 Promise 对象, 而 async 函数的 await 后面可以是 Promise 对象也可以是原始类型的值

4. 返回值

- async 函数返回的是 Promise 对象, 比 Generator 函数返回的 lterator 对象方便

## Generator 函数

- 示例

```js
function* GenFn() {
  yield "hello";
  yield "world";
  return "ending";
}
GenFn().next(); // hello

function* fetchDataGenerator() {
  try {
    // 获取第一个 API 的响应
    const response1 = yield fetch("https://api.example.com/data1");
    // 解析第一个 API 的响应数据为 JSON
    const data1 = yield response1.json();
    // 获取第二个 API 的响应
    const response2 = yield fetch("https://api.example.com/data2");
    // 解析第二个 API 的响应数据为 JSON
    const data2 = yield response2.json();

    // 返回获取的数据数组
    return [data1, data2];
  } catch (error) {
    // 捕获并处理错误
    throw new Error(error);
  }
}

function runGenerator(gen) {
  // 初始化生成器
  const generator = gen();

  // 递归执行生成器函数
  function handle(result) {
    if (result.done) {
      // 如果生成器完成，则返回解决的 Promise
      return Promise.resolve(result.value);
    }
    // 如果生成器未完成，则继续执行
    return Promise.resolve(result.value).then(
      // 处理生成器的下一个值
      (value) => handle(generator.next(value)),
      // 处理生成器的错误
      (err) => handle(generator.throw(err))
    );
  }

  try {
    // 开始执行生成器函数
    return handle(generator.next());
  } catch (ex) {
    // 捕获执行器的错误
    return Promise.reject(ex);
  }
}

// 执行生成器函数并输出结果
runGenerator(fetchDataGenerator).then((result) =>
  console.log("All data fetched:", result)
);
```
