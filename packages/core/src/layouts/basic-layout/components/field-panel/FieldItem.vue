<script setup lang="ts">
import { useTheme } from '@/store'
import { computed } from 'vue'
// 由于 vue3 目前还不支持将外部的接口传入 defineProps
// 所以这里存在重复定义接口的问题 -- Props 和 IField 重复定义
export interface Props {
  // 字段 id 用于唯一标识字段
  id: number
  // 对应的 naive-ui 组件名
  componentName: string
  // 字段名
  fieldName: string
  // iconify图标名: https://icon-sets.iconify.design/
  iconName?: string
  // 组件 props
  componentProps?: Record<string, any>
}

defineProps<Props>()

const theme = computed(() => useTheme().theme)
console.log(theme)
</script>

<template>
  <n-tag :bordered="false" class="cursor-move w-full flex-1">
    {{ fieldName }}
    <template v-if="iconName !== undefined" #icon>
      <icon
        :icon="iconName"
        :inline="true"
        :class="{ 'common-util': theme == 'blue' || theme == 'candy' }"
      />
    </template>
  </n-tag>
</template>
