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
        github: {
          disabled: false,
          url: 'https://github.com/liting-yes/nuxt-theme-liting.git',
        },
      },
    },
    sidebar: {
      '/': [
        {
          text: 'start',
          items: [
            {
              text: 'instroduction',
              path: '/start/instro',
            },
            {
              text: 'config',
              path: '/start/config',
            },
            {
              text: 'edit',
              path: '/start/md',
            },
            {
              text: 'git',
              path: '/start/git',
            },
            {
              text: 'deploy',
              path: '/start/deploy',
            },
          ],
        },
      ],
      '/zh-cn': [
        {
          text: '开始',
          items: [
            {
              text: '主题介绍',
              path: '/zh-cn/start/instro',
            },
            {
              text: '主题配置',
              path: '/zh-cn/start/config',
            },
            {
              text: '文本编辑',
              path: '/zh-cn/start/md',
            },
            {
              text: 'Git使用指南',
              path: '/zh-cn/start/git',
            },
            {
              text: '站点部署指南',
              path: '/zh-cn/start/deploy',
            },
          ],
        },
      ],
    },
    lastUpdateTime: {
      text: '最近更新时间',
      format: 'yyyy-MM-dd hh:mm',
    },
    locales: [
      {
        lang: 'en-US',
        prefix: '/',
        text: 'English',
        nav: {
          timeline: 'TimeLine',
          tag: 'Tag',
          extra: 'Extra',
        },
      },
      {
        lang: 'zh-CN',
        prefix: '/zh-cn',
        text: '简体中文',
        nav: {
          timeline: '时间线',
          tag: '标签',
          extra: '额外',
        },
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

search 字段代表是否启用全局搜索框(开发中)

## `nav: Partial<ThemeConfigNav>`

nav 字段设置的是顶部导航栏功能

```ts
interface ThemeConfigNav {
  timeline: boolean // 文章发布历史记录
  tag: boolean // 按照标签分类文章
  extra: boolean // 站外网站推荐
  icon: {  // 快速图标跳转
    skin?: boolean  // 切换颜色主题
    github?: ThemeConfigNavIconGithub | string | boolean  // GitHub 仓库链接
  }
}
```

## `sidebar: Sidebar[] | Record<string, Sidebar[]>`

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

如果站点设置多语言，侧边栏可配置为一个对象

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

**值得注意的是，多语言支持还存在局限，动态路由不主动配置的话生成的静态资源缺失，需在 `nuxt.config.ts` 文件的 `nitro` 字段中穷举所有动态路由，如下：**

```ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: [
        '/zh-cn',
        '/zh-cn/timeline',
        '/zh-cn/tag',
        '/zh-cn/extra',
        '/zh-cn/start/instro',
        '/zh-cn/start/config',
        '/zh-cn/start/md',
        '/zh-cn/start/git',
        '/zh-cn/start/deploy',
      ],
    },
  },
})
```
