<!-- 
  复选框二次封装
 -->
<template>
  <n-grid x-gap="12" :cols="10">
    <n-gi v-for="i in element.componentProps!.options" :key="i.key">
      <n-checkbox-group v-model:value="cities">
        <n-checkbox :label="i.label || 'default'" :value="i.key"></n-checkbox>
      </n-checkbox-group>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const props = defineProps<{ element: IField }>()
const element = reactive(props.element)
const cities = ref(null)
</script>

<style scoped></style>
