# 路由和侧边栏

::: tip 引用
本页面部分内容来源于引用[vue-element-admin-site](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/router-and-nav.html)
:::

路由和侧边栏是组织起一个后台应用的关键骨架。

本项目侧边栏和路由是绑定在一起的，所以你只要在 `@/router/index.ts` 下面配置对应的路由，侧边栏就能动态的生成了。大大减轻了手动重复编辑侧边栏的工作量。当然这样就需要在配置路由的时候遵循一些约定的规则。

## 配置项

首先我们了解一些本项目配置路由时提供了哪些配置项。

```js
// 设定路由的名字，当使用<keep-alive>时请务必填写，并且应该与引用的 component class 的 name 属性相同, 详细请看：https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
name: 'router-name'

// 当值为 noredirect 的时候该路由在面包屑导航中不可被点击
redirect: 'noredirect'

meta: {
  // 设置该路由进入的权限，支持多个权限叠加
  roles: ['admin', 'editor']

  // 设置该路由在侧边栏和面包屑中展示的名字
  title: 'title'

  // 设置该路由侧边栏的图标
  icon: 'svg-name'

  // 当设置 true 的时候该路由不会再侧边栏出现 如 401，login 等页面，或者如一些编辑页面 /edit/1, (默认 false)
  hidden: true

  // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
  // 若你想不管路由下面的 children 声明的个数，总是显示你的根路由
  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由 (默认 false)
  alwaysShow: true

  // 如果设置为 false，则不会在面包屑中显示 (默认 true)
  breadcrumb: false

  // 如果设置为 true，则不会被 <keep-alive> 缓存 (默认 false)
  noCache: true

  // 如果设置为 true, 则这个路由会被一直固定在 tags-view 的最前面 (默认 false)
  affix: true

  // 如果设置了值， 则侧边栏会高亮显示设置的值所指向的路由 (默认 空)
  activeMenu: '/example/list'
}
```

**示例：**

```js
{
  path: '/permission',
  component: Layout,
  redirect: '/permission/directive', // 重定向地址，在面包屑中点击会重定向去的地址
  meta: {
    title: 'permission',
    icon: 'lock',
    roles: ['admin', 'editor'], // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    alwaysShow: true // 一直显示根路由
  },
  children: [
    {
      path: 'page',
      component: () => import(/* webpackChunkName: "permission-page" */ '@/views/permission/page.vue'),
      name: 'PagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin']
      }
    },
    {
      path: 'directive',
      component: () => import(/* webpackChunkName: "permission-directive" */ '@/views/permission/directive.vue'),
      name: 'DirectivePermission',
      meta: {
        title: 'directivePermission'
      }
    },
    {
      path: 'role',
      component: () => import(/* webpackChunkName: "permission-role" */ '@/views/permission/role.vue'),
      name: 'RolePermission',
      meta: {
        title: 'rolePermission',
        roles: ['admin']
      }
    }
  ]
}
```

## 路由

这里的路由分为两种，`constantRoutes` 和 `asyncRoutes`。

**constantRoutes：** 不需要动态判断权限的路由，如登录页、404、等通用页面。

**asyncRoutes：** 需求动态判断权限并通过 `addRoutes` 动态添加的页面。

具体的会在 [权限验证](permission.md) 页面介绍。

::: tip 路由懒加载
这里所有的路由页面都使用 `路由懒加载` 了 ，具体介绍见[文档](/zh/guide/advanced/lazy-loading.html)

如果你想了解更多关于 browserHistory 和 hashHistory，请参看 [构建和发布](/zh/guide/essentials/deploy.html)。
:::

其它的配置和 [vue-router](https://router.vuejs.org/zh-cn/) 官方并没有区别，自行查看文档。

::: warning 注意事项
如果这里有一个需要非常注意的地方就是 `404` 页面一定要最后加载，如果放在 constantRoutes 一同声明了 `404` ，后面的所有页面都会被拦截到 `404`
:::

## 侧边栏

本项目侧边栏主要基于 `element-ui` 的 `el-menu` 改造。

前面也介绍了，侧边栏是通过读取路由并结合权限判断而动态生成的，而且还需要支持路由无限嵌套，所以这里还使用到了递归组件。

::: tip 代码地址
[@/views/layout/components/Sidebar](https://github.com/armour/vue-typescript-admin-template/tree/master/src/layout/components/Sidebar)
:::

这里同时也改造了 `element-ui` 默认侧边栏不少的样式，每个组件都可能改造或添加了自己的scss样式(之后会被webpack编译成css样式)，你也可以根据自己的需求进行修改。

**这里需要注意一下**，一般侧边栏有两种形式即：`submenu` 和 直接 `el-menu-item`。 一个是嵌套子菜单，另一个则是直接一个链接。如下图：

<img :src="$withBase('/images/sidebar-menu.png')" alt="侧边栏菜单">

在 `Sidebar` 中已经帮你做了判断，当你一个路由下面的 `children` 声明的路由大于>1 个时，自动会变成嵌套的模式。如果子路由正好等于一个就会默认将子路由作为根路由显示在侧边栏中，若不想这样，可以通过设置在根路由中设置 `alwaysShow: true` 来取消这一特性。如：

```js
// 没有 submenu, 因为 children.length===1 并且没有设置 alwaysShow
{
  path: '/icon',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import(/* webpackChunkName: "icons" */ '@/views/icons/index.vue'),
      name: 'Icons',
      meta: {
        title: 'icons',
        icon: 'icon',
        noCache: true
      }
    }
  ]
}

// 有 submenu, 因为 children.length>=1
{
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import(/* webpackChunkName: "tinymce" */ '@/views/components-demo/tinymce.vue'),
      name: 'TinymceDemo',
      meta: { title: 'tinymce' }
    },
    {
      path: 'markdown',
      component: () => import(/* webpackChunkName: "markdown" */ '@/views/components-demo/markdown.vue'),
      name: 'MarkdownDemo',
      meta: { title: 'markdown' }
    },
  ]
}
```

::: tip unique-opened
你可以在 [Sidebar/index.vue](https://github.com/armour/vue-typescript-admin-template/blob/master/src/layout/components/Sidebar/index.vue) 中设置 `unique-opened` 来控制侧边栏，是否只保持一个子菜单的展开。
:::

## 多级目录(嵌套路由)

如果你的路由是多级目录，如本项目 [@/views/nested](https://github.com/armour/vue-typescript-admin-template/tree/master/src/views/nested) 那样， 有三级路由嵌套的情况下，不要忘记还要手动在二级目录的根文件下添加一个 `<router-view>`。

如：[@/views/nested/menu1/index.vue](https://github.com/armour/vue-typescript-admin-template/blob/master/src/views/nested/menu1/index.vue)，原则上有多少级路由嵌套就需要多少个 `<router-view>`。

## 点击侧边栏 刷新当前路由

在用 spa(单页面应用) 这种开发模式的之前，用户每次点击侧边栏都会重新请求这个页面，用户渐渐养成了点击侧边栏当前路由来刷新 view 的习惯。但现在 spa 就不一样了，用户点击当前高亮的路由并不会刷新 view，因为 vue-router 会拦截你的路由，它判断你的 url 并没有任何变化，所以它不会触发任何钩子或者是 view 的变化。[issue](https://github.com/vuejs/vue-router/issues/296) 地址，社区也对该问题展开了激烈讨论。

<img :src="$withBase('/images/evenyou.png')" alt="尤大大">

尤大本来也说要增加一个方法来强刷 view，但后来他又改变了心意/(ㄒ o ㄒ)/~~。但需求就摆在这里，我们该怎么办呢？他说了不改变 current URL 就不会触发任何东西，那我可不可以强行触发你的 hook 呢？上有政策， 下有对策我们变着花来 hack。方法也很简单，通过不断改变 url 的 query 来触发 view 的变化。我们监听侧边栏每个 link 的 click 事件，每次点击都给 router push 一个不一样的 query 来确保会重新刷新 view。

```js
clickLink(path) {
  this.$router.push({
    path,
    query: {
      t: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
    }
  })
}
```

ps:不要忘了在 `router-view` 加上一个特定唯一的 `key`，如 `<router-view :key="$route.path" />`，
但这也有一个弊端就是 url 后面有一个很难看的 `query` 后缀如 `xxx.com/article/list?t=1496832345025`

你可以从前面的 issue 中知道还有很多其它方案。原js版本作者Panjiachen在公司项目中采取的方案是判断当前点击的菜单路由和当前的路由是否一致，当一致的时候，会先跳转到一个专门 Redirect 的页面，然后会将路由重定向到想去的页面，这样就起到了刷新的效果。

**相关例子**

<img :src="$withBase('/images/resize-text.jpg')" alt="改变字体大小">

点击图片所示的全局 size 大小切换按钮，你会发现页面 `app-main` 区域进行了刷新。它就是运用了重定向到 `Redirect` 页面之后再重定向回原始页面的方法。

点击的时候重定向页面至 `/redirect`

```js
const { fullPath } = this.$route

this.$nextTick(() => {
  this.$router.replace({
    path: '/redirect' + fullPath
  })
})
```

`redirect` 页面再重定向回原始页面

```js
created() {
  const { params, query } = this.$route
  const { path } = params
  this.$router.replace({ path: '/' + path, query })
}

render() {
  // Avoid warning for missing template
}
```

::: tip 代码地址
[@/views/redirect/index.vue](https://github.com/armour/vue-typescript-admin-template/blob/master/src/views/redirect/index.vue)
:::

## 面包屑

本项目中也封装了一个面包屑导航，它也是通过 `watch $route` 变化动态生成的。它和 menu 也一样，也可以通过之前那些配置项控制一些路由在面包屑中的展现。大家也可以结合自己的业务需求增改这些自定义属性。比如可以在路由中声明`breadcrumb:false`，让其不在 breadcrumb 面包屑显示。

<img :src="$withBase('/images/breadcrumb.gif')" alt="面包屑">

::: tip 代码地址
[@/components/Breadcrumb/index.vue](https://github.com/armour/vue-typescript-admin-template/blob/master/src/components/Breadcrumb/index.vue)
:::

## 侧边栏滚动问题

之前版本的滚动都是用 css 来做处理的

```css
overflow-y: scroll;

::-webkit-scrollbar {
  display: none;
}
```

首先这样写会有兼容性问题，在火狐或者其它低版本浏览器中都会比较不美观。其次在侧边栏收起的情况下，受限于 `element-ui` 的 `menu` 组件的实现方式，不能使用该方式来处理。

所以现版本中使用了 `el-scrollbar` 来处理侧边栏滚动问题。

::: tip 代码地址
[@/components/Sidebar/index.vue](https://github.com/armour/vue-typescript-admin-template/blob/master/src/layout/components/Sidebar/index.vue)
:::

## 侧边栏 外链

你也可以在侧边栏中配置一个外链，只要你在 `path` 中填写了合法的 url 路径，当你点击侧边栏的时候就会帮你新开这个页面。

例如：

```js
{
  path: 'external-link',
  component: Layout,
  children: [
    {
      path: 'https://github.com/Armour/vue-typescript-admin-template',
      meta: {
        title: 'externalLink',
        icon: 'link'
      }
    }
  ]
}
```
