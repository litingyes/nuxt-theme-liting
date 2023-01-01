/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-01 19:57:30
 * @FilePath: /nuxt-theme-liting/nuxt.config.ts
 */
import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  css: ['@unocss/reset/normalize.css', resolve('./assets/styles/base.scss')],
  modules: ['@nuxt/content', '@unocss/nuxt', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
  content: {
    documentDriven: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: true,
    shortcuts: [
      {
        'interact-btn': 'cursor-pointer text-color hover:text-orange-300',
      },
    ],
    rules: [
      [
        'text-color',
        {
          color: 'var(--text-color)',
        },
      ],
    ],
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  googleFonts: {
    families: {
      Inter: true,
    },
    subsets: 'greek',
  },
})
