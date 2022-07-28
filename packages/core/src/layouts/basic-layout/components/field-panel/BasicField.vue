<script setup lang="ts">
import { reactive } from 'vue'
import type { FieldItemProps } from './FieldItem.vue'

const fieldItemList = reactive<FieldItemProps[]>([
  {
    id: 1,
    fieldName: '单行输入',
    iconName: 'lucide:text-cursor-input',
  },
  {
    id: 2,
    fieldName: '多行输入',
    iconName: 'bi:textarea-resize',
  },
  {
    id: 3,
    fieldName: '单选项',
    iconName: 'bi:textarea-resize',
  },
  {
    id: 4,
    fieldName: '多选项',
    iconName: 'bx:select-multiple',
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
    :animation="300"
    class="grid grid-cols-2 gap-8px"
  >
    <template #item="{ element }">
      <field-item
        :id="element.id"
        :field-name="element.fieldName"
        :icon-name="element.iconName"
      />
    </template>
  </draggable>
</template>
