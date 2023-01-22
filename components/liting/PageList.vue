<!--
 * @Date: 2023-01-14 22:58:39
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-22 20:46:06
 * @FilePath: /nuxt-theme-liting/components/liting/PageList.vue
-->
<script lang="ts" setup>
interface Props {
  path?: string
  limit?: number
  list?: Array<Partial<Theme.PageInfo>>
}
const props = withDefaults(defineProps<Props>(), {
  path: '/',
  limit: undefined,
  list: undefined,
})

const { themeConfig } = useThemeConfig()
const { filterPages } = useLocale()
</script>

<template>
  <ul v-if="props.list" class="list-none px-8" v-bind="$attrs">
    <li
      v-for="page in filterPages(props.list)"
      :key="page._path"
      class="my-4 mx-auto max-w-xl shadow-md bg-emerald-200 rounded-lg dark:bg-slate-900"
    >
      <NuxtLink class="block px-6 py-4" :to="page._path">
        <h2 class="text-base font-semibold mb-2">{{ page.title ?? '标题为空' }}</h2>
        <p v-if="page.description" class="text-sm my-2">{{ page.description }}</p>
        <div class="text-right my-2 text-xs"
          >{{ (themeConfig?.lastUpdateTime as Theme.LastUpdateTime).text }} :
          {{
            format(
              (page.unixCommitter as number) * 1000,
              (themeConfig?.lastUpdateTime as Theme.LastUpdateTime).format as string
            )
          }}</div
        >
      </NuxtLink>
    </li>
  </ul>
  <ContentList
    v-else
    v-slot="{ list }"
    :path="props.path"
    :query="{
      only: THEME_QUERY_ONLY,
      sort: [{ unixAuthor: -1 }],
    }"
  >
    <ul class="list-none px-8" v-bind="$attrs">
      <li
        v-for="page in filterPages(list, props.limit)"
        :key="page._path"
        class="my-4 mx-auto max-w-xl shadow-md bg-emerald-200 rounded-lg dark:bg-slate-900"
      >
        <NuxtLink class="block px-6 py-4" :to="page._path">
          <h2 class="text-base font-semibold mb-2">{{ page.title ?? '标题为空' }}</h2>
          <p v-if="page.description" class="text-sm my-2">{{ page.description }}</p>
          <div v-if="themeConfig?.lastUpdateTime && page.unixCommitter" class="text-right my-2 text-xs"
            >{{ (themeConfig?.lastUpdateTime as Theme.LastUpdateTime).text }} :
            {{
              format(
                (page.unixCommitter as number) * 1000,
                (themeConfig?.lastUpdateTime as Theme.LastUpdateTime).format as string
              )
            }}</div
          >
        </NuxtLink>
      </li>
    </ul>
  </ContentList>
</template>
