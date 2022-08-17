<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi v-for="i in element.componentProps!.options" :key="i.key">
      <n-radio
        :label="i.label || 'default'"
        @click="handleChange"
        :checked="checkedValue === i.label"
        :value="i.label"
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
</script>
