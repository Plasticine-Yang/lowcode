<script setup lang="ts">
import type { FieldItemProps } from './FieldItem.vue'
import { reactive } from 'vue'
import { basicFieldGroup } from '@/utils'
import { generateId } from '@/utils'

// 后续在此添加配置或将其抽离
const fieldItemList = reactive<FieldItemProps[]>([
  {
    id: 1,
    fieldName: '单行输入',
    name: 'n-input',
    iconName: 'lucide:text-cursor-input',
    options: {
      type: 'text',
      placeholder: '',
      minWidth: '',
      maxWidth: '',
      clearable: false,
      showPassword: false,
      readonly: false,
      disabled: false,
      labelName: '单行输入',
    },
  },
  {
    id: 2,
    fieldName: '多行输入',
    name: 'n-input',
    iconName: 'bi:textarea-resize',
    options: {},
  },
  {
    id: 3,
    fieldName: '单选',
    name: 'n-radio',
    iconName: 'bi:textarea-resize',
    options: {},
  },
  {
    id: 4,
    fieldName: '复选框',
    name: 'n-checkbox',
    iconName: 'bx:select-multiple',
    options: {},
  },
])

const handleClone = ({
  name,
  options,
  fieldName,
}: FieldItemProps): DrawerComponent => {
  return {
    id: generateId(),
    name,
    dragHandlerName: fieldName,
    options,
  }
}
</script>

<template>
  <!-- TODO 字段面板中的字段不应该被修改顺序
      所以使用 v-model 但是拖拽的过程的预览效果还是会移动的，这个需要修复 -->
  <draggable
    v-model="fieldItemList"
    item-key="fieldName"
    :group="basicFieldGroup"
    :sort="false"
    :clone="handleClone"
    class="grid grid-cols-2 gap-8px"
  >
    <template #item="{ element }">
      <field-item
        :id="element.id"
        :options="element.options"
        :field-name="element.fieldName"
        :icon-name="element.iconName"
        :name="element.name"
      />
    </template>
  </draggable>
</template>
