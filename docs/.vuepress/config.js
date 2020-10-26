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
            title: 'إعراب Cases',
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
            title: 'كَلِمَة Word',
            path: '/reference/nahw/kalimah',
            collapsable: false,
            initialOpenGroupIndex: -1,
            children: [
              {
                title: 'إسم Uber Noun',
                path: '/reference/nahw/ism',
                collapsable: true,
                children: [
                  {
                    title: 'النَّكِرَةُ أو الْمَعْرِفَةُ Indefinite / Definite',
                    collapsable: false,
                    children: [
                      '/reference/nahw/marifa',
                      '/reference/nahw/nakira',
                    ]
                  },   
                  {
                    title: 'مُذَكَّر أو مُؤَنَّث Masculine / Feminine',
                    collapsable: false,
                    children: [
                      '/reference/nahw/mudhakkar',
                      '/reference/nahw/muannas',
                    ]
                  },
                  {
                    title: 'جَمعُ أو مُثَنَّى أو مُفْرَدٌ Singular / Dual / Plural',
                    collapsable: false,
                    children: [
                      '/reference/nahw/mufrad',
                      '/reference/nahw/muthanna',
                      '/reference/nahw/jame',
                    ]
                  },                  
                ],
              }, 
              '/reference/nahw/fil',
              '/reference/nahw/harf',
            ]
          },
          {
            title: 'كَلام Sentence',
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


