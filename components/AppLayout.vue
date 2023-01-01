<!--
 * @Date: 2022-12-31 14:51:13
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-01 21:41:09
 * @FilePath: /nuxt-theme-liting/components/AppLayout.vue
-->
<script setup lang="ts">
// const theme = useAppConfig().theme
</script>

<template>
  <div class="nuxt-theme-liting">
    <HeaderVue></HeaderVue>
    <main class="w-screen h-screen"><slot /></main>
  </div>
</template>
