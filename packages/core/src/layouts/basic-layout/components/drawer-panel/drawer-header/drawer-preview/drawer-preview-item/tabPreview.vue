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
        <drawer-preview-item :components="item"></drawer-preview-item>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDrawer } from '@/store'
import { drawerGroup } from '@/utils'
import resolveComponents from '../../../resolveComponents'

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

<style scoped>
:deep(.n-tabs .n-tabs-tab) {
  color: rgb(120, 118, 118);
}
:deep(.n-tabs .n-tabs-bar) {
  background-color: #18a058;
}
</style>
