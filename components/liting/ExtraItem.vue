<!--
 * @Date: 2023-01-15 18:40:43
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-16 12:45:28
 * @FilePath: /nuxt-theme-liting/components/liting/ExtraItem.vue
-->
<script lang="ts" setup>
interface ExtraItem {
  text: string
  desc: string
  link: string
}
interface Props {
  data: ExtraItem
}

const props = defineProps<Props>()
</script>

<template>
  <li class="extra-item flex flex-col gap-1 w-56 sm:w-80 px-8 py-4 shadow-md bg-emerald-200 rounded-lg dark:bg-slate-900">
    <NuxtLink class="font-bold text-lg" :to="props.data.link" target="_blank">
      {{ props.data.text }}
    </NuxtLink>
    <span class="font-light text-sm">{{ props.data.desc }}</span>
  </li>
</template>
