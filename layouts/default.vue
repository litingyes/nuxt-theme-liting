<!--
 * @Date: 2023-01-02 08:59:25
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-17 21:10:57
 * @FilePath: /nuxt-theme-liting/layouts/default.vue
-->
<script lang="ts" setup>
const themeConfig = useThemeConfig()

const { page } = useContent()
const sidebar = page.value?.sidebar ?? true
const toc = page.value?.toc ?? true

const sidebarRef = ref()
const contentRef = ref()
const tocRef = ref()
const sidebarVisible = ref(false)
const tocVisible = ref(false)
useSwipe(contentRef, {
  onSwipeEnd(_, direction) {
    if (direction === 'RIGHT') {
      sidebarVisible.value = true
      tocVisible.value = false
    } else if (direction === 'LEFT') {
      tocVisible.value = true
      sidebarVisible.value = false
    }
  },
})
onClickOutside(sidebarRef, () => {
  sidebarVisible.value = false
})
onClickOutside(tocRef, () => {
  tocVisible.value = false
})
</script>

<template>
  <div class="default-layout pt-20 px-6">
    <main>
      <LitingSidebar
        ref="sidebarRef"
        class="hidden sm:block fixed top-16 left-0 sm:left-6 pt-8"
        :class="{ block: sidebarVisible }"
        :show="sidebar"
      ></LitingSidebar>
      <ContentDoc v-slot="{ doc }">
        <div ref="contentRef" class="default-layout__content mx-0 sm:mx-50 p-4">
          <ContentRenderer :value="doc" />
          <div class="my-4 flex justify-end">
            <div v-if="themeConfig.lastUpdateTime && page.unixCommitter"
              >{{ themeConfig.lastUpdateTime.text }} :
              {{ format(page.unixCommitter * 1000, themeConfig.lastUpdateTime.format as string) }}</div
            >
          </div>
        </div>
      </ContentDoc>
      <LitingToc
        ref="tocRef"
        class="hidden sm:block fixed top-16 right-0 pt-12"
        :class="{ block: tocVisible }"
        :show="toc"
        :toc="page?.body?.toc"
      ></LitingToc>
    </main>
  </div>
</template>
