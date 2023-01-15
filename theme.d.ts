/*
 * @Date: 2023-01-03 00:33:34
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-15 13:14:46
 * @FilePath: /nuxt-theme-liting/theme.d.ts
 */
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

// resolve global namespace invalid when import something
export = Theme
export as namespace Theme

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

  interface PageInfo extends Pick<ParsedContent, string> {
    _path: string
    title: string
    description: string
    tags: string[]
    unixAuthor: number
    unixCommitter: number
  }
}
