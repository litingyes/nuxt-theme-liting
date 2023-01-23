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

> If the above file does not exist, you need to create it yourself

## `title: string`

the **title** field sets the title of the site

## `description: string`

the **description** field sets a brief description of the site

## `search: boolean`

the **search** field represents whether to enable the global search box (In development)

## `nav: Partial<ThemeConfigNav>`

the **nav** field sets the function of the top navigation bar

```ts
interface ThemeConfigNav {
  timeline: boolean  // article publishing history
  tag: boolean  // sort articles by tags
  extra: boolean  // off-site website recommendation
  icon: {  // shortcut icon jump
    skin?: boolean  // mode switch
    github?: ThemeConfigNavIconGithub | string | boolean  // GitHub repository link
  }
}
```

## `sidebar: Sidebar[] | Record<string, Sidebar[]>`

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

If the site is set in multiple languages, the sidebar can be configured as an object

## `lastUpdateTime: string | boolean`

the **lastUpdateTime** field refers to whether to display the latest update time of the document and the display text

```ts
interface LastUpdateTime {
  text: string // the text prefixed with the latest time of the most recent document
  format: string // time format
}
```

## `locales:  false | LocaleItem[]`

the locales field sets the document internationalization structure of the site

```ts
interface LocaleItem {
  lang: string // site language
  prefix: string // path prefix
  text: string // navigation bar internationalization switch text
}
```

**It is worth noting that there are still limitations in multi-language support. If the dynamic routing is not actively configured, the generated static resources are missing. All dynamic routing needs to be exhausted in the `nitro` field of the `nuxt.config.ts` file, as follows:**

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
