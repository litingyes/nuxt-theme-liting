<!--
 * @Date: 2023-01-15 11:47:08
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-15 17:39:48
 * @FilePath: /nuxt-theme-liting/layouts/tag.vue
-->
<script lang="ts" setup>
let pages: Array<Partial<Theme.PageInfo>> = await queryContent('/').only(THEME_QUERY_ONLY).sort({ unixAuthor: -1 }).find()
pages = pages.filter((page) => page.title && page.unixAuthor)

const tags = computed(() => {
  const tags: string[] = ['all']
  pages.forEach((page) => {
    if (page.tags?.length) {
      page.tags.forEach((tag: string) => {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      })
    }
  })
  tags.push('other')
  return tags
})

interface TagItem {
  tag: string
  total: number
  list: Array<Partial<Theme.PageInfo>>
}

const pagesData = computed(() => {
  const data: Record<string, TagItem> = {}

  if (!tags.value) return {}

  tags.value.forEach((tag) => {
    data[tag] = { tag, list: [], total: 0 }
  })

  data.all.tag = 'all'
  data.all.list = pages
  data.all.total = pages.length

  pages.forEach((page) => {
    if (page.tags?.length) {
      page.tags.forEach((tag) => {
        data[tag].list.push(page)
        data[tag].total++
      })
    } else {
      data.other.list.push(page)
      data.other.total++
    }
  })
  return data
})

const selectedTag = ref(tags.value[0])
</script>

<template>
  <div class="tag-layout pt-16">
    <ul class="w-xl mx-auto mt-16 mb-8 list-none flex items-center gap-2 flex-wrap">
      <li
        v-for="tag in pagesData"
        :key="tag.tag"
        class="px-2 py-1 inline-block cursor-pointer text-sm shadow-md bg-emerald-200 hover:bg-emerald-300 rounded-lg dark:bg-slate-900 hover:dark:bg-slate-600 transition-colors duration-300"
        :class="[selectedTag === tag.tag ? '!bg-emerald-300 !dark:bg-slate-600' : '']"
        @click="selectedTag = tag.tag"
      >
        <span>{{ tag.tag }} {{ tag.total }}</span></li
      >
    </ul>
    <PageList :list="pagesData[selectedTag].list"></PageList>
  </div>
</template>
