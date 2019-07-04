const { getNavbarByCategory } = require('./navbar')
const { getSidebarByCategory } = require('./sidebar')

module.exports = {
  title: 'vue-typescript-admin',
  base: '/vue-typescript-admin-docs/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  // ga: 'UA-109340118-1'
  themeConfig: {
    repo: 'armour/vue-typescript-admin-template',
    docsRepo: 'armour/vue-typescript-admin-docs',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    },
    // algolia: {
    //   apiKey: 'ffce0083d0830de5f562c045a481410b',
    //   indexName: 'vue-typescript-admin-template'
    // },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Features',
            items: getNavbarByCategory('features', 'en')
          },
          {
            text: 'Ecosystem',
            items: getNavbarByCategory('ecosystem', 'en')
          },
          {
            text: 'Donate',
            link: '/donate/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Essentials',
              children: getSidebarByCategory('essentials', 'en')
            },
            {
              title: 'Advanced',
              children: getSidebarByCategory('advanced', 'en')
            },
            {
              title: 'Other',
              children: getSidebarByCategory('other', 'en')
            }
          ],
          '/features/components/': getSidebarByCategory('components', 'en'),
          '/features/pages/': getSidebarByCategory('pages', 'en'),
          '/features/directives/': getSidebarByCategory('directives', 'en'),
          '/features/icons/': getSidebarByCategory('icons', 'en'),
          '/features/pwa/': getSidebarByCategory('pwa', 'en')
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '功能',
            items: getNavbarByCategory('features', 'zh')
          },
          {
            text: '生态系统',
            items: getNavbarByCategory('ecosystem', 'zh')
          },
          {
            text: '捐赠',
            link: '/zh/donate/'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础',
              children: getSidebarByCategory('essentials', 'zh')
            },
            {
              title: '进阶',
              children: getSidebarByCategory('advanced', 'zh')
            },
            {
              title: '其它',
              children: getSidebarByCategory('other', 'zh')
            }
          ],
          '/zh/features/components/': getSidebarByCategory('components', 'zh'),
          '/zh/features/pages/': getSidebarByCategory('pages', 'zh'),
          '/zh/features/directives/': getSidebarByCategory('directives', 'zh'),
          '/zh/features/icons/': getSidebarByCategory('icons', 'zh'),
          '/zh/features/pwa/': getSidebarByCategory('pwa', 'zh')
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US', // This will be set as the lang attribute on <html>
      description: 'A magical vue admin template based on typescript'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '一个基于 typescript 的神奇的 vue 管理平台模版'
    }
  }
}
