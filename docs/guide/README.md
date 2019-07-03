# Introduction

[![Vue](https://img.shields.io/badge/vue-2.6.10-brightgreen.svg)](https://github.com/vuejs/vue)
[![Element-ui](https://img.shields.io/badge/element--ui-2.8.2-brightgreen.svg)](https://github.com/ElemeFE/element)
[![Build Status](https://circleci.com/gh/Armour/vue-typescript-admin-template/tree/master.svg?style=shield)](https://circleci.com/gh/Armour/vue-typescript-admin-template/tree/master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Template from jarvis](https://img.shields.io/badge/Hi-Jarvis-ff69b4.svg)](https://github.com/Armour/Jarvis)
[![Donate](https://img.shields.io/badge/%24-donate-ff69b4.svg)](https://armour.github.io/vue-typescript-admin-docs/donate)
[![GitHub stars](https://img.shields.io/github/stars/armour/vue-typescript-admin-template.svg?style=social&label=Stars)](https://github.com/armour/vue-typescript-admin-template)

[vue-typescript-admin-template](http://armour.github.io/vue-typescript-admin-template) is a production-ready front-end solution for admin interfaces which based on [vue](https://github.com/vuejs/vue), [typescript](https://www.typescriptlang.org/) and UI Toolkit [element-ui](https://github.com/ElemeFE/element). The original Javascript version code [vue-element-admin](http://armour.github.io/vue-typescript-admin-template) was written by [PanJiaChen](https://github.com/PanJiaChen), many thanks to him for the awesome open source project! :)

This project is based on the newest development stack of vue, it has built-in i18n solution, dynamic routes, permission authentication, typical templates for enterprise applications, and many awesome features. It can help you to quickly build a production-ready admin panel and I believe you will find this project really helpful.

:::tip
This project integrates many features that you may not need in your own project. To remove some components that you don't need, check out [remove unused components](https://armour.github.io/vue-typescript-admin-docs/guide/remove-unused-components) page, or you can use the basic template that under [minimal](https://github.com/Armour/vue-typescript-admin-template/tree/minimal) branch.

Related projects:
- Javascript integration example: [vue-element-admin](https://github.com/armour/vue-typescript-admin-template) (Credits: [PanJiaChen](https://github.com/PanJiaChen))
- Javascript basic template: [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) (Credits: [PanJiaChen](https://github.com/PanJiaChen))
:::

## Features

```txt
- Login / Logout

- Permission Authentication
  - Page permission
  - Directive permission
  - Permission configuration page
  - Two-step login

- Multi-environment build
  - Dev / Stage / Prod

- Global Features
  - I18n
  - Dynamic themes
  - Dynamic sidebar (supports multi-level routing)
  - Dynamic breadcrumb
  - Tags-view (supports right-click operation)
  - Clipboard
  - Svg icons
  - Search
  - Screenfull
  - Settings
  - Mock data / Mock server
  - PWA support

- Components
  - Editors
    - Rich Text Editor
    - Markdown Editor
    - JSON Editor
  - Avatar Upload
  - Back To Top
  - CountTo
  - Dropzone
  - Draggable Dialog
  - Draggable Kanban
  - Draggable List
  - Draggable Select
  - ECharts
  - Mixin
  - SplitPane
  - Sticky

- Table
  - Dynamic Table
  - Draggable Table
  - Inline Edit Table
  - Complex Table

- Excel
  - Export Excel
  - Upload Excel
  - Excel Visualization

- Zip
  - Export zip

- PDF
  - Download pdf

- Dashboard
- Guide Page
- Advanced Example Page
- Error Log
- Error Page
  - 401
  - 404
```

## Preparation

You need to install [node](http://nodejs.org/) and [git](https://git-scm.com/) locally. The project is based on [typescript](https://www.typescriptlang.org/), [vue](https://vuejs.org/index.html), [vuex](https://vuex.vuejs.org), [vue-router](https://router.vuejs.org), [vue-cli](https://github.com/vuejs/vue-cli) , [axios](https://github.com/axios/axios) and [element-ui](https://github.com/ElemeFE/element), all request data is simulated using [faker.js](https://github.com/Marak/Faker.js).
Understanding and learning these knowledge in advance will greatly help you on using this project.

::: tip
This project does not support low-level browsers (such as ie). If you need to, please add polyfills yourself.
:::

## Project Structure

```bash
├── mock/                      # mock server & mock data
├── public                     # public static assets (directly copied)
│   │── favicon.ico            # favicon
│   │── manifest.json          # PWA config file
│   └── index.html             # index.html template
├── src                        # main source code
│   ├── api                    # api service
│   ├── assets                 # module assets like fonts, images (processed by webpack)
│   ├── components             # global components
│   ├── directives             # global directives
│   ├── filters                # global filter
│   ├── icons                  # svg icons
│   ├── lang                   # i18n language
│   ├── layout                 # global layout
│   ├── pwa                    # PWA service worker related files
│   ├── router                 # router
│   ├── store                  # store
│   ├── styles                 # global css
│   ├── utils                  # global utils
│   ├── views                  # views
│   ├── App.vue                # main app component
│   ├── main.ts                # app entry file
│   ├── permission.ts          # permission authentication
│   ├── settings.ts            # setting file
│   └── shims.d.ts             # type definition shims
├── tests/                     # tests
├── .circleci/                 # automated CI configuration
├── .browserslistrc            # browserslist config file (to support Autoprefixer)
├── .editorconfig              # editor code format consistency config
├── .env.xxx                   # env variable configuration
├── .eslintrc.js               # eslint config
├── babel.config.js            # babel config
├── cypress.json               # e2e test config
├── jest.config.js             # jest unit test config
├── package.json               # package.json
├── postcss.config.js          # postcss config
├── tsconfig.json              # typescript config
└── vue.config.js              # vue-cli config
```

::: tip
Most of the project structure are based on [vue-cli 3](https://cli.vuejs.org/).
:::

## Getting Started

```bash
# clone the project
git clone https://github.com/armour/vue-typescript-admin-template.git

# enter the project directory
cd vue-typescript-admin-template

# install dependency
yarn # Or npm install

# development
yarn serve # OR npm run serve
```

This will automatically open [http://localhost:9527](http://localhost:9527).

If you see the following page then you have succeeded.

<img :src="$withBase('/images/dashboard.png')" alt="dashboard">

We have built-in models, standard components, mock data, hot module reloading, state management, i18n, global directives, filters and router, etc. You can continue exploring other documents for more details on these topics.

::: tip
You can use `master` branch as a toolbox or as an integration solution. It is recommended to do secondary development on the basis of `minimal` branch, if you need any additional feature, you can copy it from `master` branch.
:::

## Contribution

The source code of this documentation is on Github [vue-typescript-admin-docs](https://github.com/armour/vue-typescript-admin-docs) which based on [vuepress](https://github.com/vuejs/vuepress). There may be some spelling or translation errors in this document, feel free to point it out by issue or pull request.

## Donate

If you find this project useful, you can [buy me a glass of juice]((/donate/)). :heart:

## Browsers Support

Modern browsers and Internet Explorer 10+.

<!-- prettier-ignore -->
| [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## Vue Ecosystem

**Understanding things below will help you know better about this project.**

1. [Vue Router](https://router.vuejs.org/) Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.

2. [Vuex](https://vuex.vuejs.org/) Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

3. [Vue Loader](https://vue-loader.vuejs.org) Vue-loader is a loader for webpack that allows you to author Vue components in a format called Single-File Components (SFCs). The combination of webpack and vue-loader gives you a modern, flexible and extremely powerful front-end workflow for authoring Vue.js applications.

4. [Vue Test Utils](https://vue-test-utils.vuejs.org/) Vue Test Utils is the official unit testing utility library for Vue.js.

5. [Vue Dev-Tools](https://github.com/vuejs/vue-devtools) Browser devtools extension for debugging Vue.js applications.

6. [Vue CLI](https://cli.vuejs.org/) Vue CLI is a full system for rapid Vue.js development. It aims to be the standard tooling baseline for the Vue ecosystem. It ensures the various build tools work smoothly together with sensible defaults so you can focus on writing your app instead of spending days wrangling with configurations.

7. [Vetur](https://github.com/vuejs/vetur) Vue tooling for VS Code. Write vue essential plugins under VS Code.
