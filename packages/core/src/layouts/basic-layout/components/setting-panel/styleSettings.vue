<template>
  <n-form
    id="styleFrom"
    ref="formRef"
    :model="model"
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
import { ref, computed, Ref, watch, onMounted } from 'vue'
import { useDrawer } from '@/store'

const drawer = ref(useDrawer())

const rules = {
  type: {},
}

interface Style {
  name: string
  value: string | number | null
  fieldComponent: string
  // 单位，用于简单检测输入内容例如width只输入数字
  unit?: string
}

// 预设样式属性
let model: Ref<Record<string, Style>> = ref({
  width: {
    name: '宽度',
    value: null,
    fieldComponent: 'n-input',
    unit: 'px',
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
    fieldComponent: 'n-input',
  },
})

let activeComponent = computed(() => {
  return drawer.value.activeComponent || { style: '' }
})

// 获取已经设置的值
let oddStyle = activeComponent.value.style || ''

// 拆解字符串得到已经设置的值。
let getOddStyle = () => {
  let addarr: string[] = oddStyle.split(';')
  for (const item of addarr) {
    let keyname = item.split(':')[0]
    let value = item.split(':')[1]
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

// 切换activeComponent
watch(activeComponent, () => {
  // 重值model
  model.value = {
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
      fieldComponent: 'n-input',
    },
  }
  getOddStyle()
})

// 点击加号添加事件
let addStyle = () => {
  let styleFrom = document.getElementById('styleFrom')
  console.log(styleFrom)

  // 添加model元素
  // Object.defineProperty(model.value, 'temp', {
  //   value: {
  //     name: '',
  //     value: null,
  //     fieldComponent: 'n-input',
  //   },
  //   configurable: true,
  //   enumerable: true,
  // })
  // let insert = { name: '', style: '' }
  // // 用insertAdjacentHTML，不能解析n-input
  // let insertStr = `<input v-model:value="insert.name" placeholder="请输入样式名称"/>
  //           <input v-model:value="insert.name" placeholder="请输入样式"/>`
  // let t = styleFrom.insertAdjacentHTML('beforeend', insertStr)
  // console.log(t)
  // 把输入内容放进model中
  // 输入样式，输入值，全部采用n-input 的方式
}

let stylStr = computed(() => {
  // 遍历样得到样式字符串
  let str: string = ''
  Object.keys(model.value).forEach(k => {
    if (model.value[k].value != null) {
      str += `${k}:${model.value[k].value};`
    }
  })
  return str
})

watch(stylStr, () => {
  activeComponent.value.style = stylStr.value
})
let formRef = ref(null) // 得到表单元素
onMounted(() => {})
</script>

<style scoped>
.add {
  width: 22px;
  height: 22px;
}
</style>
