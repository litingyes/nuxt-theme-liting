/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-15 19:42:45
 * @FilePath: /nuxt-theme-liting/app.config.ts
 */
export default defineAppConfig({
  theme: {
    title: 'Nuxt Theme Liting',
    description: 'a theme about nuxt',
    search: false,
    nav: {
      timeline: true,
      tag: true,
      expand: true,
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
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    theme?: Partial<Theme.Config>
  }

  interface Test {}
}
