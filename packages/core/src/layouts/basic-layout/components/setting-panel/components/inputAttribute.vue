<!-- 自定义右侧面板输入组件 -->

<template>
  <div>
    <n-input
      v-model:value="componentProps[keyname]"
      :disabled="isDisabled"
      @keydown.enter.prevent
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useDrawer } from '@/store'
interface Props {
  keyname: string
  isDisabled: boolean
}
const drawer = ref(useDrawer())
const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
})

let componentProps = computed(
  () => drawer.value.activeComponent?.componentProps || {},
)
</script>
