/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-16 23:45:40
 * @FilePath: /nuxt-theme-liting/app.config.ts
 */
export default defineAppConfig({
  theme: {
    title: 'Nuxt Theme Liting',
    description: 'a theme about nuxt',
    logo: './public/logo.png',
    search: false,
    nav: {
      timeline: false,
      tag: false,
      extra: false,
      icon: {
        skin: true,
        i18n: false,
        github: {
          disabled: false,
          url: 'https://github.com/liting-yes/nuxt-theme-liting.git',
        },
      },
    },
    sidebar: [],
    lastUpdateTime: false,
    locales: false,
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    theme?: Partial<Theme.Config>
  }
}
