<script setup lang="ts">
import { reactive } from 'vue'
import { basicFieldGroup } from '@/utils'

import { basicFields } from '@/settings'
import transformFieldToDrawer from '@/utils/transformFieldToDrawer.js'

const fieldItemList = reactive<IField[]>(basicFields)
</script>

<template>
  <draggable
    v-model="fieldItemList"
    :group="basicFieldGroup"
    :sort="false"
    :clone="transformFieldToDrawer"
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
        :event-props="element.eventProps"
      />
    </template>
  </draggable>
</template>
