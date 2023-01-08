/*
 * @Date: 2023-01-01 13:13:27
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-08 23:45:40
 * @FilePath: /nuxt-theme-liting/composables/useThemeConfig.ts
 */
export const useThemeConfig = () => {
  const themeConfig = useAppConfig().theme

  return useState('themeConfig', () => {
    const config: ThemeConfig = Object.assign({}, themeConfig)
    let keyIndex = 0

    if (!config.nav?.icon?.github) {
      config.nav!.icon!.github = {
        disabled: true,
      }
    } else if (typeof config.nav?.icon?.github === 'boolean') {
      config.nav!.icon!.github = {
        disabled: false,
        url: 'https://github.com/liting-yes/nuxt-theme-liting.git',
      }
    } else if (typeof themeConfig.nav?.icon?.github === 'string') {
      config.nav!.icon!.github! = {
        disabled: false,
        url: config.nav!.icon!.github as string,
      }
    }
    config.nav!.icon!.github as ThemeConfigNavIconGithub

    config.sidebar.forEach((level1) => {
      if (!level1.key) level1.key = keyIndex++

      level1.items.forEach((level2) => {
        if (!level2.key) keyIndex++
      })
    })

    if (config.lastUpdateTime === true) {
      config.lastUpdateTime = '最近更新时间'
    }

    return config
  })
}
