<!-- 自定义右侧面板输入组件 -->

<template>
  <div>
    <n-input
      v-model:value="componentProps[keyname]"
      @keydown.enter.prevent
      @blur="change(componentProps[keyname], keyname)"
    />
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
const change = (e: any, keyname: any) => {
  console.log(e)
  console.log(keyname)
}
let componentPropsMeta = ref(
  drawer.value.activeComponent?.componentPropsMeta || {},
)
</script>
