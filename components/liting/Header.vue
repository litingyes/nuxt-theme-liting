<!--
 * @Date: 2022-12-31 17:11:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-16 09:33:15
 * @FilePath: /nuxt-theme-liting/components/liting/Header.vue
-->
<script lang="ts" setup>
const themeConfig = useThemeConfig()
const colorMode = useColorMode()
</script>

<template>
  <header
    class="liting-header fixed z-10 w-screen h-16 drop-shadow-2xl flex justify-between items-center px-3 backdrop-blur bg-yellow-100/50 dark:bg-slate-800/50"
  >
    <NuxtLink to="/" class="interact-btn no-underline font-bold text-2xl flex items-center gap-1">
      <img v-if="themeConfig.logo" class="w-12 h-12" src="../../public/logo.png" alt="logo" />
      <span v-if="themeConfig.title">{{ themeConfig.title }}</span>
    </NuxtLink>
    <div class="px-3 flex justify-end items-center gap-4">
      <NuxtLink v-if="themeConfig.nav?.timeline" to="/timeline" class="interact-btn text-xl no-underline">时间线</NuxtLink>
      <NuxtLink v-if="themeConfig.nav?.tag" to="/tag" class="interact-btn text-xl no-underline">标签</NuxtLink>
      <NuxtLink v-if="themeConfig.nav?.extra" to="/extra" class="interact-btn text-xl no-underline">其他</NuxtLink>
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
        v-if="!(themeConfig.nav?.icon?.github as Theme.NavIconGithub).disabled"
        :to="(themeConfig.nav?.icon?.github as Theme.NavIconGithub).url"
        target="_blank"
      >
        <div class="i-iconoir:github interact-btn text-2xl" />
      </NuxtLink>
    </div>
  </header>
</template>
