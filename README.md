项目灵感来自 [plantree](https://github.com/plantree/ruanyf-weekly)， 大部分也参考的原仓库

[项目预览](https://golangweekly.vercel.app)

#### 一. 背景

个人平时比较喜欢看技术周刊，文笔简练，条理清晰。

但也遇到了一些问题：

- 缺少一个跨端且友好的统一阅读入口

- 检索能力较欠缺

#### 二. 构建

因为技术周刊本身是开源的，因此可基于这些内容，利用现成的工具，重新构建一个静态网站，并借助CI实现部署自动化，同时对文本增加检索能力。

- 页面构建采用了VitePress

- 网站部署在Vercel

- 定时构建采用了GitHub Action

- 搜索引擎使用Algolia


#### 部署

构建命令与产物目录已写在 `vercel.json` 中，无需再在 Vercel 控制台手动覆盖：

```sh
sh scripts/main.sh && vitepress build docs   # 产物目录：docs/.vitepress/dist
```

Node.js 版本要求 26.x，已通过 `package.json` 的 `engines.node` 声明（会覆盖 Vercel 项目设置里的 Node.js Version）。

本地开发同样使用 Node 26（见 `.nvmrc`）：

```sh
nvm use            # 或 fnm use
pnpm install
pnpm run docs:dev
```





