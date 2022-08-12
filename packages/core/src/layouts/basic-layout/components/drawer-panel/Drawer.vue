<script lang="ts">
import { useDrawer } from '@/store'
import { drawerGroup } from '@/utils'
import { defineComponent, computed } from 'vue'
import resolveComponents from './resolveComponents'
import { lightTheme } from '@/styles/theme/light'
//这个抽离出来是因为递归调用了
import drawerGrid from './drawerContain/drawerGrid.vue'
import drawerFlex from './drawerContain/drawerFlex.vue'
import drawerCollapse from './drawerSenior/drawerCollapse.vue'
export default defineComponent({
  components: {
    ...resolveComponents,
    drawerGrid,
    drawerFlex,
    drawerCollapse,
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
      v-model="drawer.components"
      :group="drawerGroup"
      :animation="300"
      :sort="true"
      item-key="id"
      element="ul"
      class="wh-full bg-white"
      ghost-class="ghost"
      handle=".drag-handler"
    >
      <template #item="{ element }">
        <item-wrapper
          :drag-handler-name="element.dragHandlerName"
          :component-id="element.id"
        >
          <!-- 简单组件自己渲染navieUi库 -->
          <component
            :is="element.componentName"
            v-if="element.type == 'basic'"
            v-bind="element.componentProps"
          ></component>
          <!-- 高级组件，容器组件，需要再次封装的简单组件 -->
          <component
            :is="element.componentName"
            v-if="
              element.type == 'contain' ||
              element.type == 'senior' ||
              element.type == 'basic-senior'
            "
            :element="element"
          ></component>
        </item-wrapper>
      </template>
    </draggable>
  </n-config-provider>
</template>
<style lang="scss"></style>
