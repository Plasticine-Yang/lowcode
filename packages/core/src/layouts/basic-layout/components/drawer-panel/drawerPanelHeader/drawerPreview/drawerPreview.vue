<template>
  <div>
    <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      @mask-click="close()"
    >
      <n-card style="width: 1000px; min-height: 600px" class="bg-white">
        <template v-for="(item, index) in components" :key="index">
          <grid-preview
            v-if="item.componentName == 'n-grid'"
            :list="item"
          ></grid-preview>
          <drawer-carousel
            v-if="item.componentName == 'n-carousel'"
            :list="item"
          ></drawer-carousel>
          <component
            :is="item.componentName"
            v-else
            v-bind="item.componentProps"
            style="margin: 10px 0"
          ></component> </template></n-card
    ></n-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDrawer } from '@/store'
import resolveComponents from '../../resolveComponents'
export default defineComponent({
  components: {
    ...resolveComponents,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['changeIsPreview'],
  setup(props, context) {
    const close = () => {
      context.emit('changeIsPreview')
    }
    const drawer = useDrawer()
    const components = computed(() => drawer.components)
    return { close, components }
  },
})
</script>

<style scoped></style>
