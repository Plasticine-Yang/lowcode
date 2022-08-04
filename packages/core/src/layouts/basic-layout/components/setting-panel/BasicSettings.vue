<template>
  <n-form
    ref="formRef"
    :model="componentProps"
    label-placement="left"
    :rules="rules"
  >
    <n-form-item
      v-for="(item, key, index) in componentPropsMeta"
      :key="index"
      :path="key"
      :label="key"
    >
      <component
        :is="componentPropsMeta[key].fieldComponent"
        v-model:value="componentProps[key]"
        :keyname="key"
      >
      </component>
    </n-form-item>
  </n-form>
</template>

<script lang="ts">
import { inputAttribute } from './components/index'
import { NSwitch, NInput } from 'naive-ui'
export default {
  components: {
    inputAttribute,
    NSwitch,
    NInput,
  },
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrawer } from '@/store'
const drawer = useDrawer()
let componentProps = ref(drawer.activeComponent?.componentProps || {})
let componentPropsMeta = ref(drawer.activeComponent?.componentPropsMeta || {})

const rules = {
  type: {},
}
</script>
