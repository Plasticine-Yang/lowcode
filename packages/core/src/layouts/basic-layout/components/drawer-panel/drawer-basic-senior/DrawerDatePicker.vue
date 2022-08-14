<!-- 
  复选框二次封装
 -->
<template>
  <n-date-picker
    v-model:value="element.componentProps!.value"
    :type="element.componentProps!.type"
  ></n-date-picker>
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
