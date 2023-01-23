/*
 * @Date: 2023-01-22 12:44:06
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-23 10:26:07
 * @FilePath: /nuxt-theme-liting/stores/useThemeConfig.ts
 */
import { defineStore } from 'pinia'

let keyIndex = 0

const normalizePrefix = (prefix: string) => {
  if (prefix === '/') return ''

  if (!prefix.startsWith('/')) {
    prefix = `/${prefix}`
  }
  if (prefix.endsWith('/')) {
    prefix = prefix.slice(0, -1)
  }

  return prefix.toLowerCase()
}

export const useThemeConfig = defineStore('themeConfig', () => {
  const themeConfig = ref<Theme.Config>()

  const updateThemeConfig = (config_: Theme.Config) => {
    themeConfig.value = { ...themeConfig.value, ...config_ }

    if (!themeConfig.value.nav?.icon?.github) {
      themeConfig.value.nav!.icon!.github = {
        disabled: true,
      }
    } else if (typeof themeConfig.value.nav?.icon?.github === 'boolean') {
      themeConfig.value.nav!.icon!.github = {
        disabled: false,
        url: 'https://github.com/liting-yes/nuxt-theme-liting.git',
      }
    } else if (typeof themeConfig.value.nav?.icon?.github === 'string') {
      themeConfig.value.nav!.icon!.github! = {
        disabled: false,
        url: themeConfig.value.nav!.icon!.github as string,
      }
    }
    themeConfig.value.nav!.icon!.github as Theme.NavIconGithub

    const { disabled } = useLocale()

    if (
      !themeConfig.value.sidebar ||
      isArray(themeConfig.value.sidebar && (themeConfig.value.sidebar as Theme.Sidebar[]).length === 0) ||
      (isPlainObject(themeConfig.value.sidebar) && Object.keys(themeConfig.value.sidebar).length === 0)
    ) {
      themeConfig.value.sidebar = false
    } else if (disabled.value) {
      ;(themeConfig.value.sidebar as Theme.Sidebar[]).forEach((level1) => {
        if (!level1.key) level1.key = String(keyIndex++)

        level1.items.forEach((level2) => {
          if (!level2.key) String(keyIndex++)
        })
      })
    } else {
      Object.values(themeConfig.value.sidebar).forEach((sidebar: Theme.Sidebar[]) =>
        sidebar.forEach((level1) => {
          if (!level1.key) level1.key = String(keyIndex++)

          level1.items.forEach((level2) => {
            if (!level2.key) String(keyIndex++)
          })
        })
      )
    }

    if (themeConfig.value.locales && !themeConfig.value.locales.length) {
      themeConfig.value.locales = false
    }
    if (themeConfig.value.locales) {
      themeConfig.value.locales.forEach((locale) => (locale.prefix = normalizePrefix(locale.prefix)))
    }

    return themeConfig
  }

  return { themeConfig, updateThemeConfig }
})
