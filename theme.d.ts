/*
 * @Date: 2023-01-03 00:33:34
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-15 11:12:48
 * @FilePath: /nuxt-theme-liting/liting.d.ts
 */
declare namespace Theme {
  interface NavIconGithub {
    disabled: boolean
    url?: string
  }

  interface Nav {
    timeline: boolean
    tag: boolean
    expand: boolean
    icon: {
      skin?: boolean
      i18n?: boolean
      github?: NavIconGithub | string | boolean
    }
  }

  interface SidebarItem {
    key?: number | string
    text: string
    path: string
  }

  interface Sidebar {
    key?: string
    text: string
    items: SidebarItem[]
  }

  interface LastUpdateTime {
    text: string
    format: string
  }

  interface Config {
    title: string
    description: string
    search: boolean
    nav: Partial<Nav>
    sidebar: Sidebar[]
    lastUpdateTime: Partial<LastUpdateTime> | false
  }

  interface PageInfo {
    _path: string
    title: string
    description: string
    unixAuthor: number
    unixCommitter: number
  }
}
