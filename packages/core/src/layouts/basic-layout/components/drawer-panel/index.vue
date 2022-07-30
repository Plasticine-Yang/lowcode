<script setup lang="ts">
import { useDrawer } from '@/store'

const drawerStore = useDrawer()

// 点击画布空白区域的时候将选中的组件取消选中
// 需要在 item-wrapper 组件中阻止事件冒泡
// 可以通过 vue 的事件修饰符实现
const handleEmptyAreaClick = () => {
  drawerStore.resetActiveComponent()
}
</script>

<template>
  <n-layout>
    <!-- 画布 header 放操作区域 -->
    <n-layout-header bordered>
      <drawer-panel-header />
    </n-layout-header>

    <!-- 画布编辑区域 -->
    <n-layout-content class="editor-container" @click="handleEmptyAreaClick">
      <drawer />
    </n-layout-content>
  </n-layout>
</template>

<style scoped lang="scss">
.editor-container {
  height: calc(100% - 51px);
  background-color: #f1f2f3;
  padding: 10px;
}
</style>
