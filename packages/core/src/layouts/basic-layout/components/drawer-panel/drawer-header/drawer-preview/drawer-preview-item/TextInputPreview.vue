<template>
  <div>
    <div
      v-bind="transformComponentProps((element as any))"
      :style="element.style"
    >
      {{ element.componentProps.inputText }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDrawerComponentPropsTransformer } from '@/hooks'
export default defineComponent({
  props: ['element'],
  setup() {
    const transformComponentProps = useDrawerComponentPropsTransformer()
    return { transformComponentProps }
  },
})
</script>

<style scoped></style>
