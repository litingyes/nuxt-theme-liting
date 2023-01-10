# 主题配置

在项目根目录下的 **nuxt.config.ts** 文件中设置字段如下：
```ts
export default defineNuxtConfig({
  ...
  theme: 'nuxt-theme-liting' 
  ...
})
```

然后在项目根目录下的 **app.config.ts** 文件中配置主题设置，如本站点配置：
```ts
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
```

> 若以上文件不存在，需自行创建

## `title: string`

title 字段设置的是站点的标题

## `description: string`

description 字段设置的是站点的简要描述

## `search: boolean`

search 字段代表是否启用全局搜索框

## `nav: Partial<ThemeConfigNav>`

nav 字段设置的是顶部导航栏功能

```ts
interface ThemeConfigNav {
  timeline: boolean  // 开发中
  tag: boolean  // 开发中
  expand: boolean  // 开发中
  icon: {  // 快捷图标跳转
    skin?: boolean  // 模式切换
    i18n?: boolean  // 开发中 
    github?: ThemeConfigNavIconGithub | string | boolean  // GitHub 跳转
  }
}
```

## `sidebar: Sidebar[]`

sidebar 字段设置的是文档页面左侧目录

```ts
interface Sidebar {
  key?: number | string // 唯一标识ID
  text: string // 一级目录标题
  items: SidebarItem[] // 一级目录的子目录数组
}
```

```ts
interface SidebarItem {
  key?: number | string // 唯一标识ID
  text: string // 二级目录标题
  path: string // 二级目录标题对应的文档路径
}
```

## `lastUpdateTime: string | boolean`

lastUpdateTime 字段指的是是否显示文档最近更新时间以及显示文本
