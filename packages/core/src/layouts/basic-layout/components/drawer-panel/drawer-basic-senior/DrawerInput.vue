<template>
  <div>
    <n-input
      v-model:value="element.componentProps.value"
      v-bind="element.componentProps"
    ></n-input>
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
