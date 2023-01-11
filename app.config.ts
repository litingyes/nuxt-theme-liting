/*
import { ThemeConfig } from '@nuxt/schema';
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-11 01:18:54
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
        ],
      },
      {
        text: '部署',
        items: [
          {
            text: 'Git使用指南',
            path: '/deploy/git',
          },
          {
            text: 'Netfify部署指南',
            path: '/deploy/netlify',
          },
        ],
      },
    ],
    lastUpdateTime: '最近更新时间',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    theme?: Partial<ThemeConfig>
  }

  interface Test {}
}
