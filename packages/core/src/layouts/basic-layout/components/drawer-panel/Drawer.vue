<script lang="ts">
import { useDrawer, useTheme } from '@/store'
import { getGlobalTheme } from '@/utils/theme'
import { drawerGroup } from '@/utils'
import { defineComponent, ref } from 'vue'
import resolveComponents from './resolveComponents'
//这个抽离出来是因为递归调用了
import DrawerGrid from './drawer-container/DrawerGrid.vue'
import DrawerFlex from './drawer-container/DrawerFlex.vue'
import DrawerCollapse from './drawer-container/DrawerCollapse.vue'
import DrawerForm from './drawer-container/DrawerForm.vue'
import DrawerFormItem from './drawer-container/DrawerFormItem.vue'
import DrawerTabs from './drawer-container/DrawerTabs.vue'
import { globalConfigs } from '@/settings/globalConfig'
import { useDrawerComponentPropsTransformer } from '@/hooks'
export default defineComponent({
  components: {
    ...resolveComponents,
    DrawerGrid,
    DrawerFlex,
    DrawerCollapse,
    DrawerForm,
    DrawerFormItem,
    DrawerTabs,
  },
  setup() {
    // 画布数据
    const drawer = useDrawer()
    const themer = useTheme()
    const themeOverrides = getGlobalTheme(themer)
    const globalConfig = ref(globalConfigs)

    const transformComponentProps = useDrawerComponentPropsTransformer()

    return {
      drawer,
      drawerGroup,
      themeOverrides,
      globalConfig,
      componentPropsTransformer: transformComponentProps,
    }
  },
})
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
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
      :style="globalConfig.style"
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
            v-bind="componentPropsTransformer(element)"
            :style="element.style"
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
            :style="element.style"
          >
          </component>
        </item-wrapper>
      </template>
    </draggable>
  </n-config-provider>
</template>
<style lang="scss"></style>
