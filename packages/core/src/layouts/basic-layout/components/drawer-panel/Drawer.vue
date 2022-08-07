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
  <n-config-provider :theme-overrides="lightTheme">
    <draggable
      :list="drawer.components"
      :group="drawerGroup"
      :animation="300"
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
          <component
            :is="element.componentName"
            v-bind="element.componentProps"
          ></component>
        </item-wrapper>
      </template>
    </draggable>
  </n-config-provider>
</template>
