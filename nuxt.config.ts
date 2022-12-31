/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-31 15:24:35
 * @FilePath: /nuxt-theme-liting/nuxt.config.ts
 */
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  content: {
    documentDriven: true,
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
  },
})
