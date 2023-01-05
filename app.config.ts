/*
import { ThemeConfig } from '@nuxt/schema';
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-04 22:12:42
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
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    theme?: Partial<ThemeConfig>
  }

  interface Test {}
}
