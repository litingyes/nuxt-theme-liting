/*
 * @Date: 2023-01-08 22:04:56
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-23 11:47:54
 * @FilePath: /nuxt-theme-liting/server/plugins/fileTime.ts
 */
import path from 'path'
import { execa } from 'execa'
import type { NitroApp } from 'nitropack'

// export function defineNitroPlugin(def: NitroAppPlugin): NitroAppPlugin {
//   return def
// }

const contentDir = '.playground'

// defineNitroPlugin is no define when using theme in new repo
// export default defineNitroPlugin((nitroApp) => {
//   nitroApp.hooks.hook('content:file:afterParse', async (file) => {
//     const filePath = path.resolve(contentDir, file._source, file._file)
//     const { stdout: unixAuthor } = await execa('git', ['log', '-1', '--pretty=format:"%at"', filePath])
//     const { stdout: unixCommitter } = await execa('git', ['log', '-1', '--pretty=format:"%ct"', filePath])
//     file.unixAuthor = parseInt(unixAuthor.slice(1, -1))
//     file.unixCommitter = parseInt(unixCommitter.slice(1, -1))
//   })
// })

export default (nitroApp: NitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', async (file) => {
    const filePath = path.resolve(contentDir, 'content', file._file)
    const { stdout: unixAuthor } = await execa('git', ['log', '-1', '--pretty=format:"%at"', filePath])
    const { stdout: unixCommitter } = await execa('git', ['log', '-1', '--pretty=format:"%ct"', filePath])
    file.unixAuthor = parseInt(unixAuthor.slice(1, -1))
    file.unixCommitter = parseInt(unixCommitter.slice(1, -1))
  })
}
