<!--
 * @Date: 2023-01-15 18:17:15
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-16 18:39:50
 * @FilePath: /nuxt-theme-liting/layouts/extra.vue
-->
<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <div class="extra-layout pt-16">
    <div class="max-w-3xl mx-auto mt-16 px-12 sm:px-0">
      <div v-for="extraGroup in page.extra" :key="extraGroup.text">
        <h2 class="mt-8 mb-4">{{ extraGroup.text }}</h2>
        <ul class="list-none grid grid-cols-2 gap-4 sm:gap-8">
          <LitingExtraItem v-for="item in extraGroup.items" :key="item.text" :data="item"></LitingExtraItem>
        </ul>
      </div>
    </div>
  </div>
</template>
