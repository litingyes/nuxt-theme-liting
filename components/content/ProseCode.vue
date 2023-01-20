<!--
 * @Date: 2023-01-05 23:07:57
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-20 16:00:55
 * @FilePath: /nuxt-theme-liting/components/content/ProseCode.vue
-->
<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
  },
})
</script>

<template>
  <div class="relative my-4 px-4 pt-8 pb-4 rounded-xl bg-yellow-50/80 dark:bg-slate-700">
    <span class="absolute top-2 right-4 text-[var(--active-color)]">{{ language }}</span>
    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
  white-space: break-spaces;
}
</style>
