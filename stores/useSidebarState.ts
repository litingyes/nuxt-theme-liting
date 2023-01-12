/*
 * @Date: 2023-01-05 00:22:47
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-13 00:19:33
 * @FilePath: /nuxt-theme-liting/stores/useSidebarState.ts
 */
import { defineStore } from 'pinia'

type SidebarExpanding = string

export const useSidebarState = defineStore('sidebar', () => {
  const expanding = ref<SidebarExpanding>()
  const updateExpanding = (val: SidebarExpanding = '') => {
    expanding.value = val
  }

  return { expanding, updateExpanding }
})
