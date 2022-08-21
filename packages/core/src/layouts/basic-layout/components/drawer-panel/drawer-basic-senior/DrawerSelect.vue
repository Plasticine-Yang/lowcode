<template>
  <div>
    <n-select
      v-model:value="element.componentProps.value"
      v-bind="transformComponentProps((element as any))"
      :options="options"
    ></n-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDrawerComponentPropsTransformer } from '@/hooks'
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
            value: (i + options.length + 1).toString(),
            disabled: false,
          })
        }
      }

      return options
    })
    const transformComponentProps = useDrawerComponentPropsTransformer()
    return { options, transformComponentProps }
  },
})
</script>

<style scoped></style>
