<script lang="ts">
import { useDrawer } from '@/store'
import { drawerGroup } from '@/utils'
import { defineComponent } from 'vue'
import resolveComponents from './resolveComponents'

export default defineComponent({
  components: {
    ...resolveComponents,
  },
  setup() {
    // 画布数据
    const drawer = useDrawer()
    return {
      drawer,
      drawerGroup,
    }
  },
})
</script>

<script lang="ts" setup></script>

<template>
  <draggable
    :list="drawer.components"
    item-key="id"
    :group="drawerGroup"
    class="wh-full bg-white"
    ghost-class="ghost"
    :animation="300"
  >
    <template #item="{ element }">
      <component :is="element.name" v-bind="element.options"></component>
    </template>
  </draggable>
</template>
