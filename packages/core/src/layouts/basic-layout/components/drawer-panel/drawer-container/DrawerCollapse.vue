<template>
  <n-collapse v-bind="element.componentProps">
    <template
      v-for="(item, index) in element.componentProps.itemNum"
      :key="index"
    >
      <n-collapse-item
        :title="element.componentProps[`collapse${item}`]"
        :name="index"
      >
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
import { defineComponent, watch } from 'vue'
import { drawerGroup } from '@/utils'
import resolveComponents from '../resolveComponents'
import { useDrawer, useTheme } from '@/store'
import { changeChildren } from '@/utils/changeChildren'
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
    //监听itemNum的变化
    watch(props.element.componentProps, (newVal, oldVal) => {
      if (newVal.itemNum > props.element.children.length) {
        const add: number = newVal.itemNum - props.element.children.length
        const initLength = props.element.children.length
        for (let i = 0; i < add; i++) {
          props.element.componentProps[`collapse${i + initLength + 1}`] =
            '面板' + (i + initLength + 1)
          props.element.componentPropsMeta[`collapse${i + initLength + 1}`] = {
            name: '面板' + (i + initLength + 1),
            fieldComponent: 'input-attribute',
          }
        }
      } else {
        // 标签栏数量减少，减少属性
        const deleteNum: number = props.element.children.length - newVal.itemNum
        const initLength = newVal.itemNum
        for (let i = 0; i < deleteNum; i++) {
          delete props.element.componentProps['collapse' + (i + initLength + 1)]
          delete props.element.componentPropsMeta[
            'collapse' + (i + initLength + 1)
          ]
        }
      }
      changeChildren(drawer, newVal.itemNum)
    })

    return { drawerGroup, drawer, themer, colorTheme }
  },
})
</script>

<style scoped>
.collapseItem {
  min-height: 50px;
}
</style>
