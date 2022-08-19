<!-- 表单可以放入容器flex和grid,和表单项以及基本组件，不可以放入高级组件（丑） -->
<template>
  <div>
    <n-form
      ref="formRef"
      :inline="true"
      v-bind="element.componentProps"
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
            ></drawer-grid>
            <drawer-tabs
              v-if="element.componentName == 'DrawerTabs'"
              :element="element"
            ></drawer-tabs></item-wrapper></template
      ></draggable>
    </n-form>
  </div>
</template>

<script lang="ts">
import { useDrawer, useTheme } from '@/store'
import { drawerGroup } from '@/utils'
import resolveComponents from '../resolveComponents'
import { defineComponent, ref, computed, watch, toRefs, reactive } from 'vue'
import { useForm } from '@/store'
import { formInitial } from '@/settings/contain-fields/form'
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
    const drawer = useDrawer()
    const themer = useTheme()
    const colorTheme: any = {
      light: '3px dashed black',
      dark: '3px dashed black',
      candy: '3px dashed rgb(227, 173, 202)',
      blue: '3px dashed rgb(64, 158, 255)',
    }
    const former = useForm()
    const formValue: any = ref({})
    const index = ref(0)
    //递归得到表单项数据
    const getTarget: any = (list: any[]) => {
      for (let item in list) {
        //如果是表单项的话，就直接将value加入formValue
        if (list[item].componentName == 'drawerFormItem') {
          if (list[item].children.length > 0) {
            formValue.value[
              list[item].componentProps.propertyName ||
                list[item].children[0].componentName + index.value
            ] = list[item].children[0].componentProps.value
            index.value++
          }
        } else if (
          //如果是容器的话就遍历递归他们的children
          list[item].componentName == 'drawerFlex' ||
          list[item].componentName == 'drawerGrid'
        ) {
          for (let sub of list[item].children) {
            getTarget(sub)
          }
        }
      }
    }
    //观测到children变成时，因为有移动过来和删除组件两个操作，所以直接观察数据变化是最方便的
    watch(
      props.element.children,
      (newVal, oldVal) => {
        formValue.value = {}
        index.value = 0
        getTarget(newVal)
        former.setForm(formValue.value, props.element.id)
        formValue.value = {
          ...formValue.value,
          ...formInitial.componentProps,
        }
      },
      { deep: true },
    )
    //这里是因为在componentProps修改时，我希望在属性面板能够展现出来，所以也是动态增加
    const metaDate: any = computed(() => {
      let metaDates: any = {}
      for (let item in props.element.componentProps) {
        if (
          item != 'labelWidth' &&
          item != 'labelAlign' &&
          item != 'showLabel' &&
          item != 'labelPlacement'
        ) {
          metaDates[item] = {
            name: item,
            fieldComponent: 'input-attribute',
            isDisabled: true,
          }
        } else {
          metaDates[item] = formInitial.componentPropsMeta[item]
        }
      }
      return metaDates
    })
    props.element.componentProps = ref(formValue)
    props.element.componentPropsMeta = ref(metaDate)
    return { formValue, drawerGroup, colorTheme, drawer, themer }
  },
})
</script>

<style scoped></style>
