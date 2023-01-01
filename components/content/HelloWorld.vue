<!--
 * @Date: 2022-12-31 14:51:13
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-31 17:10:14
 * @FilePath: /nuxt-theme-liting/components/content/HelloWorld.vue
-->
<template>
  <div class="hello">
    <ContentSlot :use="$slots.default"> Hello World </ContentSlot>
  </div>
</template>

<style lang="postcss" scoped></style>
