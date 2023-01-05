<!--
 * @Date: 2023-01-05 21:06:29
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-05 22:56:21
 * @FilePath: /nuxt-theme-liting/components/content/ProseA.vue
-->
<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <ClientOnly>
    <NuxtLink :href="href">
      <slot />
    </NuxtLink>
  </ClientOnly>
</template>
