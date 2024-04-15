# set 和 map 的区别

## set

    -   set 对象允许你储存任何类型的唯一值,无论是原始值或是对象引用,它的主要特点是集合中的值都是唯一的
    -   示例:

```js
let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(6);
mySet.add("some text");
let o = { a: 1, b: 2 };
mySet.add(o);

console.log(mySet.has(1)); // true
console.log(mySet.size); // 5

for (let item of mySet) {
  console.log(item);
}
```

## map

    -   map 对象保存键值对,任何值(对象或者原始值)都可以作为一个键或一个值, 与对象不同, 键可以是任意类型(包括函数,对象或任意基本类型)
    -   示例:

```js
let myMap = new Map();

let keyString = "a string",
  keyObject = {},
  keyFunc = () => {};

// 设置键

myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObject, "value associated with Object");
myMap.set(keyFunc, " value associated with Function");

console.log(myMap.size);

// 获取值

console.log(myMap.get(keyString));
console.log(myMap.get(keyObject));
console.log(myMap.get(keyFunc));

// 遍历 Map

for (let [key, value] of myMap) {
  console.log(` ${key} : ${value}`);
}

// 检查键是否存在

console.log(myMap.has(keyString)); // true

// 删除元素

myMap.delete(keyObject);
console.log(myMap.has(keyObject)); // false
```
