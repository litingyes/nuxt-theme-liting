<!--
 * @Date: 2023-01-04 20:12:47
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-06 01:18:07
 * @FilePath: /nuxt-theme-liting/components/liting/LitingSidebar.vue
-->
<script lang="ts" setup>
import { useSidebarState } from '~~/../stores/useSidebarState'

interface Props {
  show?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  show: true,
})

const themeConfig = useThemeConfig()

const sidebarState = useSidebarState()

if (themeConfig.value.sidebar?.length && !sidebarState.expanding) {
  sidebarState.updateExpanding(themeConfig.value.sidebar[0].key)
}

const handleClick = (key: number | string) => {
  if (sidebarState.expanding === key) {
    sidebarState.updateExpanding()
  } else {
    sidebarState.updateExpanding(key)
  }
}
</script>

<template>
  <ul class="liting-sidebar w-50 min-h-xl list-none px-8">
    <template v-if="props.show && themeConfig.sidebar.length">
      <li v-for="level1 in themeConfig.sidebar" :key="level1.key" class="my-4">
        <span class="inline-flex items-center interact-btn" @click="handleClick(level1.key!)">
          <span class="text-base font-bold">{{ level1.text }}</span>
          <div
            :class="
              sidebarState.expanding === level1.key
                ? 'i-material-symbols:keyboard-arrow-up-rounded'
                : 'i-material-symbols:keyboard-arrow-down-rounded'
            "
          ></div>
        </span>
        <ul
          class="list-none overflow-hidden transition-all duration-3000 ease-in-out"
          :class="sidebarState.expanding === level1.key ? 'max-h-fix' : 'max-h-0'"
        >
          <li v-for="level2 in level1.items" :key="level2.key" class="my-2">
            <NuxtLink class="text-sm font-medium interact-btn" :to="level2.path">{{ level2.text }}</NuxtLink>
          </li>
        </ul>
      </li>
    </template>
  </ul>
</template>
