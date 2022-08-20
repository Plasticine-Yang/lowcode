<!-- 预览里面容器的代码 -->
<template>
  <div>
    <div v-for="(item, index) in components" :key="index">
      <flex-preview
        v-if="item.componentName == 'drawerFlex'"
        :element="item"
      ></flex-preview>
      <grid-preview
        v-if="item.componentName == 'drawerGrid'"
        :list="item"
      ></grid-preview>
      <collapse-preview
        v-if="item.componentName == 'drawer-collapse'"
        :element="item"
      ></collapse-preview>
      <form-preview
        v-if="item.componentName == 'drawerForm'"
        :element="item"
      ></form-preview>
      <tab-preview
        v-if="item.componentName == 'DrawerTabs'"
        :element="item"
      ></tab-preview>
      <component
        :is="item.componentName"
        v-else-if="item.type == 'basic'"
        v-bind="item.componentProps"
        style="margin: 10px 0"
        class="preview"
      ></component>
      <component
        :is="item.componentName"
        v-else
        :element="item"
        class="preview"
        :style="item.style"
      ></component>
    </div>
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
    components: {
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

<style scoped>
.preview {
  width: 100%;
  margin-bottom: 10px;
}
</style>
