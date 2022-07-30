<script setup lang="ts">
import { useDrawer } from '@/store'
import { computed } from 'vue'

interface Props {
  componentId: string
  // 左上角拖拽把手显示的名字 -- 比如单行输入
  dragHandlerName: string
}

const props = defineProps<Props>()

const drawer = useDrawer()

// 判断当前组件是否被选中
const isActive = computed(
  () => drawer.activeComponent?.id === props.componentId,
)

// 选中的时候添加 active 类名
const checkActiveDragHandler = () => {
  let classList = ['item-wrapper']
  if (isActive.value) {
    classList.push('active')
  }
  return classList.join(' ')
}

const handleActiveComponent = () => {
  drawer.setActiveComponent(props.componentId)
}

// 点击 item-action 中的删除图标时的回调
const removeComponent = () => {
  drawer.removeComponent(props.componentId)
}
</script>

<template>
  <!-- 容器 -->
  <div :class="checkActiveDragHandler()">
    <!-- 拖动手柄 -->
    <div v-if="isActive" class="drag-handler">
      <icon icon="bx:move" :inline="true" />
      <span>
        {{ dragHandlerName }}
      </span>
    </div>
    <!-- 操作区域 -->
    <div v-if="isActive" class="item-action">
      <icon
        :inline="true"
        icon="fluent:delete-48-filled"
        @click="removeComponent"
      />
    </div>
    <!-- 组件插槽区域 -->
    <section @click="handleActiveComponent">
      <slot></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.item-wrapper {
  position: relative;
  margin: 10px 0;
}

.item-wrapper.active {
  border: 3px solid skyblue;

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
