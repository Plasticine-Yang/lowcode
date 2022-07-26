<script setup lang="ts"></script>
<template>
  <n-layout class="h-full">
    <!-- header -->
    <basic-layout-header />

    <!-- 主体内容部分 -->
    <n-layout has-sider class="main-container">
      <n-layout-sider bordered>
        <!-- 左侧字段面板 -->
        <field-panel />
      </n-layout-sider>

      <n-layout class="h-full flex flex-col" has-sider sider-placement="right">
        <!-- 中间画布面板 -->
        <drawer-panel />

        <!-- 右侧组件属性面板 -->
        <n-layout-sider class="w-100px" bordered>
          <setting-panel />
        </n-layout-sider>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<style scoped lang="scss">
.main-container {
  height: calc(100% - 49px);
}
</style>
