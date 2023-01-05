/*
 * @Date: 2023-01-03 00:33:34
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-04 23:50:40
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

interface SidebarItem {
  key?: number | string
  text: string
  path: string
}

interface Sidebar {
  key?: number | string
  text: string
  items: SidebarItem[]
}

interface ThemeConfig {
  title: string
  description: string
  search: boolean
  nav: Partial<ThemeConfigNav>
  sidebar: Sidebar[]
}
