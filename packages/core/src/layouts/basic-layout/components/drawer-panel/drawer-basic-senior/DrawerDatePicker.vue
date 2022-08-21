<!-- 
  时间选择器
 -->
<template>
  <n-date-picker
    v-model:value="element.componentProps!.value"
    v-bind="transformComponentProps((element as any))"
  ></n-date-picker>
</template>

<script setup lang="ts">
import { useDrawerComponentPropsTransformer } from '@/hooks'
import { reactive } from 'vue'
const props = defineProps<{ element: IField }>()
const element = reactive(props.element)
const transformComponentProps = useDrawerComponentPropsTransformer()
</script>

<style scoped>
.drawer-checkbox {
  display: flex;
  justify-content: space-around;
}
</style>
