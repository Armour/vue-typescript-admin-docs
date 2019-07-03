const sidebar = {
  'essentials': [
    '/guide/',
    '/guide/essentials/layout',
    '/guide/essentials/router-and-nav',
    '/guide/essentials/permission',
    '/guide/essentials/tags-view',
    '/guide/essentials/new-page',
    '/guide/essentials/style',
    '/guide/essentials/server',
    '/guide/essentials/mock-api',
    '/guide/essentials/import',
    '/guide/essentials/deploy',
    '/guide/essentials/env'
  ],
  'advanced': [
    '/guide/advanced/cors',
    '/guide/advanced/eslint',
    '/guide/advanced/git-hook',
    '/guide/advanced/style-guide',
    '/guide/advanced/lazy-loading',
    '/guide/advanced/chart',
    '/guide/advanced/icon',
    '/guide/advanced/theme',
    '/guide/advanced/i18n',
    '/guide/advanced/error',
    '/guide/advanced/webpack'
  ],
  'components': [
    '/features/components/clipboard',
    '/features/components/excel',
    '/features/components/markdown-editor',
    '/features/components/pagination',
    '/features/components/rich-editor',
    '/features/components/svg-icon',
    '/features/components/tree-table'
  ],
  'pages': [
    // ...
  ],
  'other': [
    // ...
  ]
}

function getSidebarByCategory(category, lang = 'en') {
  const links = JSON.parse(JSON.stringify(sidebar[category])) // Deep clone
  return links.map(link => {
    if (lang != 'en' && link.startsWith('/')) {
      return `/${lang}${link}`
    }
    return link
  })
}

module.exports = {
  getSidebarByCategory
}
