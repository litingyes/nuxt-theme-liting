/*
 * @Date: 2023-01-03 00:33:34
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-03 00:33:34
 * @FilePath: /nuxt-theme-liting/liting.d.ts
 */
interface ThemeConfigNavIconGithub {
  disabled: boolean
  url?: string
}

interface ThemeConfigNav {
  timeline: boolean
  tag: boolean
  expand: boolean
  icon: {
    skin?: boolean
    i18n?: boolean
    github?: ThemeConfigNavIconGithub | string | boolean
  }
}

interface ThemeConfig {
  title: string
  description: string
  search: boolean
  nav: Partial<ThemeConfigNav>
}
