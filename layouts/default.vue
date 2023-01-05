<!--
 * @Date: 2023-01-02 08:59:25
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-05 23:33:54
 * @FilePath: /nuxt-theme-liting/layouts/default.vue
-->
<script lang="ts" setup>
const { page } = useContent()
useContentHead(page)
const sidebar = page.value.sidebar ?? true
const toc = page.value.toc ?? true
</script>

<template>
  <div class="default-layout pt-20 px-6">
    <LitingSidebar class="fixed top-16 left-0 pt-8" :show="sidebar"></LitingSidebar>
    <ContentDoc v-slot="{ doc }">
      <div class="default-layout__content mx-50">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
    <LitingToc class="fixed top-16 right-0 pt-12" :show="toc" :toc="page.body.toc"></LitingToc>
  </div>
</template>
