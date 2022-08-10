<script lang="ts">
import { useDrawer } from '@/store'
import { drawerGroup } from '@/utils'
import { defineComponent } from 'vue'
import resolveComponents from './resolveComponents'
import { lightTheme } from '@/styles/theme/light'
//这个抽离出来是因为递归调用了
import drawerGrid from './drawerGrid/drawerGrid.vue'
export default defineComponent({
  components: {
    ...resolveComponents,
    drawerGrid,
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
          <component
            :is="element.componentName"
            v-if="element.type == 'basic'"
            v-bind="element.componentProps"
          ></component>
          <component
            :is="element.componentName"
            v-if="element.type == 'contain' || element.type == 'senior'"
            :element="element"
          ></component>
        </item-wrapper>
      </template>
    </draggable>
  </n-config-provider>
</template>
<style lang="scss"></style>
