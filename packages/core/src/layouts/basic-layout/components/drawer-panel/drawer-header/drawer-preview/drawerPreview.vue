<template>
  <div>
    <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      @mask-click="close()"
    >
      <n-card
        style="width: 1000px; min-height: 600px"
        class="bg-white"
        :style="globalConfig.style"
      >
        <n-config-provider :theme-overrides="themeOverrides">
          <drawer-preview-item
            :components="components"
          ></drawer-preview-item></n-config-provider></n-card
    ></n-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useDrawer, useTheme } from '@/store'
import { globalConfigs } from '@/settings/globalConfig'
import { getGlobalTheme } from '@/utils/theme'
export default defineComponent({
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
    const themer = useTheme()
    const themeOverrides = getGlobalTheme(themer)
    const globalConfig = ref(globalConfigs)
    return { close, components, themeOverrides, globalConfig }
  },
})
</script>

<style scoped>
.preview {
  width: 100%;
  margin-bottom: 10px;
}
</style>
