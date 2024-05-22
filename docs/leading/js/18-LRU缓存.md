# LRU 缓存

    -   LRU (Least Recently Used) 是一种常见的缓存淘汰策略
    -   核心思想是当缓存空间达到上限时, 优先淘汰最近最少被使用的缓存数据

    -   示例

```js
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // 使用 Map 存储缓存数据
  }

  get(key) {
    if (this.cache.has(key)) {
      // 如果缓存中存在该数据, 将其移到最前面
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    } else {
      return -1; // 如果缓存中不存在该数据, 返回 -1
    }
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // 如果缓存中已存在该数据, 更新其值, 并将其值移到最前面
      this.cache.delete(key);
      console.log(this.cache.size);
    } else if (this.cache.size >= this.capacity) {
      // 如果缓存已满, 删除最近最少使用的数据
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    // 将新数据插入到缓存中, 并移到最前面
    this.cache.set(key, value);
  }
}

// 使用示例
const lruCache = new LRUCache(3);
lruCache.put("a", "alpha");
lruCache.put("b", "beta");
lruCache.put("c", "gamma");

lruCache.get("a"); // 返回 "alpha" 并更新 'a' 为最近使用
lruCache.put("d", "delta"); // 移除 'b', 因为它是最久未访问的数据，并添加新项 'd'
```
