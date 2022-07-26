<script setup lang="ts">
interface Props {
  // 字段名
  fieldName: string
  // iconify图标名: https://icon-sets.iconify.design/
  iconName?: string
}

defineProps<Props>()
</script>

<template>
  <n-tag :bordered="false" class="cursor-pointer flex-1">
    {{ fieldName }}
    <template v-if="iconName !== undefined" #icon>
      <icon :icon="iconName" :inline="true" />
    </template>
  </n-tag>
</template>
