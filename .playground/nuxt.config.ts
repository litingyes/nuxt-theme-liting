/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-20 12:46:09
 * @FilePath: /nuxt-theme-liting/.playground/nuxt.config.ts
 */
import { resolve } from 'path'
import getRouteList from '../utils/routeList'

export default defineNuxtConfig({
  extends: '..',
  typescript: {
    includeWorkspace: true,
  },
  generate: {
    routes: getRouteList('**/*.md', { cwd: resolve(__dirname, './content') }),
  },
})
