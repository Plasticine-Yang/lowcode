<template>
  <div class="">
    <n-tabs type="line" animated :trigger="element.componentProps.trigger">
      <!-- tab 是显示的内容 -->
      <n-tab-pane
        v-for="(item, index) in element.componentProps.pane"
        :key="index"
        :name="'tab' + index"
        :tab="
          element.componentProps['tabName' + (index + 1)] ||
          '标签' + (index + 1)
        "
        tab-style="color:#ddd;"
      >
        <DrawerItem id="drawerItem" v-model:items="element.children[index]" />
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts">
import { watch } from 'vue'

export default {
  props: ['element'],
  setup(props: any) {
    // 设置children数量,和标签名数量
    function changeNum() {
      if (props.element.children.length > props.element.componentProps.pane) {
        for (
          let i = props.element.children.length;
          i > props.element.componentProps.pane - 1;
          i--
        ) {
          // 标签栏数量减少，减少属性
          delete props.element.componentProps['tabName' + (i + 1)]
          delete props.element.componentPropsMeta['tabName' + (i + 1)]
        }
        props.element.children.length = props.element.componentProps.pane
      }
      for (
        let i = props.element.children.length;
        i < props.element.componentProps.pane;
        i++
      ) {
        // 标签栏数量增加，添加属性
        props.element.children.push([])
        props.element.componentProps['tabName' + (i + 1)] = '标签' + (i + 1)
        props.element.componentPropsMeta['tabName' + (i + 1)] = {
          name: '标签' + (i + 1),
          fieldComponent: 'n-input',
        }
      }
    }
    changeNum()
    watch(
      () => props.element.componentProps.pane,
      () => {
        changeNum()
        console.log(document.getElementById('drawerItem'))
      },
    )
  },
}
</script>

<style scoped>
.n-tab-pane {
  padding: 20px 0;
  color: #fff;
}

:deep(.n-tabs .n-tabs-tab) {
  color: rgb(120, 118, 118);
}
:deep(.n-tabs .n-tabs-bar) {
  background-color: #18a058;
}
</style>
