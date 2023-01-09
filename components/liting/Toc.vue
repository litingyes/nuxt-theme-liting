<!--
 * @Date: 2023-01-04 23:05:03
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-09 21:54:45
 * @FilePath: /nuxt-theme-liting/components/liting/Toc.vue
-->
<script lang="ts" setup>
import type { Toc } from '@nuxt/content/dist/runtime/types'

interface Props {
  show?: boolean
  toc: Toc | null
}
const props = withDefaults(defineProps<Props>(), {
  show: true,
  toc: null,
})
</script>

<template>
  <ul class="liting-toc w-50 min-h-xl list-none">
    <template v-if="props.show && props.toc?.links?.length">
      <li v-for="link in props.toc.links" :key="link.id" class="py-1">
        <a class="text-sm font-medium interact-btn" :href="`#${link.id}`">{{ link.text }}</a></li
      >
    </template>
  </ul>
</template>
