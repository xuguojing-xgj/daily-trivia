# Vite 优化方案

## 构建优化

### 1. 依赖预构建

- 使用 `vite-plugin-optimize-persist` 持久化依赖预构建结果
- 配置 `optimizeDeps.include` 手动添加需要预构建的依赖
- 合理使用 `optimizeDeps.exclude` 排除不需要预构建的依赖

```js
import OptimizationPersist from "vite-plugin-optimize-persist";

export default {
  optimizeDeps: {
    // 手动添加需要预构建的依赖
    include: ["lodash-es", "vue", "vue-router"],
    // 排除不需要预构建的依赖
    exclude: ["@vueuse/core"],
    // 新增：强制预构建这些依赖
    force: true,
    // 新增：配置 esbuild 选项
    esbuildOptions: {
      target: "esnext",
      supported: {
        "top-level-await": true,
      },
    },
    // 新增：处理 CJS 依赖
    needsInterop: ["lodash"],
  },
  plugins: [OptimizationPersist()],
};
```

### 2. 代码分割

- 使用动态导入 `import()` 实现按需加载
- 配置 `build.rollupOptions.output.manualChunks` 自定义分包策略
- 合理设置 `build.chunkSizeWarningLimit` 控制包体积

```js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 Vue 相关库打包在一起
          "vue-vendor": ["vue", "vue-router", "vuex"],
          // 将工具库打包在一起
          utils: ["lodash-es", "axios"],
        },
        // 新增：更细粒度的分包配置
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 按照 npm 包名分包
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    // 设置包体积警告阈值
    chunkSizeWarningLimit: 500,
    // 新增：实验性功能配置
    experimental: {
      renderBuiltUrl(filename) {
        return `https://cdn.example.com/${filename}`;
      },
    },
  },
};
```

### 3. 缓存优化

- 启用 `build.cache` 构建缓存
- 合理配置 `server.fs.strict` 严格文件系统访问
- 使用 `build.commonjsOptions.cache` 优化 CommonJS 转换缓存

### 4. 资源优化

- 新增资源优化章节
- 提供了更细致的资源处理策略

```js
export default {
  build: {
    // 新增：CSS 代码分割
    cssCodeSplit: true,
    // 新增：资源内联策略
    assetsInlineLimit: 4096,
    // 新增：自定义资源输出目录
    assetsDir: "static",
    // 新增：构建时移除 console 和 debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
};
```

## 开发优化

### 1. HMR 优化

- 使用 `server.hmr.overlay` 控制错误提示
- 配置 `server.watch` 优化文件监听
- 合理使用 `server.force` 控制强制依赖预构建

```js
export default {
  server: {
    hmr: {
      // 新增：HMR 连接配置
      protocol: "ws",
      host: "localhost",
      port: 24678,
      // 新增：自定义 HMR 客户端超时时间
      timeout: 30000,
      // 新增：自定义错误处理
      overlay: false,
    },
  },
};
```

### 2. 静态资源处理

- 使用 `@rollup/plugin-image` 优化图片资源
- 配置 `build.assetsInlineLimit` 控制资源内联阈值
- 使用 `vite-plugin-imagemin` 压缩图片资源

### 3. 开发服务器优化

- 配置 `server.proxy` 处理跨域请求
- 使用 `server.cors` 控制跨域策略
- 合理设置 `server.middlewareMode` 中间件模式

### 4. 预览优化

```js
export default {
  preview: {
    // 新增：预览服务器配置
    port: 8080,
    strictPort: true,
    // 新增：预览服务器代理配置
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
```

## 生产优化

### 1. 代码压缩

- 配置 `build.minify` 选择压缩器
- 使用 `vite-plugin-compression` 开启 Gzip/Brotli 压缩
- 合理使用 `build.terserOptions` 自定义压缩配置

### 2. 预加载优化

- 使用 `@vitejs/plugin-legacy` 支持旧版浏览器
- 配置 `build.modulePreload` 控制模块预加载
- 使用 `vite-plugin-preload` 自定义预加载策略

### 3. 构建产物优化

- 配置 `build.lib` 构建库模式
- 使用 `build.manifest` 生成资源清单
- 合理设置 `build.ssrManifest` 控制 SSR 清单

## 性能监控

### 1. 构建分析

- 使用 `rollup-plugin-visualizer` 可视化构建产物
- 配置 `build.reportCompressedSize` 分析压缩体积
- 使用 `vite-bundle-analyzer` 分析包体积

### 2. 性能指标

- 监控首屏加载时间
- 分析资源加载瀑布图
- 跟踪 HMR 更新性能
