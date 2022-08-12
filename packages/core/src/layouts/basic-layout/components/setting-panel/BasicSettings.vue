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
      :label="componentPropsMeta[key].name"
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
import {
  inputAttribute,
  inputNumberAttribute,
  sliderAttribute,
  selectAttribute,
} from './components/index'
import { NSwitch, NInput } from 'naive-ui'
export default {
  components: {
    inputAttribute, // 输入框
    inputNumberAttribute, // 选择输入框
    sliderAttribute, //滑块
    selectAttribute, // 选择器
    NSwitch,
    NInput,
  },
}
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useDrawer } from '@/store'
const drawer = ref(useDrawer())
let componentProps = computed(() => {
  return drawer.value.activeComponent?.componentProps || {}
})
let componentPropsMeta = computed(() => {
  return drawer.value.activeComponent?.componentPropsMeta || {}
})
const rules = {
  type: {},
}
</script>
