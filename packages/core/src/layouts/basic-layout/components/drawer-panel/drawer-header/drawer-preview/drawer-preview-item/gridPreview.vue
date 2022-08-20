<template>
  <div>
    <n-grid v-bind="list.componentProps">
      <n-gi
        v-for="(item, index) in list.componentProps.cols"
        :key="index"
        class="gi"
      >
        <drawer-preview-item
          :components="list.children[index]"
        ></drawer-preview-item></n-gi
    ></n-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import resolveComponents from '../../../resolveComponents'
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
