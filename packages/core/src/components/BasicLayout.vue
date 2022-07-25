<script setup lang="ts"></script>
<template>
  <n-layout class="h-full">
    <!-- header -->
    <n-layout-header class="px-30px py-10px flex items-center justify-between" bordered>
      <h1 class="text-xl">🐻 Low Code 平台</h1>
      <a href="https://github.com/Plasticine-Yang/lowcode" target="_blank" class="flex-center gap-5px text-xl">
        <icon icon="fa-brands:github" />Github
      </a>
    </n-layout-header>

    <!-- 主体内容部分 -->
    <n-layout has-sider class="main-container">
      <!-- 左侧字段面板 -->
      <n-layout-sider bordered>
        <div class="w-100px"></div>
      </n-layout-sider>

      <!-- 中间画布面板 -->
      <n-layout class="h-full">
        <!-- 画布 header 放操作区域 -->
        <n-layout-header bordered>
          <div class="h-50px w-full"></div>
        </n-layout-header>

        <!-- 画布编辑区域 -->
        <n-layout-content class="editor-container">
          <div class="wh-full bg-white"></div>
        </n-layout-content>
      </n-layout>

      <!-- 右侧组件属性面板 -->
      <n-layout-sider class="w-100px" bordered></n-layout-sider>
    </n-layout>
  </n-layout>
</template>

<style scoped lang="scss">
.main-container {
  height: calc(100% - 49px);
}

.editor-container {
  height: calc(100% - 51px);
  background-color: #f1f2f3;
  padding: 10px;
}
</style>
