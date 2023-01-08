/*
 * @Date: 2023-01-08 22:04:56
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-08 23:47:37
 * @FilePath: /nuxt-theme-liting/server/plugins/fileTime.ts
 */
import path from 'path'
import { execa } from 'execa'

const contentDir = '.playground'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', async (file) => {
    const filePath = path.resolve(contentDir, file._source, file._file)
    const { stdout: createTime } = await execa('git', ['log', '-1', '--pretty=format:"%cd"', '--date=short', filePath])
    const { stdout: lastUpdateTime } = await execa('git', ['log', '-1', '--pretty=format:"%ad"', '--date=short', filePath])
    file.$createTime = createTime.slice(1, -1)
    file.$lastUpdateTime = lastUpdateTime.slice(1, -1)
  })
})
