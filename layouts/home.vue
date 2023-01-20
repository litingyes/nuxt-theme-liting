<!--
 * @Date: 2023-01-02 10:01:12
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-20 13:25:11
 * @FilePath: /nuxt-theme-liting/layouts/home.vue
-->

<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <div class="home-layout pb-4">
    <div
      class="h-96 sm:h-screen flex flex-col items-center pt-36 sm:pt-48 bg-[length:0px_0px] sm:bg-cover dark:grayscale"
      :style="{ backgroundImage: `url(${page.cover})` }"
    >
      <LitingAvatar :url="page.avatar" size="large" round></LitingAvatar>
      <div class="flex items-center gap-2 mt-4">
        <NuxtLink v-if="page.social.twitter" :to="page.social.twitter" target="_blank">
          <div class="i-ri:twitter-line interact-btn text-2xl"></div>
        </NuxtLink>
        <NuxtLink v-if="page.social.blibli" :to="page.social.blibli" target="_blank">
          <div class="i-liting:blibli interact-btn text-2xl"></div>
        </NuxtLink>
        <NuxtLink v-if="page.social.zhihu" :to="page.social.zhihu" target="_blank">
          <div class="i-ri:zhihu-line interact-btn text-2xl"></div>
        </NuxtLink>
        <NuxtLink v-if="page.social.github" :to="page.social.github" target="_blank">
          <div class="i-mdi:github interact-btn text-2xl"></div>
        </NuxtLink>
      </div>
    </div>
    <LitingPageList path="/" :limit="6"></LitingPageList>
  </div>
</template>
