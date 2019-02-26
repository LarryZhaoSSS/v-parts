module.exports = {
  title: 'v-parts UI',
  base: '/v-parts/',
  description: 'a great vue ui',
  themeConfig: {
    sidebar: 'auto',
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: ['/components/button',
        '/components/input',
        '/components/layout',
        '/components/gridrow',
        '/components/toast',
        '/components/popover',
        '/components/collapse'
      ]
      }
    ]
  }
  
}