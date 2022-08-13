<template>
  <n-form
    ref="formRef"
    :model="activeComponent.style"
    label-placement="left"
    :rules="rules"
  >
    <n-form-item
      v-for="(item, key, index) in model"
      :key="index"
      :path="key"
      :label="model[key].name"
    >
      <component
        :is="model[key].fieldComponent"
        v-model:value="model[key].value"
        :keyname="key"
      >
      </component>
    </n-form-item>
  </n-form>
  <div class="add-style">
    <div class="i-carbon:add add" title="添加样式" @click="addStyle"></div>
  </div>
</template>

<script lang="ts">
import Attribute from './components'
import { NInputNumber, NColorPicker, NInput } from 'naive-ui'
import { keysOf } from 'naive-ui/es/_utils'
export default {
  components: {
    ...Attribute,
    NInputNumber,
    NColorPicker,
    NInput,
  },
}
</script>

<script lang="ts" setup>
import { ref, computed, Ref } from 'vue'
import { useDrawer } from '@/store'

const drawer = ref(useDrawer())

const rules = {
  type: {},
}

interface Style {
  name: string
  value: string | number | null
  fieldComponent: string
}

// 预设样式属性
let model: Ref<Record<string, Style>> = ref({
  width: {
    name: '宽度',
    value: null,
    fieldComponent: 'n-input',
  },
  height: {
    name: '高度',
    value: null,
    fieldComponent: 'n-input',
  },
  backgroundColor: {
    name: '背景颜色',
    value: null,
    fieldComponent: 'n-color-picker',
  },
  color: {
    name: '填充颜色',
    value: null,
    fieldComponent: 'n-color-picker',
  },
  fontSize: {
    name: '字体大小',
    value: null,
    fieldComponent: 'n-input-number',
  },
})

let activeComponent = computed(() => {
  return drawer.value.activeComponent || { style: '' }
})
// 获取已经设置的值
let oddStyle = activeComponent.value.style

// 拆解字符串得到已经设置的值。
let getOddStyle = () => {
  let addarr: string[] = oddStyle.split(';')
  for (const item of addarr) {
    let keyname = item.split(':')[0]
    let value = item.split(':')[1]
    console.log(addarr, item)

    // 该属性存在则赋值
    if (model.value.hasOwnProperty(keyname)) {
      model.value[keyname].value = value
    } else if (item != '') {
      // 不存在则添加
      let styleItem: Style = {
        name: keyname,
        value: value,
        fieldComponent: 'n-input',
      }
      model.value[keyname] = styleItem
    }
  }
}
getOddStyle()

// 点击加号添加事件
let addStyle = () => {}

let stylStr = computed(() => {
  console.log(model.value)
  // 遍历样得到样式字符串
  let str: string = ''
  Object.keys(model.value).forEach(k => {
    if (model.value[k].value != null) {
      str += `${k}:${model.value[k].value};`
    }
  })
  console.log('value', str, activeComponent.value.style)
  return str
})
activeComponent.value.style = stylStr.value
</script>

<style scoped>
.add {
  width: 22px;
  height: 22px;
}
</style>
