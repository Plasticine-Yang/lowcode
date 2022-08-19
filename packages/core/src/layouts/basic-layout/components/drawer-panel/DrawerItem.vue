<!-- 容器中的draggable -->
<template>
  <div class="">
    <draggable
      v-model="items"
      :group="drawerGroup"
      :animation="300"
      :sort="true"
      item-key="id"
      class="wh-full"
      ghost-class="ghost"
      handle=".drag-handler"
    >
      <template #item="{ element }">
        <item-wrapper
          :drag-handler-name="element.dragHandlerName"
          :component-id="element.id"
          >{{ element.dragHandlerNam }}
          <component
            :is="element.componentName"
            v-bind="element.componentProps"
            :style="element.style"
            :element="element"
          ></component>
        </item-wrapper>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { drawerGroup } from '@/utils'
import { watch } from 'vue'
import resolveComponents from './resolveComponents'
export default {
  components: {
    ...resolveComponents,
  },
  props: ['items'], // list
  emits: ['update:items'],
  setup(props: any, cxt: any) {
    watch(
      () => props.items,
      () => {
        cxt.emit('update:items', props.items)
      },
    )
    return { drawerGroup }
  },
}
</script>
