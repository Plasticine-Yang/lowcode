<template>
  <div>
    <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      @mask-click="close()"
    >
      <n-card style="width: 1000px; min-height: 600px" class="bg-white">
        <template v-for="(item, index) in components" :key="index">
          <flex-preview
            v-if="item.componentName == 'drawerFlex'"
            :element="item"
          ></flex-preview>
          <grid-preview
            v-if="item.componentName == 'drawerGrid'"
            :list="item"
          ></grid-preview>
          <collapse-preview
            v-if="item.componentName == 'drawerCollapse'"
            :element="item"
          ></collapse-preview>
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

<style scoped>
.preview {
  width: 100%;
}
</style>
