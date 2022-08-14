<template>
  <draggable
    v-model="fieldItemList"
    :group="basicFieldGroup"
    :sort="false"
    :clone="transformFieldToDrawer"
    item-key="fileName"
  >
    <template #item="{ element }">
      <component
        :is="element.componentDisplay"
        style="margin-bottom: 10px"
      ></component></template
  ></draggable>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive } from 'vue'
import { seniorFields } from '@/settings'
import { basicFieldGroup } from '@/utils'
import transformFieldToDrawer from '@/utils/transformFieldToDrawer'
import resolveComponents from './resolveComponents'

export default defineComponent({
  components: {
    ...resolveComponents,
  },
  setup() {
    const fieldItemList = reactive(seniorFields)
    const carouselImgList = [
      '@/assets/lb/lb1.png',
      '@/assets/lb/lb2.png',
      '@/assets/lb/lb3.png',
    ]
    return {
      fieldItemList,
      basicFieldGroup,
      transformFieldToDrawer,
      lbList: carouselImgList,
    }
  },
})
</script>

<style scoped></style>
