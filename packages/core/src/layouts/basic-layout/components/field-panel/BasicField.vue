<script setup lang="ts">
import { reactive } from 'vue'
import type { FieldItemProps } from './FieldItem.vue'

// 后续在此添加配置或将其抽离
const fieldItemList = reactive<FieldItemProps[]>([
  {
    id: 1,
    fieldName: '单行输入',
    type: 'input',
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
    type: 'textarea',
    iconName: 'bi:textarea-resize',
    options: {},
  },
  {
    id: 3,
    fieldName: '单选项',
    type: 'checkbox',
    iconName: 'bi:textarea-resize',
    options: {},
  },
  {
    id: 4,
    fieldName: '多选项',
    type: 'selectbox',
    iconName: 'bx:select-multiple',
    options: {},
  },
])
</script>

<template>
  <!-- TODO 字段面板中的字段不应该被修改顺序
      所以使用 v-model 但是拖拽的过程的预览效果还是会移动的，这个需要修复 -->
  <draggable
    v-model="fieldItemList"
    item-key="fieldName"
    group="basic-field"
    :sort="false"
    class="grid grid-cols-2 gap-8px"
  >
    <template #item="{ element }">
      <field-item
        :id="element.id"
        :options="element.options"
        :field-name="element.fieldName"
        :icon-name="element.iconName"
        :type="element.type"
      />
    </template>
  </draggable>
</template>
