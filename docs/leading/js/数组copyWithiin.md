# Array.copyWithin()

- [Array.copyWithin()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

- 浅复制数组的一部分到同一数组中的另一个位置

- `copyWithin(target, start, end)`

  - target (目标位置)
  - start (起始位置)
  - end (结束位置 不包含)

```js
const a1 = ["1", "2", "3", "4", "5", "6"];

console.log(a1.copyWithin(-4, 1, 2)); // [1,2,2,4,5,6]
```
