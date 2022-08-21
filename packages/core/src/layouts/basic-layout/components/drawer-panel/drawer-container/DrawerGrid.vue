<template>
  <div>
    <n-grid v-bind="element.componentProps" class="grid">
      <n-gi
        v-for="(item, index) in element.componentProps.cols"
        :key="item"
        class="gi"
        :style="{
          border:
            drawer.activeComponent?.id == element.id
              ? colorTheme[themer.theme]
              : '',
          minHeight: '30px',
        }"
      >
        <DrawerItem id="drawerItem" v-model:items="element.children[index]"
      /></n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useDrawer, useTheme } from '@/store'
import { drawerGroup } from '@/utils'
import { changeChildren } from '@/utils/changeChildren'
//这个抽离出来是因为递归调用了
// import drawerGrid from './drawerGrid.vue'

import resolveComponents from '../resolveComponents'

export default defineComponent({
  components: {
    ...resolveComponents,
  },
  props: ['element'],
  setup(props) {
    const drawer = useDrawer()
    const themer = useTheme()
    const colorTheme: any = {
      light: '3px dashed black',
      dark: '3px dashed black',
      candy: '3px dashed rgb(227, 173, 202)',
      blue: '3px dashed rgb(64, 158, 255)',
    }
    //当cols变化的时候，修改children
    watch(props.element.componentProps, (newVal, oldVal) => {
      changeChildren(drawer, newVal.cols)
    })
    return { drawer, themer, colorTheme, drawerGroup }
  },
})
</script>

<style scoped>
.gi {
  overflow: hidden;
}

.grid {
  height: 100%;
}
</style>
