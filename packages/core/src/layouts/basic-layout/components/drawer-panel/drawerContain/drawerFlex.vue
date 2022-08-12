<template>
  <div class="flex drawerFlex">
    <div
      v-for="(item, index) in element.componentProps.cols"
      :key="item"
      class="flexDiv"
      :style="{
        border:
          drawer.activeComponent?.id == element.id
            ? colorTheme[themer.theme]
            : '',
        flex: flexText[index],
        marginRight:
          index == element.children?.length - 1
            ? 0 + 'px'
            : drawer.activeComponent?.componentProps?.interval + 'px',
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
            ></component></item-wrapper></template
      ></draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDrawer, useTheme } from '@/store'
import { drawerGroup } from '@/utils'
import resolveComponents from '../resolveComponents'
export default defineComponent({
  components: {
    ...resolveComponents,
  },
  props: ['element'],
  setup(props) {
    const drawer = useDrawer()
    const themer = useTheme()
    //监测这里使用了children.length变化时，改变flexText
    const flexText = computed(() => {
      let temp = props.element.componentProps.flexText
      temp = temp.split(',')
      if (temp.length < props.element.children.length) {
        const add = props.element.children.length - temp.length
        for (let i = 0; i < add; i++) {
          temp.push(1)
        }
      }
      return temp
    })

    const colorTheme: any = {
      light: '3px dashed black',
      dark: '3px dashed black',
      candy: '3px dashed rgb(227, 173, 202)',
      blue: '3px dashed rgb(64, 158, 255)',
    }
    return { drawer, themer, colorTheme, drawerGroup, flexText }
  },
})
</script>

<style scoped>
.drawerFlex {
  min-height: 50px;
  overflow: hidden;
}
.flexDiv {
  overflow: hidden;
}
</style>
