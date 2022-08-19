<template>
  <div>
    <n-form-item
      :label="element.componentProps.label"
      style="width: 100%"
      v-bind="element.componentProps"
    >
      <template v-if="element.children.length > 0">
        <component
          :is="element.children[0].componentName"
          v-if="element.children[0].type == 'basic'"
          v-bind="element.children[0].componentProps"
          style="width: 100%"
        ></component>
        <component
          :is="element.children[0].componentName"
          v-if="element.children[0].type == 'basic-senior'"
          :element="element.children[0]"
          style="width: 100%"
        ></component> </template
    ></n-form-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import resolveComponents from '../../resolveComponents'
export default defineComponent({
  components: {
    ...resolveComponents,
  },
  props: {
    element: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
