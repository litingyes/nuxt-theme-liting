/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-31 15:38:56
 * @FilePath: /nuxt-theme-liting/nuxt.config.ts
 */
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt', '@nuxtjs/color-mode'],
  content: {
    documentDriven: true,
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
})
