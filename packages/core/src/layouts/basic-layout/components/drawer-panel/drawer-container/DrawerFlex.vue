<!-- flex容器可以放下所有的组件,可以表单也可以表单项 -->
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
      <DrawerItem id="drawerItem" v-model:items="element.children[index]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useDrawer, useTheme } from '@/store'
import { drawerGroup } from '@/utils'
import resolveComponents from '../resolveComponents'
import { changeChildren } from '@/utils/changeChildren'
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
    //当cols变化的时候，修改children
    watch(props.element.componentProps, (newVal, oldVal) => {
      changeChildren(drawer, newVal.cols)
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
