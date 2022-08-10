<template>
  <div>
    <n-grid v-bind="list.componentProps">
      <n-gi
        v-for="(item, index) in list.componentProps.cols"
        :key="index"
        class="gi"
      >
        <template v-for="sub in list.children[index]" :key="sub">
          <component
            :is="sub.componentName"
            v-if="sub.componentName != 'n-grid'"
            style="margin: 10px 0"
            v-bind="sub.componentProps"
          ></component>
          <grid-preview
            v-if="sub.componentName == 'n-grid'"
            :list="sub"
          ></grid-preview
        ></template> </n-gi
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
