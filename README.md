# lowcode

Vue3 + Vite3 + TypeScript + Monorepo(turborepo) 打造的低代码平台

packages:

- @lowcode/core: 前端
- @lowcode/server: 后端

# Usage

由于`monorepo`的特性所致，在运行脚本的时候，最好是加上`--filter`参数指定包名

比如:

```shell
pnpm dev --filter @lowcode/core
```
