<script setup lang="ts">
import { reactive, inject } from 'vue'
import EventBus from '@/lib/bus'
// 画布数据
const drawerItemList = reactive<any[]>([])

/**
 * @description 产生随机数
 */
const useRandom: () => string = () => {
  return String(Math.random()).slice(2, 6)
}

// 在此注入事件总线
const $bus = inject('$bus') as EventBus
const showEdit = (evt: Event) => {
  $bus.emit('changeCurrentEdit', evt)
}
</script>

<script lang="ts">
// 需要重新导入声明为组件才能使用 component is
import InputWidget from '@/form-designer/form-widget/field-widget/input-widget.vue'

export default {
  components: {
    InputWidget,
  },
}
</script>

<template>
  <draggable
    :list="drawerItemList"
    :item-key="useRandom()"
    group="basic-field"
    class="wh-full bg-white"
    ghost-class="ghost"
    :animation="300"
  >
    <template #item="{ element }">
      <component
        :is="element.type + '-widget'"
        :field="element"
        :style="{ cursor: 'pointer' }"
        @click="showEdit"
      ></component>
    </template>
  </draggable>
</template>
