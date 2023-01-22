/*
 * @Date: 2022-12-31 14:51:13
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-22 19:52:26
 * @FilePath: /nuxt-theme-liting/.playground/app.config.ts
 */
export default defineAppConfig({
  theme: {
    title: 'Nuxt Theme Liting',
    description: 'a theme about nuxt',
    search: false,
    nav: {
      timeline: true,
      tag: true,
      extra: true,
      icon: {
        skin: true,
        github: {
          disabled: false,
          url: 'https://github.com/liting-yes/nuxt-theme-liting.git',
        },
      },
    },
    sidebar: {
      '/': [
        {
          text: 'start',
          items: [
            {
              text: 'instroduction',
              path: '/start/instro',
            },
            {
              text: 'config',
              path: '/start/config',
            },
            {
              text: 'edit',
              path: '/start/md',
            },
            {
              text: 'git',
              path: '/start/git',
            },
            {
              text: 'deploy',
              path: '/start/deploy',
            },
          ],
        },
      ],
      '/zh-cn/': [
        {
          text: '开始',
          items: [
            {
              text: '主题介绍',
              path: '/zh-cn/start/instro',
            },
            {
              text: '主题配置',
              path: '/zh-cn/start/config',
            },
            {
              text: '文本编辑',
              path: '/zh-cn/start/md',
            },
            {
              text: 'Git使用指南',
              path: '/zh-cn/start/git',
            },
            {
              text: '站点部署指南',
              path: '/zh-cn/start/deploy',
            },
          ],
        },
      ],
    },
    lastUpdateTime: {
      text: '最近更新时间',
      format: 'yyyy-MM-dd hh:mm',
    },
    locales: [
      {
        lang: 'en-US',
        prefix: '/',
        text: 'English',
      },
      {
        lang: 'zh-CN',
        prefix: '/zh-cn/',
        text: '简体中文',
      },
    ],
  },
})
