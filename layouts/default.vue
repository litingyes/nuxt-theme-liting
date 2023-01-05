<!--
 * @Date: 2023-01-02 08:59:25
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-05 23:03:32
 * @FilePath: /nuxt-theme-liting/layouts/default.vue
-->
<script lang="ts" setup>
const { page } = useContent()
useContentHead(page)
const sidebar = page.value.sidebar ?? true
const toc = page.value.toc ?? true
</script>

<template>
  <div class="default-layout pt-20 px-6 flex justify-between gap-4">
    <LitingSidebar :show="sidebar"></LitingSidebar>
    <ContentDoc v-slot="{ doc }">
      <div class="default-layout__content flex-1">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
    <LitingToc :show="toc" :toc="page.body.toc"></LitingToc>
  </div>
</template>
