<template>
  <div>
    <n-input
      v-model:value="element.componentProps.value"
      v-bind="transformComponentProps((element as any))"
    ></n-input>
  </div>
</template>

<script lang="ts">
import { useDrawerComponentPropsTransformer } from '@/hooks'
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
    const transformComponentProps = useDrawerComponentPropsTransformer()

    return { transformComponentProps }
  },
})
</script>
