/*
 * @Date: 2022-12-31 14:51:13
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-17 00:34:07
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
        i18n: false,
        github: {
          disabled: false,
          url: 'https://github.com/liting-yes/nuxt-theme-liting.git',
        },
      },
    },
    sidebar: [
      {
        text: '开始',
        items: [
          {
            text: '主题介绍',
            path: '/start/instro',
          },
          {
            text: '主题配置',
            path: '/start/config',
          },
          {
            text: '文本编辑',
            path: '/start/md',
          },
          {
            text: 'Git使用指南',
            path: '/start/git',
          },
          {
            text: '站点部署指南',
            path: '/start/deploy',
          },
        ],
      },
    ],
    lastUpdateTime: {
      text: '最近更新时间',
      format: 'yyyy-MM-dd hh:mm',
    },
    locales: [
      {
        lang: 'en-US',
        prefix: '/en-US',
        text: 'English',
      },
      {
        lang: 'zh-CN',
        prefix: '/zh-CN',
        text: '简体中文',
      },
    ],
  },
})
