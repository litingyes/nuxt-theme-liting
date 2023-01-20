<!--
 * @Date: 2023-01-02 08:59:25
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-20 17:05:30
 * @FilePath: /nuxt-theme-liting/layouts/default.vue
-->
<script lang="ts" setup>
const themeConfig = useThemeConfig()

const { page } = useContent()
const sidebar = page.value?.sidebar ?? true
const toc = page.value?.toc ?? true

const sidebarRef = ref()
const tocRef = ref()
const sidebarVisible = ref(false)
const tocVisible = ref(false)

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
        class="hidden sm:block fixed top-16 left-0 pt-8 z-10 bg-[var(--bg-color)] animate__animated animate__slideInLeft sm:animate-none"
        :class="{ '!block': sidebarVisible }"
        :show="sidebar"
      ></LitingSidebar>
      <div class="i-mdi:list-box fixed sm:hidden left-2 bottom-4 text-2xl cursor-pointer" @click="sidebarVisible = true"></div>
      <ContentDoc>
        <template #default="{ doc }">
          <div class="default-layout__content mx-0 sm:mx-50 p-4">
            <ContentRenderer :value="doc" />
            <div class="my-4 flex justify-end">
              <div v-if="themeConfig.lastUpdateTime && page.unixCommitter"
                >{{ themeConfig.lastUpdateTime.text }} :
                {{ format(page.unixCommitter * 1000, themeConfig.lastUpdateTime.format as string) }}</div
              >
            </div>
          </div>
        </template>
        <template #not-found>
          <h1 class="default-layout__content--404 mx-0 sm:mx-50 p-4">Document not found</h1>
        </template>
      </ContentDoc>
      <LitingToc
        ref="tocRef"
        class="hidden sm:block fixed top-16 right-0 pt-12 z-10 bg-[var(--bg-color)] animate__animated animate__slideInRight sm:animate-none"
        :class="{ '!block': tocVisible }"
        :show="toc"
        :toc="page?.body?.toc"
      ></LitingToc>
      <div class="i-ph:list-bold fixed sm:hidden right-2 bottom-4 text-2xl cursor-pointer" @click="tocVisible = true"></div>
    </main>
  </div>
</template>
