import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '我的个人网站',
  description: '使用VitePress搭建的个人网站，包含个人介绍、技术博客和开发文档',
  base: '/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { 
        text: '博客', 
        items: [
          { text: '我的第一篇博客', link: '/blog/first-post' }
        ]
      },
      { text: '文档', link: '/docs/guide/getting-started' },
      { text: 'GitHub', link: 'https://github.com/CHEN-0711', target: '_blank' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: '博客文章',
          collapsed: true,
          items: [
            { text: '我的第一篇博客', link: '/blog/first-post' }
          ]
        }
      ],
      '/docs/': [
        {
          text: '使用指南',
          collapsed: true,
          items: [
            { text: '快速开始', link: '/docs/guide/getting-started' },
            { text: '配置详解', link: '/docs/guide/configuration' }
          ]
        },
        {
          text: '参考文档',
          collapsed: true,
          items: [
            { text: 'API 参考', link: '/docs/reference/api' },
            { text: '主题配置', link: '/docs/reference/theme-config' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CHEN-0711' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: '© 2025 陈亭伊'
    }
  }
})