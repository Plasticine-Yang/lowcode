<!-- 自定义右侧面板输入组件 -->

<template>
  <div>
    <n-slider
      v-model:value="componentProps[keyname]"
      :step="param.step || 1"
      :max="param.maxNum"
      :min="param.minNum || 0"
    />
    <n-input-number
      v-model:value="componentProps[keyname]"
      size="small"
      :max="param.maxNum"
      :min="param.minNum || 0"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useDrawer } from '@/store'

interface Props {
  keyname: string
}
type silderParam = {
  // 定义一下在fieldComponentParam中使用该组件可以填写的参数，并没有使用
  maxNum?: number // 最大值
  minNum?: number // 最小值
  step?: number // 滑动灵敏度
}

const drawer = ref(useDrawer())
const props = defineProps<Props>()
let componentProps = computed(() => {
  return drawer.value.activeComponent?.componentProps || {}
})
let componentPropsMeta = computed(() => {
  return drawer.value.activeComponent?.componentPropsMeta || {}
})
let param = componentPropsMeta.value[props.keyname]?.fieldComponentParam || {}
</script>
