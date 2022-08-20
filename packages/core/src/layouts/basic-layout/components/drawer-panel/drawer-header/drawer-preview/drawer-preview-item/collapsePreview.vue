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
        <drawer-preview-item
          :components="element.children[index]"
        ></drawer-preview-item>
      </n-collapse-item>
    </template>
  </n-collapse>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { drawerGroup } from '@/utils'
import resolveComponents from '../../../resolveComponents'
import { useDrawer } from '@/store'
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
    //监听title的修改，修改children
    const title = computed(() => {
      let title = props.element.componentProps.title
      title = title.split(',') //将title转换为数组
      return title
    })
    return { drawerGroup, drawer, title }
  },
})
</script>

<style scoped>
.collapseItem {
  min-height: 50px;
}
</style>
