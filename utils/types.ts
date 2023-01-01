export interface ThemeConfigNavIconGithub {
  disabled: boolean
  url?: string
}

export interface ThemeConfigNav {
  timeline: boolean
  tag: boolean
  expand: boolean
  icon: {
    skin?: boolean
    i18n?: boolean
    github?: ThemeConfigNavIconGithub | string | boolean
  }
}

export interface ThemeConfig {
  title: string
  description: string
  search: boolean
  nav: Partial<ThemeConfigNav>
}
