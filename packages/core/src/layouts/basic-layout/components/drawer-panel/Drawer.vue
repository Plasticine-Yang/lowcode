<script lang="ts">
import { useDrawer } from '@/store'
import { drawerGroup } from '@/utils'
import { defineComponent } from 'vue'
import resolveComponents from './resolveComponents'
import { lightTheme } from '@/styles/theme/light'

export default defineComponent({
  components: {
    ...resolveComponents,
  },
  setup() {
    // 画布数据
    const drawer = useDrawer()
    return {
      drawer,
      drawerGroup,
      lightTheme,
    }
  },
})
</script>

<template>
  <n-config-provider :theme-overrides="lightTheme" style="min-height: 90px">
    <draggable
      :list="drawer.components"
      :group="drawerGroup"
      :animation="300"
      :sort="true"
      item-key="id"
      class="wh-full bg-white"
      ghost-class="ghost"
      handle=".drag-handler"
    >
      <template #item="{ element }">
        <item-wrapper
          :drag-handler-name="element.dragHandlerName"
          :component-id="element.id"
        >
          <drawer-grid
            v-if="element.componentName == 'n-grid'"
            :element="element"
          ></drawer-grid>
          <drawer-carousel
            v-if="element.componentName == 'n-carousel'"
            :list="element"
          ></drawer-carousel>
          <component
            :is="element.componentName"
            v-else
            v-bind="element.componentProps"
          ></component>
        </item-wrapper>
      </template>
    </draggable>
  </n-config-provider>
</template>
<style lang="scss"></style>
