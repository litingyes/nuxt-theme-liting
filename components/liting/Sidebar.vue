<!--
 * @Date: 2023-01-04 20:12:47
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-20 16:37:04
 * @FilePath: /nuxt-theme-liting/components/liting/Sidebar.vue
-->
<script lang="ts" setup>
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
const openSubMenu = (key: string) => {
  sidebarState.updateExpanding(key)
}
const closeSubMenu = () => {
  sidebarState.updateExpanding()
}
</script>

<template>
  <div class="liting-sidebar w-50 select-none h-full shadow-lg">
    <ClientOnly>
      <ElMenu
        class="!border-r-0"
        :default-openeds="[sidebarState.expanding as string]"
        unique-opened
        router
        @open="openSubMenu"
        @close="closeSubMenu"
      >
        <ElSubMenu v-for="level1 in themeConfig.sidebar" :key="level1.key" :index="(level1.key as string)">
          <template #title>
            {{ level1.text }}
          </template>
          <ElMenuItem v-for="level2 in level1.items" :key="level2.key" class="my-2" :index="level2.path">
            {{ level2.text }}
          </ElMenuItem>
        </ElSubMenu>
      </ElMenu>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.liting-sidebar {
  --el-menu-bg-color: var(--bg-color);
  --el-menu-text-color: var(--text-color);
  --el-menu-hover-bg-color: transparent;
  --el-menu-item-height: 32px;
  --el-menu-sub-item-height: 24px;
  --text-color-btn-hover: var(---active-color);
}
</style>
