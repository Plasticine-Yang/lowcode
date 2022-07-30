<script setup lang="ts">
import { useDrawer } from '@/store'

interface Props {
  componentId: string
  // 左上角拖拽把手显示的名字 -- 比如单行输入
  dragHandlerName: string
}

const props = defineProps<Props>()

const drawer = useDrawer()

const removeComponent = () => {
  drawer.removeComponent(props.componentId)
}
</script>

<template>
  <!-- 容器 -->
  <div class="item-wrapper">
    <!-- 拖动手柄 -->
    <div class="drag-handler">
      <icon icon="bx:move" :inline="true" />
      <span>
        {{ dragHandlerName }}
      </span>
    </div>
    <!-- 操作区域 -->
    <div class="item-action">
      <icon
        :inline="true"
        icon="fluent:delete-48-filled"
        @click="removeComponent"
      />
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.item-wrapper {
  position: relative;
  border: 3px solid skyblue;
  margin: 10px 0;

  .drag-handler {
    display: flex;
    gap: 3px;
    align-items: center;
    position: absolute;
    inset: 0 auto auto 0;
    z-index: 1;
    padding: 2px 3px;
    color: white;
    font-size: 12px;
    background-color: skyblue;
    cursor: move;
  }

  .item-action {
    position: absolute;
    inset: auto 0 0 auto;
    z-index: 1;
    cursor: pointer;
    color: white;
    background-color: skyblue;
    font-size: 16px;
    padding: 2px 3px;
  }
}
</style>
