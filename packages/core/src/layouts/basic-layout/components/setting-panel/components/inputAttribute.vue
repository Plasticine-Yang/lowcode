<!-- 自定义右侧面板输入组件 -->

<template>
  <div>
    <n-input v-model:value="componentProps[keyname]" @keydown.enter.prevent />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrawer } from '@/store'
interface Props {
  keyname: string
}
const drawer = ref(useDrawer())
const props = defineProps<Props>()
let componentProps = ref(drawer.value.activeComponent?.componentProps || {})
let componentPropsMeta = ref(
  drawer.value.activeComponent?.componentPropsMeta || {},
)
</script>
