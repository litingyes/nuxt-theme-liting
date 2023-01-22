/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-23 01:03:50
 * @FilePath: /nuxt-theme-liting/.playground/nuxt.config.ts
 */
export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true,
  },
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
