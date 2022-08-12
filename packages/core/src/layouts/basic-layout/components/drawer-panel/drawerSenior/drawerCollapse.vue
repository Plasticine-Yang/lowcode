<template>
  <n-collapse v-bind="element.componentProps">
    <template v-for="(item, index) in title" :key="index">
      <n-collapse-item :title="item" :name="index">
        <div
          class="collapseItem"
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
                <drawer-flex
                  v-if="element.componentName == 'drawerFlex'"
                  :element="element"
                ></drawer-flex>
                <drawer-collapse
                  v-if="element.componentName == 'drawerCollapse'"
                  :element="element"
                ></drawer-collapse>
                <component
                  :is="element.componentName"
                  v-else-if="element.type == 'basic'"
                  v-bind="element.componentProps"
                ></component>
                <component
                  :is="element.componentName"
                  v-else-if="
                    element.type == 'contain' ||
                    element.type == 'senior' ||
                    element.type == 'basic-senior'
                  "
                  :element="element"
                ></component></item-wrapper></template
          ></draggable>
        </div>
      </n-collapse-item>
    </template>
  </n-collapse>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { drawerGroup } from '@/utils'
import resolveComponents from '../resolveComponents'
import { useDrawer, useTheme } from '@/store'
export default defineComponent({
  components: {
    ...resolveComponents,
  },
  props: {
    element: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props) {
    const drawer = useDrawer()
    const themer = useTheme()
    const colorTheme: any = {
      light: '3px dashed black',
      dark: '3px dashed black',
      candy: '3px dashed rgb(227, 173, 202)',
      blue: '3px dashed rgb(64, 158, 255)',
    }
    //监听title的修改，修改children
    const title = computed(() => {
      let title = props.element.componentProps.title
      title = title.split(',') //将title转换为数组
      if (title.length > props.element.children.length) {
        const add = title.length - props.element.children.length
        for (let i = 0; i < add; i++) {
          props.element.children.push([])
        }
      } else {
        props.element.children.length = title.length
      }
      return title
    })
    // props.element.componentProps.title = computed(() => title)
    return { drawerGroup, drawer, themer, colorTheme, title }
  },
})
</script>

<style scoped>
.collapseItem {
  min-height: 50px;
}
</style>
