<template>
  <div>
    <n-timeline v-bind="element.componentProps">
      <n-timeline-item
        v-for="(item, index) in options"
        :key="index"
        :type="item.type"
        :title="item.title"
        :content="item.content"
        :time="item.time"
      ></n-timeline-item>
    </n-timeline>
  </div>
</template>

<script lang="ts">
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
      const length = props.element.componentProps.optionsLength
      const options = props.element.componentProps.options
      if (options.length > length) {
        options.length = length
      } else {
        const add = length - options.length
        const optionsLength = options.length
        for (let i = 0; i < add; i++) {
          options.push({
            type: 'default',
            title: '时间线标题',
            content: '时间线内容',
            time: '时间线时间',
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
