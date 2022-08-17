<!-- 表单项可以放入输入组件 -->
<template>
  <div>
    <n-form-item :label="element.componentProps.label">
      <draggable
        :list="element.children"
        :group="drawerGroup"
        :animation="300"
        item-key="id"
        class="wh-full bg-white"
        ghost-class="ghost"
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
import { defineComponent, ref, watch } from 'vue'
import { useDrawer, useTheme } from '@/store'
import { drawerGroup } from '@/utils'
import resolveComponents from '../resolveComponents'
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
  setup(props) {
    // 这里用了watch还是不能输入
    watch(props.element, (newVal, oldVal) => {
      if (newVal.children.length > 0) {
        props.element.componentProps.value =
          props.element.children[0].componentProps.value
      }
    })
    return { drawerGroup }
  },
})
</script>

<style scoped></style>
