<!--
 * @Date: 2022-12-31 17:11:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-01 17:02:00
 * @FilePath: /nuxt-theme-liting/components/HeaderVue.vue
-->
<script lang="ts" setup>
import { ThemeConfigNavIconGithub } from '../utils/types'

const themeConfig = useThemeConfig()
const colorMode = useColorMode()
</script>

<template>
  <header class="h-16 shadow flex justify-between items-center px-3 font-bold text-2xl">
    <div>
      <NuxtLink to="/" class="interact-btn no-underline font-bold">{{ themeConfig.title }}</NuxtLink>
    </div>
    <div class="px-3 flex justify-end items-center gap-4">
      <NuxtLink v-if="themeConfig.nav?.timeline" to="/timeline" class="interact-btn text-xl no-underline">时间线</NuxtLink>
      <NuxtLink v-if="themeConfig.nav?.tag" to="/tag" class="interact-btn text-xl no-underline">标签</NuxtLink>
      <NuxtLink v-if="themeConfig.nav?.expand" to="/expend" class="interact-btn text-xl no-underline">其他</NuxtLink>
      <template v-if="themeConfig.nav?.icon?.skin">
        <div
          v-show="colorMode.preference === 'system'"
          class="i-material-symbols:desktop-windows-outline interact-btn text-2xl"
          @click="colorMode.preference = 'light'"
        />
        <div
          v-show="colorMode.preference === 'light'"
          class="i-material-symbols:light-mode-outline interact-btn text-2xl"
          @click="colorMode.preference = 'dark'"
        />
        <div
          v-show="colorMode.preference === 'dark'"
          class="i-material-symbols:dark-mode-rounded interact-btn text-2xl"
          @click="colorMode.preference = 'system'"
        />
      </template>
      <div v-if="themeConfig.nav?.icon?.i18n" class="i-ion:language-outline interact-btn text-2xl" />
      <NuxtLink
        v-if="!(themeConfig.nav?.icon?.github as ThemeConfigNavIconGithub).disabled"
        :to="(themeConfig.nav?.icon?.github as ThemeConfigNavIconGithub).url"
        target="_blank"
      >
        <div class="i-iconoir:github interact-btn text-2xl" />
      </NuxtLink>
    </div>
  </header>
</template>
