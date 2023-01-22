---
tags:
  - tutorial
---


# Theme Configuration

set the fields in the **nuxt.config.ts** file in the project root directory as follows：

```ts
export default defineNuxtConfig({
  ...
  theme: 'nuxt-theme-liting' 
  ...
})
```

then configure the theme settings in the **app.config.ts** file in the project root directory, such as this site configuration：

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

> If the above file does not exist, you need to create it yourself

## `title: string`

the **title** field sets the title of the site

## `description: string`

the **description** field sets a brief description of the site

## `search: boolean`

the **search** field represents whether to enable the global search box

## `nav: Partial<ThemeConfigNav>`

the **nav** field sets the function of the top navigation bar

```ts
interface ThemeConfigNav {
  timeline: boolean  // article publishing history
  tag: boolean  // sort articles by tags
  extra: boolean  // off-site website recommendation
  icon: {  // shortcut icon jump
    skin?: boolean  // mode switch
    i18n?: boolean  // switch site language 
    github?: ThemeConfigNavIconGithub | string | boolean  // GitHub repository link
  }
}
```

## `sidebar: Sidebar[]`

the **sidebar** field is set to the directory on the left side of the document page

```ts
interface Sidebar {
  key?: number | string // unique ID
  text: string // first-level directory title
  items: SidebarItem[] // an array of subdirectories of the first-level directory
}
```

```ts
interface SidebarItem {
  key?: number | string // unique ID
  text: string // second level directory title
  path: string // the document path corresponding to the title of the secondary directory
}
```

## `lastUpdateTime: string | boolean`

the **lastUpdateTime** field refers to whether to display the latest update time of the document and the display text
