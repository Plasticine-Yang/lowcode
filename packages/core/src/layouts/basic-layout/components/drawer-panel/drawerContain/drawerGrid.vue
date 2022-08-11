<template>
  <div>
    <n-grid v-bind="element.componentProps">
      <n-gi
        v-for="(item, index) in element.componentProps.cols"
        :key="item"
        class="gi"
        :style="{
          border:
            drawer.activeComponent?.id == element.id
              ? colorTheme[themer.theme]
              : '',
        }"
      >
        <draggable
          :list="element.children[index]"
          :group="drawerGroup"
          :animation="300"
          item-key="id"
          class="wh-full bg-white"
          ghost-class="ghost"
          handle=".drag-handler"
          ><template #item="{ element }">
            <item-wrapper
              :drag-handler-name="element.dragHandlerName"
              :component-id="element.id"
            >
              <drawer-grid
                v-if="element.componentName == 'drawerGrid'"
                :element="element"
              ></drawer-grid>
              <component
                :is="element.componentName"
                v-if="element.type == 'basic'"
                v-bind="element.componentProps"
              ></component>
              <component
                :is="element.componentName"
                v-if="
                  element.type == 'contain' ||
                  element.type == 'senior' ||
                  element.type == 'basic-senior'
                "
                :element="element"
              ></component></item-wrapper></template></draggable
      ></n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDrawer, useTheme } from '@/store'
import { drawerGroup } from '@/utils'
//这个抽离出来是因为递归调用了
// import drawerGrid from './drawerGrid.vue'

import resolveComponents from '../resolveComponents'

export default defineComponent({
  components: {
    ...resolveComponents,
  },
  props: ['element'],
  setup() {
    const drawer = useDrawer()
    const themer = useTheme()
    const colorTheme: any = {
      light: '3px dashed black',
      dark: '3px dashed black',
      candy: '3px dashed rgb(227, 173, 202)',
      blue: '3px dashed rgb(64, 158, 255)',
    }
    return { drawer, themer, colorTheme, drawerGroup }
  },
})
</script>

<style scoped>
.gi {
  min-height: 50px;
  overflow: hidden;
}
</style>
