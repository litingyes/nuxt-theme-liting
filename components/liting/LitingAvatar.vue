32124<!--
 * @Date: 2023-01-01 20:30:36
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2023-01-01 21:03:03
 * @FilePath: /nuxt-theme-liting/components/liting/LitingAvatar.vue
-->
<script lang="ts" setup>
interface Props {
  url?: string
  round?: boolean
  size?: 'large' | 'medium' | 'small'
}

const props = withDefaults(defineProps<Props>(), {
  url: '/avatar.jpg',
  round: true,
  size: 'medium',
})
</script>

<template>
  <div class="liting-avatar">
    <img
      :src="url"
      class="border-solid border-0 border-orange-300 transition-all hover:border-4 hover:animate-spin"
      :class="[
        props.size === 'large' ? 'w-24 h-24' : props.size === 'medium' ? 'w-16 h-16' : 'w-8 h-8',
        props.round ? 'rounded-full' : 'rounded-none',
      ]"
    />
  </div>
</template>
