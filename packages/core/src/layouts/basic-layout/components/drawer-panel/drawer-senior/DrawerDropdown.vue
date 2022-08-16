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
      //需要的长度
      const length = props.element.componentProps.optionsLength
      //options原本的长度
      const options: any = props.element.componentProps.options
      if (options.length > length) {
        options.length = length
      } else {
        const add = length - options.length
        const optionsLength = options.length
        for (let i = 0; i < add; i++) {
          options.push({
            label: `第${i + optionsLength + 1}行显示内容，可点击`,
            key: i + options.length + 1,
            disabled: false,
          })
        }
      }

      return options
    })
    return { options }
  },
})
</script>

<style scoped></style>
