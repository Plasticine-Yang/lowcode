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
          <drawer-grid
            v-if="element.componentName == 'drawerGrid'"
            :element="element"
            :style="element.style"
          ></drawer-grid>
          <drawer-flex
            v-if="element.componentName == 'drawerFlex'"
            :element="element"
            :style="element.style"
          ></drawer-flex>
          <drawer-collapse
            v-if="element.componentName == 'drawerCollapse'"
            :element="element"
            :style="element.style"
          ></drawer-collapse>
          <drawer-form
            v-if="element.componentName == 'drawerForm'"
            :element="element"
            :style="element.style"
          ></drawer-form>
          <drawer-form-item
            v-if="element.componentName == 'drawerFormItem'"
            :element="element"
            :style="element.style"
          ></drawer-form-item>
          <drawer-tabs
            v-if="element.componentName == 'DrawerTabs'"
            :element="element"
            :style="element.style"
          ></drawer-tabs>
          <component
            :is="element.componentName"
            v-else-if="element.type == 'basic'"
            v-bind="element.componentProps"
            :style="element.style"
          ></component>
          <component
            :is="element.componentName"
            v-else-if="
              element.type == 'senior' || element.type == 'basic-senior'
            "
            :element="element"
            :style="element.style"
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
