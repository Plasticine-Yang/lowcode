<template>
  <div class="flex drawerFlex">
    <div
      v-for="(item, index) in element.componentProps.cols"
      :key="item"
      class="flexDiv"
      :style="{
        flex: flexText[index],
        marginRight:
          index == element.children?.length - 1
            ? 0 + 'px'
            : drawer.activeComponent?.componentProps?.interval + 'px',
      }"
    >
      <template v-for="(sub, indexs) in element.children[index]" :key="indexs">
        <grid-preview
          v-if="sub.componentName == 'drawerGrid'"
          :list="sub"
        ></grid-preview>
        <flex-preview
          v-else-if="sub.componentName == 'drawerFlex'"
          :element="sub"
        ></flex-preview>
        <collapse-preview
          v-if="sub.componentName == 'drawer-collapse'"
          :element="sub"
        ></collapse-preview>
        <component
          :is="sub.componentName"
          v-else-if="sub.type == 'basic'"
          v-bind="sub.componentProps"
        ></component>
        <component
          :is="sub.componentName"
          v-else-if="
            sub.type == 'contain' ||
            sub.type == 'senior' ||
            sub.type == 'basic-senior'
          "
          :element="sub"
        ></component
      ></template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDrawer } from '@/store'
import { drawerGroup } from '@/utils'
import resolveComponents from '../../resolveComponents'

export default defineComponent({
  components: {
    ...resolveComponents,
  },
  props: ['element'],
  setup(props) {
    const drawer = useDrawer()

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

    return { drawer, drawerGroup, flexText }
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
