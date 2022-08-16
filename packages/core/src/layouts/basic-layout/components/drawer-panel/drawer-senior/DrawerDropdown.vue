<template>
  <n-dropdown
    trigger="hover"
    v-bind="element.componentProps"
    :options="options"
  >
    <n-button>下拉面板</n-button>
  </n-dropdown>
</template>

<script lang="ts">
import { elementDark } from 'naive-ui'
import { defineComponent, computed } from 'vue'

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
    const options = computed(() => {
      //当长度变化时，options长度也要跟着变成
      const length = props.element.componentProps.optionsLength
      const options: any = props.element.componentProps.options
      // for (let i = 0; i < length; i++) {}
      options.length = length
      return options
    })
    return { options }
  },
})
</script>

<style scoped></style>
