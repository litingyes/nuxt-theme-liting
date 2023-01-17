<!--
 * @Date: 2023-01-14 13:10:49
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-17 15:13:17
 * @FilePath: /nuxt-theme-liting/layouts/timeline.vue
-->
<script lang="ts" setup>
const { disabled, currentLocale } = useLocale()
</script>

<template>
  <div class="timeline-layout pt-24">
    <LitingPageList :path="disabled ? '/' : currentLocale?.prefix"></LitingPageList>
  </div>
</template>
