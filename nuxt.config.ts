/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-31 14:04:04
 * @FilePath: /nuxt-theme-liting/nuxt.config.ts
 */
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://github.com/Tahul/pinceau
    'pinceau/nuxt',
  ],

  content: {
    documentDriven: true,
  },

  pinceau: {
    configFileName: 'tokens.config',
  },
})
