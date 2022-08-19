<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi v-for="i in element.componentProps!.options" :key="i.key">
      <n-radio
        :label="i.label || 'default'"
        :checked="checkedValue === i.label"
        :value="i.label"
        :style="element.componentProps!.style"
        @click="handleChange"
      ></n-radio>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const props = defineProps<{ element: IField }>()
const element = reactive<IField>(props.element)

const checkedValue = ref<string | null>(null)
const handleChange = (e: Event) => {
  checkedValue.value = (e.target as HTMLInputElement).value
}
props.element.componentProps!.value = ref(checkedValue)
</script>
