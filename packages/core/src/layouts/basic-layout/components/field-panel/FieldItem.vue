<script setup lang="ts">
/* eslint-disable no-alert */
export interface FieldItemProps {
  // 字段 id 用于唯一标识字段
  id: number
  // 字段名
  fieldName: string
  // iconify图标名: https://icon-sets.iconify.design/
  iconName?: string
  type: string
  options?: object
}

defineProps<FieldItemProps>()
</script>

<template>
  <n-tag :bordered="false" class="cursor-move w-full flex-1">
    {{ fieldName }}
    <template v-if="iconName !== undefined" #icon>
      <icon :icon="iconName" :inline="true" />
    </template>
  </n-tag>
</template>
