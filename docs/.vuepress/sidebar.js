const sidebar = {
  'essentials': [
    '/guide/',
    '/guide/essentials/layout',
    '/guide/essentials/router-and-nav',
    '/guide/essentials/permission',
    '/guide/essentials/tags-view',
    '/guide/essentials/style',
    '/guide/essentials/mock',
    '/guide/essentials/deploy',
    '/guide/essentials/typescript',
    '/guide/essentials/env'
  ],
  'advanced': [
    '/guide/advanced/cors',
    '/guide/advanced/remove-unused-components'
  ],
  'components': [
    '/features/components/avatar-upload',
    '/features/components/back-to-top',
    '/features/components/breadcrumb',
    '/features/components/charts',
    '/features/components/draggable-kanban',
    '/features/components/draggable-list',
    '/features/components/draggable-menu',
    '/features/components/draggable-select',
    '/features/components/dropzone',
    '/features/components/error-log',
    '/features/components/github-corner',
    '/features/components/hamburger',
    '/features/components/header-search',
    '/features/components/json-editor',
    '/features/components/lang-select',
    '/features/components/markdown-editor',
    '/features/components/material-input',
    '/features/components/pagination',
    '/features/components/pan-thumb',
    '/features/components/rich-editor',
    '/features/components/right-panel',
    '/features/components/screenfull',
    '/features/components/size-select',
    '/features/components/sticky',
    '/features/components/text-hover-effect',
    '/features/components/theme-picker',
    '/features/components/upload-excel',
    '/features/components/upload-image'
  ],
  'pages': [
    // ...
  ],
  'directives': [
    '/features/directives/clipboard',
    '/features/directives/draggable-dialog',
    '/features/directives/permission',
    '/features/directives/waves'
  ],
  'icons': [
    '/features/icons/svg-icons'
  ],
  'pwa': [
    '/features/pwa/service-worker-update-popup'
  ],
  'other': [
    '/guide/other/faq'
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
