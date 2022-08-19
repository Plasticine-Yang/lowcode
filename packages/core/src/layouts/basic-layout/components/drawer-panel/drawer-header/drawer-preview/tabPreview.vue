<template>
  <div class="">
    <n-tabs type="line" animated :trigger="element.componentProps.trigger">
      <!-- tab 是显示的内容 -->
      <n-tab-pane
        v-for="(item, index) in element.children"
        :key="index"
        :name="'tab' + index"
        :tab="
          element.componentProps['tabName' + (index + 1)] ||
          '标签' + (index + 1)
        "
      >
        <div v-for="(sub, indexs) in item" :key="indexs">
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
          ></component>
        </div>
      </n-tab-pane>
    </n-tabs>
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
    return { drawer, drawerGroup }
  },
})
</script>
