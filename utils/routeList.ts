/*
 * @Date: 2023-01-22 20:20:49
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-22 20:20:49
 * @FilePath: /nuxt-theme-liting/utils/routeList.ts
 */
import glob from 'glob'
import type { IOptions } from 'glob'

export const getRouteList = (pattern: string, options: IOptions) => {
  return glob.sync(pattern, options).map((path) => `/${path.replace('.md', '')}`)
}

export default getRouteList
