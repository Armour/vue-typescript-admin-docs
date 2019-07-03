# 介绍

[![Vue](https://img.shields.io/badge/vue-2.6.10-brightgreen.svg)](https://github.com/vuejs/vue)
[![Element-ui](https://img.shields.io/badge/element--ui-2.8.2-brightgreen.svg)](https://github.com/ElemeFE/element)
[![Build Status](https://circleci.com/gh/Armour/vue-typescript-admin-template/tree/master.svg?style=shield)](https://circleci.com/gh/Armour/vue-typescript-admin-template/tree/master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Template from jarvis](https://img.shields.io/badge/Hi-Jarvis-ff69b4.svg)](https://github.com/Armour/Jarvis)
[![Donate](https://img.shields.io/badge/%24-donate-ff69b4.svg)](https://armour.github.io/vue-typescript-admin-docs/zh/donate)
[![GitHub stars](https://img.shields.io/github/stars/armour/vue-typescript-admin-template.svg?style=social&label=Stars)](https://github.com/armour/vue-typescript-admin-template)

[vue-typescript-admin-template](http://armour.github.io/vue-typescript-admin-template) 是一个后台前端解决方案，它基于 [vue](https://github.com/vuejs/vue), [typescript](https://www.typescriptlang.org/) 和 [element-ui](https://github.com/ElemeFE/element)实现。原始的 Javscript 版本的代码是由 [PanJiaChen](https://github.com/PanJiaChen) 开发维护的 [vue-element-admin](http://armour.github.io/vue-typescript-admin-template)， 十分感谢大佬对开源社区做出的贡献 :)

本项目使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

:::tip 建议
本项目的默认分支 `master` 定位是后台集成方案，不太适合当基础模板来进行二次开发。因为本项目集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你想移除不需要的组件，可以参考[移除未用组件](https://armour.github.io/vue-typescript-admin-docs/guide/zh/remove-unused-components)页面, 或者你可以使用位于 `minimal` 分支的简易基础模版。

相关项目:
- Javascript 集成样例: [vue-element-admin](https://github.com/armour/vue-typescript-admin-template) (鸣谢: [PanJiaChen](https://github.com/PanJiaChen))
- Javascript 基础摸板: [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) (鸣谢: [PanJiaChen](https://github.com/PanJiaChen))
  :::

## 功能

```txt
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - Dev / Stage / Prod

- 全局功能
  - 国际化多语言
  - 动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(支持右键操作)
  - 粘贴板
  - Svg 图标
  - 搜索
  - 全屏
  - 设置
  - Mock 数据 / Mock 服务器
  - 支持 PWA

- 组件
  - 编辑器
    - 富文本编辑器
    - Markdown 编辑器
    - JSON 编辑器
  - 头像上传
  - 返回顶部
  - CountTo
  - 拖放区
  - 拖拽弹窗
  - 拖拽看板
  - 拖拽列表
  - 拖拽选择
  - ECharts 图表
  - Mixin
  - 拆分窗格
  - 黏性组件

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑表格
  - 复杂表格

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel

- Zip
  - 导出zip

- PDF
  - 下载 pdf

- 控制台
- 引导页
- 综合实例
- 错误日志
- 错误页面
  - 401
  - 404
```

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [typescript](https://www.typescriptlang.org/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用[faker.js](https://github.com/Marak/Faker.js)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

::: tip 建议
本项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill。
:::

## 目录结构

本项目已经为你生成了一个完整的开发框架，提供了涵盖后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── mock                       # mock 服务器 与 模拟数据
├── public                     # 静态资源 (会被直接复制)
│   │── favicon.ico            # favicon图标
│   │── manifest.json          # PWA 配置文件
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源 (由 webpack 处理加载)
│   ├── components             # 全局组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局过滤函数
│   ├── icons                  # svg 图标
│   ├── lang                   # 国际化
│   ├── layout                 # 全局布局
│   ├── pwa                    # PWA service worker 相关的文件
│   ├── router                 # 路由
│   ├── store                  # 全局 vuex store
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局方法
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   ├── permission.ts          # 权限管理
│   ├── settings.ts            # 设置文件
│   └── shims.d.ts             # 模块注入
├── tests                      # 测试
├── .circleci/                 # 自动化 CI 配置
├── .browserslistrc            # browserslistrc 配置文件 (用于支持 Autoprefixer)
├── .editorconfig              # 编辑相关配置
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置
├── babel.config.js            # babel-loader 配置
├── cypress.json               # e2e 测试配置
├── jest.config.js             # jest 单元测试配置
├── package.json               # package.json 依赖
├── postcss.config.js          # postcss 配置
├── tsconfig.json              # typescript 配置
└── vue.config.js              # vue-cli 配置
```

::: tip 提示
大部分结构是由最新版本脚手架 [vue-cli 3](https://cli.vuejs.org/) 自动生成的。
:::

## 着手使用

```bash
# 克隆项目
git clone https://github.com/armour/vue-typescript-admin-template.git

# 进入项目目录
cd vue-typescript-admin-template

# 安装依赖
yarn # 或者 npm install

# 本地开发 启动项目
yarn serve # 或者 npm run serve
```

启动完成后会自动打开浏览器访问 [http://localhost:9527](http://localhost:9527)，如果你看到下面的页面就代表操作成功了。

<img :src="$withBase('/images/dashboard.png')" alt="主界面">

接下来你可以修改代码进行业务开发了，本项目内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、国际化、全局指令、全局过滤、全局路由等等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。

::: tip 建议
你可以使用 `master` 分支的代码当做工具箱或者集成方案. 推荐在 `minimal` 分支的代码的基础上进行二次开发，想要什么功能或者组件就去 `master` 分支那里复制过来。
:::

## 参与开发

本文档项目地址 [vue-typescript-admin-docs](https://github.com/armour/vue-typescript-admin-docs) 基于 [vuepress](https://github.com/vuejs/vuepress) 开发。有任何修改和建议都欢迎通过该项目 issue 或者 pull request 支持。

## 捐赠

如果你觉得这个项目帮助到了你，你可以帮作者[买一杯果汁](/zh/donate/)表示鼓励。 :heart:

## 浏览器支持

现代浏览器和 IE 10+

<!-- prettier-ignore -->
| [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## 讨论群

欢迎加入[微信群](https://github.com/Armour/vue-typescript-admin-template/issues/62)参与相关讨论或者提问。

## Vue 生态圈

**首先了解这些 vue 生态圈的东西，会对你上手本项目有很大的帮助。**

1. [Vue Router](https://router.vuejs.org/) 是 vue 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。

2. [Vuex](https://vuex.vuejs.org/) 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。它能解决你很多全局状态或者组件之间通信的问题。

3. [Vue Loader](https://vue-loader.vuejs.org) 是为 vue 文件定制的一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。它能在开发过程中使用热重载来保持状态，为每个组件模拟出 scoped CSS 等等功能。不过大部分情况下你不需要对它直接进行配置，脚手架都帮你封装好了。

4. [Vue Test Utils](https://vue-test-utils.vuejs.org/) 是官方提供的一个单元测试工具。它能让你更方便的写单元测试。

5. [Vue Dev-Tools](https://github.com/vuejs/vue-devtools) Vue 在浏览器下的调试工具。写 vue 必备的一个浏览器插件，能大大的提高你调试的效率。

6. [Vue CLI](https://cli.vuejs.org/) 是官方提供的一个 vue 项目脚手架，本项目也是基于它进行构建的。它帮你分装了大量的 webpack、babel 等其它配置，让你能花更少的精力在搭建环境上，从而能更专注于页面代码的编写。不过所有的脚手架都是针对大部分情况的，所以一些特殊的需求还是需要自己进行配置。建议先阅读一遍它的文档，对一些配置有一些基本的了解。

7. [Vetur](https://github.com/vuejs/vetur) 是 VS Code 的插件. 如果你使用 VS Code 来写 vue 的话，这个插件是必不可少的。
