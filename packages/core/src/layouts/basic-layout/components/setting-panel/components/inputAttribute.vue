<template>
  <div>
    <n-input v-model:value="model[indexes]" @keydown.enter.prevent />
    <span>{{ attribute.name }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrawer } from '@/store'

const drawer = useDrawer()
// let model = ref(drawer.activeComponent?.options || {})
let model = drawer.activeComponent?.options || {}
const props = defineProps<Props>()

// type keys = keyof typeof model
// const key: keys = props.indexes
// console.log([...keys])
</script>
