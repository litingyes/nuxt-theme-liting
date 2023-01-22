/*
 * @Date: 2023-01-16 23:38:45
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-22 19:28:04
 * @FilePath: /nuxt-theme-liting/composables/useLocale.ts
 */
export const useLocale = () => {
  const disabled = ref(false)
  let filterPages = (pages: Array<Partial<Theme.PageInfo>>, limit?: number) => {
    pages = pages.filter((page) => page.title)
    if (limit) {
      return pages.slice(0, limit)
    } else {
      return pages
    }
  }
  const { themeConfig } = useThemeConfig()
  if (!themeConfig?.locales) {
    disabled.value = true
    return { disabled, filterPages }
  }

  const locales = themeConfig.locales

  const langs = computed(() => locales.map((locale) => locale.lang))
  const currentLang = useLocalStorage('nuxt-theme-liting__locale', langs.value[0])
  if (!langs.value.includes(currentLang.value)) currentLang.value = langs.value[0]

  const currentLocale = computed(() => locales.find((locale) => locale.lang === currentLang.value))

  const setLang = (lang: string) => {
    if (!langs.value.includes(lang)) {
      console.warn(`the input lang ${lang} is valid`)
    }

    currentLang.value = lang
    const route = useRoute()
    let path = route.fullPath
    const prefixs = locales.map((locale) => locale.prefix).filter((prefix) => prefix !== '/')

    let removed = false
    let i = 0
    while (!removed && i < prefixs.length) {
      if (path.startsWith(prefixs[i])) {
        path = path.replace(prefixs[i], '')
        removed = true
      }
      i++
    }
    !removed && (path = path.slice(1))
    path = currentLocale.value?.prefix + path
    if (path === route.fullPath) return
    navigateTo(path)
  }

  filterPages = (pages: Array<Partial<Theme.PageInfo>>, limit?: number) => {
    pages = pages.filter((page) => page.title)
    if (currentLocale?.value?.prefix === '/') {
      const prefixs = locales?.map((locale) => locale.prefix).filter((prefix) => prefix !== '/')
      pages = pages.filter((page) => !prefixs?.some((prefix) => page._path?.startsWith(prefix)))
    } else {
      pages = pages.filter((page) => page._path?.startsWith(currentLocale.value?.prefix as string))
    }

    if (limit) {
      return pages.slice(0, limit)
    } else {
      return pages
    }
  }

  return {
    disabled,
    langs,
    locales,
    currentLang,
    currentLocale,
    setLang,
    filterPages,
  }
}
