<!--
 * @Date: 2022-12-31 17:11:30
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-03 00:34:18
 * @FilePath: /nuxt-theme-liting/components/HeaderVue.vue
-->
<script lang="ts" setup>
const themeConfig = useThemeConfig()
const colorMode = useColorMode()
</script>

<template>
  <header
    class="fixed w-screen h-16 shadow flex justify-between items-center px-3 bg-[var(--nav-bg-color)] backdrop-blur ackdrop-saturate-50"
  >
    <div>
      <NuxtLink to="/" class="interact-btn no-underline font-bold text-2xl">{{ themeConfig.title }}</NuxtLink>
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
