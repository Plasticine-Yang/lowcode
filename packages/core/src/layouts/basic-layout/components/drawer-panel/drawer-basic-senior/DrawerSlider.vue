<template>
  <div>
    <n-slider
      v-if="element.componentProps.range"
      v-bind="transformComponentProps((element as any))"
      v-model:value="rangeTrue"
    ></n-slider>
    <n-slider
      v-if="!element.componentProps.range"
      v-bind="transformComponentProps((element as any))"
      v-model:value="rangeFalse"
    ></n-slider>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
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
    const rangeFalse = ref(0)
    const rangeTrue = ref([
      props.element.componentProps.min,
      props.element.componentProps.max,
    ])
    props.element.componentProps.value = computed(() => {
      if (props.element.componentProps.range) {
        return rangeTrue
      } else {
        return rangeFalse
      }
    })
    const transformComponentProps = useDrawerComponentPropsTransformer()
    return { rangeFalse, rangeTrue, transformComponentProps }
  },
})
</script>

<style scoped></style>
