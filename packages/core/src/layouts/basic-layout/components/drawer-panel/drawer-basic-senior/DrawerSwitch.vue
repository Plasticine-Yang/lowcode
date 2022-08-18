<template>
  <div>
    <n-switch
      v-bind="element.componentProps"
      v-model:value="element.componentProps.value"
      :style="element.componentProps.style"
    ></n-switch>
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
