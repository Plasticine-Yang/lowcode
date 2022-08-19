<!-- 表单项可以放入输入组件 -->
<template>
  <div>
    <n-form-item
      :label="element.componentProps.label"
      v-bind="element.componentProps"
    >
      <draggable
        :list="element.children"
        :group="drawerGroup"
        :animation="300"
        item-key="id"
        class="wh-full bg-white"
        ghost-class="ghost"
        :disabled="disabled"
        handle=".drag-handler"
        ><template #item="{ element }">
          <item-wrapper
            :drag-handler-name="element.dragHandlerName"
            :component-id="element.id"
          >
            <component
              :is="element.componentName"
              v-if="element.type == 'basic'"
              v-bind="element.componentProps"
            ></component>
            <component
              :is="element.componentName"
              v-if="element.type == 'basic-senior'"
              :element="element"
            ></component> </item-wrapper></template></draggable
    ></n-form-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import { useDrawer, useTheme } from '@/store'
import { drawerGroup } from '@/utils'
import resolveComponents from '../resolveComponents'
import { formInitial } from '@/settings/contain-fields/form'
export default defineComponent({
  components: {
    ...resolveComponents,
  },
  props: {
    element: {
      type: Object,
      default: () => {
        return {}
      },
    },
    formValue: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  emits: ['changeDate'],
  setup(props, context) {
    const disabled = computed(() => {
      if (props.element.children.length > 0) {
        return true
      } else {
        return false
      }
    })
    watch(
      props.element.children,
      (newVal, oldVal) => {
        if (newVal.length > 0) {
          props.element.componentProps.value = ref(
            props.element.children[0].componentProps.value,
          )
        }
      },
      { deep: true },
    )
    watch(props.element.componentProps, (newVal, oldVal) => {
      if (newVal.independent) {
        props.element.componentProps = {
          ...formInitial.componentProps,
          ...props.element.componentProps,
        }
        props.element.componentPropsMeta = {
          ...formInitial.componentPropsMeta,
          ...props.element.componentPropsMeta,
        }
      }
    })
    return { drawerGroup, disabled }
  },
})
</script>

<style scoped></style>
