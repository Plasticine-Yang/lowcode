<template>
  <div>
    <n-button v-bind="transformComponentProps(element)">{{
      element.componentProps.Buttontext
    }}</n-button>
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

<style scoped></style>
