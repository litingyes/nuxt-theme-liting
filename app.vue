<!--
 * @Date: 2022-12-31 14:51:13
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-22 18:16:17
 * @FilePath: /nuxt-theme-liting/app.vue
-->
<script setup lang="ts">
const themeConfig = useAppConfig().theme
const { updateThemeConfig } = useThemeConfig()
updateThemeConfig(themeConfig)

onMounted(() => {
  const { disabled, langs, setLang } = useLocale()
  if (!disabled.value) {
    const lang = useLocalStorage('nuxt-theme-liting__locale', langs?.value[0])
    setLang && setLang(lang.value as string)
  }
})
</script>

<template>
  <div class="nuxt-theme-liting w-screen h-screen">
    <LitingHeader></LitingHeader>
    <NuxtPage />
  </div>
</template>
