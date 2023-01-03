<!--
 * @Date: 2022-12-31 17:11:13
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-04 01:10:03
 * @FilePath: /nuxt-theme-liting/components/content/HomePage.vue
-->
<script lang="ts" setup>
interface Props {
  avatar?: string
  homeCover?: string
  social?: {
    twitter?: string | false
    blibli?: string | false
    zhihu?: string | false
    github?: string | false
  }
}
const props = withDefaults(defineProps<Props>(), {
  avatar: '/avatar.jpg',
  homeCover: '/home-cover.jpg',
  social: () => ({
    twitter: false,
    blibli: false,
    zhihu: false,
    github: false,
  }),
})
</script>

<template>
  <div
    class="liting-home h-screen flex flex-col items-center pt-48 bg-cover"
    :style="{ backgroundImage: `url(${props.homeCover})` }"
  >
    <LitingAvatar :url="props.avatar" size="large" round></LitingAvatar>
    <div class="flex items-center gap-2 mt-4">
      <NuxtLink v-if="props.social.twitter" :to="props.social.twitter" target="_blank">
        <div class="i-ri:twitter-line interact-btn text-2xl"></div>
      </NuxtLink>
      <NuxtLink v-if="props.social.blibli" :to="props.social.blibli" target="_blank">
        <div class="i-liting:blibli interact-btn text-2xl"></div>
      </NuxtLink>
      <NuxtLink v-if="props.social.zhihu" :to="props.social.zhihu" target="_blank">
        <div class="i-ri:zhihu-line interact-btn text-2xl"></div>
      </NuxtLink>
      <NuxtLink v-if="props.social.github" :to="props.social.github" target="_blank">
        <div class="i-mdi:github interact-btn text-2xl"></div>
      </NuxtLink>
    </div>
  </div>
</template>
