<template>
  <div
    contenteditable="true"
    class="drawerText"
    v-bind="element.componentProps"
  ></div>
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

<style scoped>
.drawerText {
  min-height: 30px;
  line-height: 30px;
}
</style>
