<template>
  <div>
    <n-switch
      v-bind="transformComponentProps((element as any))"
      v-model:value="element.componentProps.value"
      :style="element.componentProps.style"
    ></n-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
  setup() {
    const transformComponentProps = useDrawerComponentPropsTransformer()
    return { transformComponentProps }
  },
})
</script>

<style scoped></style>
