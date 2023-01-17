/*
 * @Date: 2023-01-16 21:47:58
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-17 15:10:57
 * @FilePath: /nuxt-theme-liting/middleware/locale.global.ts
 */
export default defineNuxtRouteMiddleware((to) => {
  const { disabled, locales, currentLocale } = useLocale()
  if (disabled.value || to.fullPath.startsWith(currentLocale!.value!.prefix)) {
    return
  }

  const prefixs = locales!.map((locale) => locale.prefix)

  for (const prefix of prefixs) {
    if (to.fullPath.startsWith(prefix) && prefix !== currentLocale!.value!.prefix) {
      return navigateTo(to.fullPath.replace(prefix, currentLocale!.value!.prefix))
    }
  }

  return navigateTo(currentLocale!.value!.prefix + to.fullPath)
})
