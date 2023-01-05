<!--
 * @Date: 2023-01-05 23:07:57
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-06 01:07:22
 * @FilePath: /nuxt-theme-liting/components/content/ProseImg.vue
-->
<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: '100%',
  },
  height: {
    type: [String, Number],
    default: 'auto',
  },
})
</script>

<template>
  <img class="dark:grayscale" :src="src" :alt="alt" :width="width" :height="height" />
</template>
