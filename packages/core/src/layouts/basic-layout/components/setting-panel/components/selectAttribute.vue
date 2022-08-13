<template>
  <n-space vertical>
    <n-select
      v-model:value="componentProps[keyname]"
      :options="param.selectOptions || []"
    />
  </n-space>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useDrawer } from '@/store'
interface Props {
  keyname: string
}
/**
 * 改组件需要传入的参数，selectOptions: [{label: string,value:}]
 */

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

<style scoped>
.n-select {
  min-width: 100px;
  max-width: 200px;
}
</style>
