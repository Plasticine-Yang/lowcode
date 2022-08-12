<template>
  <div>
    <n-grid v-bind="list.componentProps">
      <n-gi
        v-for="(item, index) in list.componentProps.cols"
        :key="index"
        class="gi"
      >
        <template v-for="sub in list.children[index]" :key="sub">
          <flex-preview
            v-if="sub.componentName == 'drawerFlex'"
            :element="sub"
          ></flex-preview>
          <grid-preview
            v-else-if="sub.componentName == 'drawerGrid'"
            :list="sub"
          ></grid-preview>
          <component
            :is="sub.componentName"
            v-else-if="sub.type == 'basic'"
            v-bind="sub.componentProps"
          ></component>
          <component
            :is="sub.componentName"
            v-else-if="
              sub.type == 'contain' ||
              sub.type == 'senior' ||
              sub.type == 'basic-senior'
            "
            :element="sub"
          ></component>
        </template> </n-gi
    ></n-grid>
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
    list: {
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
.gi {
  min-height: 50px;
  overflow: hidden;
}
</style>
