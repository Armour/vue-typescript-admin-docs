# 布局

::: tip 引用
本页面部分内容来源于引用[vue-element-admin-site](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/layout.html)
:::

页面整体布局是一个产品最外层的框架结构，往往会包含导航、侧边栏、面包屑以及内容等。想要了解一个后台项目，先要了解它的基础布局。

## Layout

<img :src="$withBase('/images/layout.png')" alt="布局">

::: tip 对应代码
[@/layout](https://github.com/armour/vue-typescript-admin-template/tree/master/src/layout)
:::

`@` 是 webpack 的 [alias](https://webpack.js.org/configuration/resolve/#resolve-alias) 不懂得请自行研究

`vue-typescript-admin-template` 中大部分页面都是基于这个 `layout` 的，除了个别页面如：`login` , `404`, `401` 等页面没有使用该`layout`。如果你想在一个项目中有多种不同的`layout`也是很方便的，只要在一级路由那里选择不同的`layout`组件就行。

```js
// Without layout
{
  path: '/401',
  component: () => import('@/views/error-page/401.vue')
}

// With layout
{
  path: '/documentation',
  // 你可以选择不同的layout组件
  component: Layout,
  // 这里开始对应的路由都会显示在 app-main 中,如上图所示
  children: [{
    path: 'index',
    component: () => import('@views/documentation/index.vue'),
    name: 'documentation'
  }]
}
```

这里使用了 vue-router [路由嵌套](https://router.vuejs.org/zh/guide/essentials/nested-routes.html), 所以一般情况下，你增加或者修改页面只会影响 `app-main`这个主体区域。其它配置在 `layout` 中的内容(侧边栏或者导航栏)都是不会随着你主体页面变化而变化的。

```txt
/foo                                  /bar
+------------------+                  +-----------------+
| layout           |                  | layout          |
| +--------------+ |                  | +-------------+ |
| | foo.vue      | |  +------------>  | | bar.vue     | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

当然你也可以一个项目里面使用多个不同的 `layout`，只要在你想作用的路由父级上引用它就可以了。

## app-main

::: tip 对应代码
[@/layout/components/AppMain](https://github.com/armour/vue-typescript-admin-template/blob/master/src/layout/components/AppMain.vue)
:::

这里在 `app-main` 外部包了一层 `keep-alive` 主要是为了缓存 `<router-view>` 的，配合页面的 `tabs-view` 标签导航使用，如不需要可自行[去除](tags-view.md)。

其中`transition` 定义了页面之间切换动画，可以根据自己的需求，自行修改转场动画。相关[文档](https://cn.vuejs.org/v2/guide/transitions.html)

## router-view

**不同的 router 有时会对应着相同的 component**, 在真实的业务场景中，这种情况很多。比如：

<img :src="$withBase('/images/share-router.jpeg')" alt="共享路由">

`创建`和`编辑`的页面使用的是同一个 component，默认情况下这两个页面切换时并不会触发 vue 的 created 或者 mounted 钩子，[官方说](https://router.vuejs.org/zh/guide/advanced/data-fetching.html#%E6%95%B0%E6%8D%AE%E8%8E%B7%E5%8F%96)你可以通过 watch $route 的变化来进行处理，但说真的还是蛮麻烦的。后来发现其实可以简单的在 `router-view` 上加上一个唯一的 key，来保证路由切换时都会重新渲染触发钩子了。这样简单的多了。

```js
<router-view :key="key"></router-view>

computed: {
  key() {
    // 只要保证 key 唯一性就可以了，保证不同页面的 key 不相同
    return this.$route.path
  }
 }
```

::: tip
或者可以像本项目中 `editForm` 和 `createForm` 那样声明两个不同的 view 但引入同一个 component。

示例代码：[@/views/example](https://github.com/armour/vue-typescript-admin-template/tree/master/src/views/example)
:::

```html
<!-- create.vue -->
<template>
  <article-detail :is-edit="false" />
</template>
<script lang="ts">
import ArticleDetail from './components/ArticleDetail.vue'
</script>

<!-- edit.vue -->
<template>
  <article-detail :is-edit="true" />
</template>
<script lang="ts">
import ArticleDetail from './components/ArticleDetail.vue'
</script>
```

## 移动端

`element-ui` 官方对自己的定位是桌面端后台框架，而且对于管理后台这种重交互的项目来说是不能通过简单的适配来满足桌面端和移动端两端不同的交互，所以真要做移动版后台，建议重新做一套系统。

所以本项目也不会适配移动端，只是用`media query`做了一点简单的响应式布局，有需求请自行修改。
