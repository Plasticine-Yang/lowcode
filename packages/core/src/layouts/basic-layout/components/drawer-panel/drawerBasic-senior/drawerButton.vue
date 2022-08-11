<template>
  <div>
    <n-button v-bind="element.componentProps">{{
      element.componentProps.Buttontext
    }}</n-button>
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
