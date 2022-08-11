<template>
  <div>
    <n-divider v-bind="element.componentProps">{{
      element.componentProps.dividerText
    }}</n-divider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
