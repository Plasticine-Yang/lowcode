<template>
  <div
    contenteditable="true"
    class="drawerText"
    v-bind="transformComponentProps((element as any))"
  >
    {{ element.componentProps.inputText }}
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

<style scoped>
.drawerText {
  min-height: 30px;
  line-height: 30px;
}
</style>
