/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-31 13:53:04
 * @FilePath: /nuxt-theme-liting/app.config.ts
 */
export default defineAppConfig({
  myTheme: {
    name: 'My Nuxt Theme',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myTheme?: {
      /** Project name */
      name?: string
    }
  }
}
