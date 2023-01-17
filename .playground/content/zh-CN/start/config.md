---
tags:
  - tutorial
---


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
  timeline: boolean // 文章发布历史记录
  tag: boolean // 按照标签分类文章
  extra: boolean // 站外网站推荐
  icon: {  // 快速图标跳转
    skin?: boolean  // 切换颜色主题
    i18n?: boolean  // 切换站点语言 
    github?: ThemeConfigNavIconGithub | string | boolean  // GitHub 仓库链接
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

## `lastUpdateTime: LastUpdateTime`

lastUpdateTime 字段指的是是否显示文档最近更新时间以及时间显示格式

```ts
interface LastUpdateTime {
  text: string // 最近文档最新时间的前缀文本
  format: string // 时间格式化格式
}
```

## `locales:  false | LocaleItem[]`

locales 字段设置的是站点的文档国际化结构

```ts
interface LocaleItem {
  lang: string // 站点语言
  prefix: string // 路径前缀
  text: string // 导航栏国际化切换文本
}
```
