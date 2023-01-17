/*
 * @Date: 2023-01-16 23:38:45
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-17 15:01:10
 * @FilePath: /nuxt-theme-liting/composables/useLocale.ts
 */
export const useLocale = () => {
  const disabled = ref(false)
  const { locales } = useThemeConfig().value
  if (!locales) {
    disabled.value = true
    return { disabled }
  }

  const langs = computed(() => locales.map((locale) => locale.lang))
  const currentLang = useLocalStorage('nuxt-theme-liting__locale', langs.value[0])
  if (!langs.value.includes(currentLang.value)) currentLang.value = langs.value[0]

  const currentLocale = computed(() => locales.find((locale) => locale.lang === currentLang.value))

  const setLang = (lang: string) => {
    if (!langs.value.includes(lang)) {
      console.warn(`the input lang ${lang} is valid`)
    }
    currentLang.value = lang
    window.location.reload()
  }

  return { disabled, locales, currentLang, currentLocale, setLang }
}
