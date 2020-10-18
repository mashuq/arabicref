const { description } = require('../../package')
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Arabic Language Reference',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Reference',
        link: '/reference/',
      }
    ],
    sidebar: [
      {
        title: 'النَحو Grammar',
        path: '/reference/nahw/',
        collapsable: true,
        children: [
          {
            title: 'الإعراب Cases',
            path: '/reference/nahw/irab',
            collapsable: false,
            children: [
              '/reference/nahw/rafa',
              '/reference/nahw/nasb',
              '/reference/nahw/jarr',
              '/reference/nahw/jazm',
            ]
          },
          {
            title: 'الكَلِمَة Word',
            path: '/reference/nahw/kalimah',
            collapsable: false,
            children: [
              '/reference/nahw/ism',
              '/reference/nahw/fil',
              '/reference/nahw/harf',
            ]
          },
          {
            title: 'الكَلام Sentence',
            path: '/reference/nahw/kalimah',
            collapsable: false,
            children: [
              '/reference/nahw/joomla_ismia',
              '/reference/nahw/joomla_filia',
            ]
          },
        ]
      },


    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}


