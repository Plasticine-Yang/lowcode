<script setup lang="ts">
import { reactive } from 'vue'
import { basicFieldGroup } from '@/utils'
import { generateId } from '@/utils'

import { basicFields } from '@/settings'

const fieldItemList = reactive<IField[]>(basicFields)

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
const handleClone = ({
  componentName,
  fieldName,
  componentProps,
}: IField): DrawerComponent => {
  return {
    id: generateId(),
    componentName,
    dragHandlerName: fieldName,
    componentProps,
  }
}
</script>

<template>
  <draggable
    v-model="fieldItemList"
    :group="basicFieldGroup"
    :sort="false"
    :clone="handleClone"
    item-key="fieldName"
    class="grid grid-cols-2 gap-8px"
  >
    <template #item="{ element }">
      <field-item
        :id="element.id"
        :field-name="element.fieldName"
        :icon-name="element.iconName"
        :component-name="element.componentName"
        :component-prpos="element.componentProps"
      />
    </template>
  </draggable>
</template>
