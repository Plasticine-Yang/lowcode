<template>
  <div>
    <n-slider
      v-if="element.componentProps.range"
      v-bind="element.componentProps"
      v-model:value="rangeTrue"
    ></n-slider>
    <n-slider
      v-if="!element.componentProps.range"
      v-bind="element.componentProps"
      v-model:value="rangeFalse"
    ></n-slider>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  props: {
    element: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props) {
    const rangeFalse = ref(0)
    const rangeTrue = ref([
      props.element.componentProps.min,
      props.element.componentProps.max,
    ])

    return { rangeFalse, rangeTrue }
  },
})
</script>

<style scoped></style>
