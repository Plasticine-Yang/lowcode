<template>
  <div>
    <n-form
      ref="formRef"
      :label-width="80"
      label-placement="left"
      style="width: 100%"
    >
      <template v-for="(sub, index) in element.children" :key="index">
        <grid-preview
          v-if="sub.componentName == 'drawerGrid'"
          :list="sub"
        ></grid-preview>
        <flex-preview
          v-else-if="sub.componentName == 'drawerFlex'"
          :element="sub"
        ></flex-preview>
        <collapse-preview
          v-if="sub.componentName == 'drawer-collapse'"
          :element="sub"
        ></collapse-preview>
        <!-- 表单项 -->
        <form-item-preview
          :is="sub.componentName"
          v-if="sub.componentName == 'drawerFormItem'"
          :element="sub"
        ></form-item-preview>
        <!-- 基本组件 -->
        <component
          :is="sub.componentName"
          v-else-if="sub.type == 'basic'"
          v-bind="sub.componentProps"
        ></component>
        <!-- 经过再封装的基本组件 -->
        <component
          :is="sub.componentName"
          v-else-if="sub.type == 'basic-senior'"
          :element="sub"
        ></component>
      </template>
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import resolveComponents from '../../resolveComponents'
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
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
