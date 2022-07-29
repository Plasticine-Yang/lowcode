<!-- 
  input-widget.vue 单行输入控件
 -->
<template>
  <div class="input-widget">
    <div class="label-name">{{ field.options.labelName }}</div>
    <n-input
      :type="field.options.type"
      v-model="inputValue"
      :placeholder="field.options.placeholder"
      :readonly="field.options.readonly"
      :max-width="field.options.maxWidth"
      :min-width="field.options.minWidth"
      :clearable="field.options.clearable"
    ></n-input>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import EventBus from '@/lib/bus.js'

interface InputOptions {
  placeholder: string
  minWidth: string
  maxWidth: string
  clearable: boolean
  showPassword: boolean
  type: string // 这个type表示input框是 text 还是 password之类的
  readonly: boolean
  disabled: boolean
  labelName: string
}

interface Field {
  options: InputOptions
}
interface Props {
  // 存放组件配置信息
  field: Field
  // 父级控件
  // parentWidget: Object
  // 在父级控件子组件中的序号
  // indexOfParentList: Number
  // designer: Object

  // designState: {
  //   type: Boolean
  //   default: false
  // }
}
// 每个组件保存唯一一份配置
const props = defineProps<Props>()

// 输入框文本信息
const inputValue = ref<string>('')

// 校验规则
const rules = ref([])
</script>

<style scoped>
.input-widget {
  display: flex;
  height: 38px;
  padding: 4px;
  margin-bottom: 10px;
}

.label-name {
  width: 70px;
  line-height: 30px;
}
</style>
