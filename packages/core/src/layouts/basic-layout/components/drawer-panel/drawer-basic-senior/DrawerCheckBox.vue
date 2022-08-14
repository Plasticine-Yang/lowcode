<!-- 
  复选框二次封装
 -->
<template>
  <n-grid x-gap="12" :cols="4" class="border">
    <n-gi
      v-for="i in element.componentProps!.number"
      :key="i"
      class="drawer-checkbox"
    >
      <n-checkbox></n-checkbox>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const props = defineProps<{ element: IField }>()
const element = reactive(props.element)
</script>

<style scoped>
.drawer-checkbox {
  display: flex;
  justify-content: space-around;
}
</style>
