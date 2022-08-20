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
          <DrawerItem id="drawerItem" v-model:items="element.children[index]" />
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
