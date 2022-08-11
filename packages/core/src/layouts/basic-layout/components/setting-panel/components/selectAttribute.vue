<template>
  <n-space vertical>
    <n-select
      v-model:value="componentProps[keyname]"
      :options="param.selectOptions || []"
    />
  </n-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrawer } from '@/store'
interface Props {
  keyname: string
}
/**
 * 改组件需要传入的参数，selectOptions: string[]
 */

const drawer = useDrawer()
const props = defineProps<Props>()
let componentProps = drawer.activeComponent?.componentProps || {}
let componentPropsMeta: ComponentPropsMeta =
  drawer.activeComponent?.componentPropsMeta || {}
let param = componentPropsMeta[props.keyname]?.fieldComponentParam || {}
</script>

<style scoped>
.n-select {
  min-width: 100px;
  max-width: 200px;
}
</style>
