/*
 * @Date: 2022-11-21 19:54:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-02 00:06:54
 * @FilePath: /nuxt-theme-liting/nuxt.config.ts
 */
import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  css: ['@unocss/reset/normalize.css', resolve('./assets/styles/base.scss')],
  modules: ['@nuxt/content', '@unocss/nuxt', '@nuxtjs/color-mode', '@nuxtjs/google-fonts', 'nuxt-headlessui'],
  content: {
    documentDriven: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      collections: {
        liting: {
          blibli:
            '<svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.46504 5.35988C6.66458 4.58768 6.66458 3.30546 7.46504 2.53328C8.22582 1.79937 9.43104 1.79937 10.1918 2.53328L14.4345 6.62606C14.555 6.74236 14.6574 6.8702 14.7416 7.00614H21.1578C21.2422 6.8702 21.3446 6.74236 21.465 6.62606L25.7076 2.53328C26.4684 1.79937 27.6736 1.79937 28.4344 2.53328C29.235 3.30546 29.235 4.58768 28.4344 5.35988L26.728 7.00614H28C32.4182 7.00614 36 10.5879 36 15.0061V26.0172C36 30.4354 32.4182 34.0172 28 34.0172H8C3.58172 34.0172 0 30.4354 0 26.0172V15.0061C0 10.5878 3.58172 7.00614 8 7.00614H9.17158L7.46504 5.35988ZM8 10.8649C5.79086 10.8649 4 12.6557 4 14.8649V26.1584C4 28.3676 5.79086 30.1584 8 30.1584H28C30.2092 30.1584 32 28.3676 32 26.1584V14.8649C32 12.6557 30.2092 10.8649 28 10.8649H8ZM10 18.6529C10 17.5484 10.8954 16.6529 12 16.6529C13.1046 16.6529 14 17.5484 14 18.6529V20.441C14 21.5456 13.1046 22.441 12 22.441C10.8954 22.441 10 21.5456 10 20.441V18.6529ZM24 16.6529C22.8954 16.6529 22 17.5484 22 18.6529V20.441C22 21.5456 22.8954 22.441 24 22.441C25.1046 22.441 26 21.5456 26 20.441V18.6529C26 17.5484 25.1046 16.6529 24 16.6529Z" fill="black"/></svg>',
        },
      },
    },
    shortcuts: [
      {
        'interact-btn': 'cursor-pointer text-[var(--text-color)] transition-all hover:text-orange-300',
      },
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
  headlessui: {
    prefix: 'Headless',
  },
})
