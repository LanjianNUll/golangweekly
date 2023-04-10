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

登录Vercel 官网， build 命令,覆盖默认的

```sh
sh scripts/main.sh && vitepress build docs

```





