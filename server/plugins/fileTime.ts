/*
 * @Date: 2023-01-08 22:04:56
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-14 11:31:18
 * @FilePath: /nuxt-theme-liting/server/plugins/fileTime.ts
 */
import path from 'path'
import { execa } from 'execa'

const contentDir = '.playground'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', async (file) => {
    const filePath = path.resolve(contentDir, file._source, file._file)
    const { stdout: unixAuthor } = await execa('git', ['log', '-1', '--pretty=format:"%at"', filePath])
    const { stdout: unixCommitter } = await execa('git', ['log', '-1', '--pretty=format:"%ct"', filePath])
    file.unixAuthor = parseInt(unixAuthor.slice(1, -1))
    file.unixCommitter = parseInt(unixCommitter.slice(1, -1))
  })
})
