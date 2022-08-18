<!-- 
  复选框二次封装
 -->
<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi v-for="i in element.componentProps!.options" :key="i.key">
      <n-checkbox :label="i.label || 'default'"></n-checkbox>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const props = defineProps<{ element: IField }>()
const element = reactive(props.element)
</script>

<style scoped></style>
