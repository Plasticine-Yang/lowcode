<template>
  <n-layout>
    <!-- 画布 header 放操作区域 -->
    <n-layout-header bordered>
      <drawer-panel-header />
    </n-layout-header>

    <!-- 画布编辑区域 -->
    <n-layout-content class="editor-container">
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
