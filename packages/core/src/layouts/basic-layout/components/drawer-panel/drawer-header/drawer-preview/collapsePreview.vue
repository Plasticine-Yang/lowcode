<template>
  <n-collapse v-bind="element.componentProps">
    <template v-for="(item, index) in title" :key="index">
      <n-collapse-item :title="item" :name="index">
        <template
          v-for="(sub, indexs) in element.children[index]"
          :key="indexs"
        >
          <div class="collapseItem">
            <grid-preview
              v-if="sub.componentName == 'drawerGrid'"
              :element="sub"
            ></grid-preview>
            <flex-preview
              v-if="sub.componentName == 'drawerFlex'"
              :element="sub"
            ></flex-preview>
            <collapse-preview
              v-if="sub.componentName == 'drawerCollapse'"
              :element="sub"
            ></collapse-preview>
            <component
              :is="sub.componentName"
              v-if="sub.type == 'basic'"
              v-bind="sub.componentProps"
            ></component>
            <component
              :is="sub.componentName"
              v-if="
                sub.type == 'contain' ||
                sub.type == 'senior' ||
                sub.type == 'basic-senior'
              "
              :element="sub"
            ></component>
          </div>
        </template>
      </n-collapse-item>
    </template>
  </n-collapse>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { drawerGroup } from '@/utils'
import resolveComponents from '../../resolveComponents'
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
