module.exports = {
  title: 'C-UI',
  description: 'CJL-UI',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://github.com/dduohereshui/vue3_component',
    footer: {
      messge: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present dduohereshui'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/components/icon', activeMatch: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [{ text: 'Icon', link: '/components/icon' }]
        }
      ]
    }
  }
};
