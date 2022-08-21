<!-- 
  数字选择器
 -->
<template>
  <div>
    <n-input-number
      v-model:value="componentProps[keyname]"
      :min="1"
      @keydown.enter.prevent
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrawer } from '@/store'
interface Props {
  keyname: string
}
const drawer = useDrawer()
defineProps<Props>()
let componentProps = ref(drawer.activeComponent?.componentProps || {})
</script>
