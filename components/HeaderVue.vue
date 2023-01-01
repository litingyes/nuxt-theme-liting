<!--
 * @Date: 2022-12-31 17:11:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-01 16:42:52
 * @FilePath: /nuxt-theme-liting/components/HeaderVue.vue
-->
<script lang="ts" setup>
import { ThemeConfigNavIconGithub } from '../utils/types'

const themeConfig = useThemeConfig()
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
      <div v-if="themeConfig.nav?.icon?.skin" class="i-icon-park-outline:theme interact-btn text-2xl" />
      <div v-if="themeConfig.nav?.icon?.i18n" class="i-ion-language-outline interact-btn text-2xl" />
      <NuxtLink
        v-if="!(themeConfig.nav?.icon?.github as ThemeConfigNavIconGithub).disabled"
        :to="(themeConfig.nav?.icon?.github as ThemeConfigNavIconGithub).url"
        target="_blank"
      >
        <div class="i-iconoir-github interact-btn text-2xl" />
      </NuxtLink>
    </div>
  </header>
</template>
