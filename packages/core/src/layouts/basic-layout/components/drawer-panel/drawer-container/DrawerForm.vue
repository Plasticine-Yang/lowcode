<!-- 表单可以放入容器flex和grid,和表单项以及基本组件，不可以放入高级组件（丑） -->
<template>
  <div>
    <!-- {{ getFormValue }} -->
    {{ element.componentProps.value }}
    <n-form
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      label-placement="left"
      :style="{
        border:
          drawer.activeComponent?.id == element.id
            ? colorTheme[themer.theme]
            : '',
        minHeight: '20px',
      }"
    >
      <draggable
        :list="element.children"
        :group="drawerGroup"
        :animation="300"
        item-key="id"
        class="wh-full bg-white"
        ghost-class="ghost"
        handle=".drag-handler"
        ><template #item="{ element }">
          <item-wrapper
            :drag-handler-name="element.dragHandlerName"
            :component-id="element.id"
          >
            <!-- 基本组件 -->
            <component
              :is="element.componentName"
              v-if="element.type == 'basic'"
              v-bind="element.componentProps"
            ></component>
            <!-- 经过再封装的基本组件 -->
            <component
              :is="element.componentName"
              v-if="element.type == 'basic-senior'"
              :element="element"
            ></component>
            <!-- 表单项 -->
            <drawer-form-item
              :is="element.componentName"
              v-else-if="element.componentName == 'drawerFormItem'"
              :element="element"
              :form-value="formValue"
            ></drawer-form-item>
            <!-- flex容器 -->
            <drawer-flex
              :is="element.componentName"
              v-else-if="element.componentName == 'drawerFlex'"
              :element="element"
            ></drawer-flex>
            <!-- grid容器 -->
            <drawer-grid
              :is="element.componentName"
              v-else-if="element.componentName == 'drawerGrid'"
              :element="element"
            ></drawer-grid> </item-wrapper></template
      ></draggable>
    </n-form>
  </div>
</template>

<script lang="ts">
import { useDrawer, useTheme } from '@/store'
import { drawerGroup } from '@/utils'
import resolveComponents from '../resolveComponents'
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  components: { ...resolveComponents },
  props: {
    element: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props) {
    const formValue = ref({})
    const drawer = useDrawer()
    const themer = useTheme()
    const colorTheme: any = {
      light: '3px dashed black',
      dark: '3px dashed black',
      candy: '3px dashed rgb(227, 173, 202)',
      blue: '3px dashed rgb(64, 158, 255)',
    }
    //这里递归查找了componentName == 'drawerFormItem' 并且把数据显示出来，目前这里是无法修改的
    //无法修改的原因： computed得到数据不能在其他地方变化
    //等我再想想怎么修改
    const propsDate: any = computed(() => {
      let formvalue: any = {}
      let index = 0
      const getTarget: any = (list: any[]) => {
        for (let item in list) {
          //如果是表单项的话，就直接将value加入formvalue
          if (list[item].componentName == 'drawerFormItem') {
            if (list[item].children.length > 0) {
              formvalue[
                list[item].componentProps.propertyName ||
                  list[item].children[0].componentName + index
              ] = list[item].children[0].componentProps.value

              index++
            }
          } else if (
            list[item].componentName == 'drawerFlex' ||
            list[item].componentName == 'drawerGrid'
          ) {
            for (let sub of list[item].children) {
              getTarget(sub)
            }
          }
        }
      }
      getTarget(props.element.children)
      return formvalue
    })
    //这里是因为在componetProps修改时，我希望在属性面板能够展现出来，所以也是动态增加
    const metaDate: any = computed(() => {
      const metaDates: any = {}
      for (let item in props.element.componentProps) {
        metaDates[item] = {
          name: item,
          fieldComponent: 'input-attribute',
        }
      }
      return metaDates
    })
    props.element.componentProps = ref(propsDate)
    props.element.componentPropsMeta = ref(metaDate)
    return { formValue, drawerGroup, colorTheme, drawer, themer }
  },
})
</script>

<style scoped></style>
