<template>
  <draggable
    v-model="fieldItemList"
    :group="basicFieldGroup"
    :sort="false"
    :clone="transformFieldToDrawer"
    item-key="fileName"
    class="grid grid-cols-2 gap-8px"
  >
    <template #item="{ element }">
      <field-item
        :id="element.id"
        :field-name="element.fieldName"
        :icon-name="element.iconName"
        :component-name="element.componentName"
        :component-props="element.componentProps"
        :children="element.children"
      ></field-item></template
  ></draggable>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive } from 'vue'
import { containFields } from '@/settings'
import { basicFieldGroup } from '@/utils'
import transformFieldToDrawer from '@/utils/transformFieldToDrawer'
export default defineComponent({
  setup() {
    const fieldItemList = reactive(containFields)
    return { fieldItemList, basicFieldGroup, transformFieldToDrawer }
  },
})
</script>

<style scoped></style>
