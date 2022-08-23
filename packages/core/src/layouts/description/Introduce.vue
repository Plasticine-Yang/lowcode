<template>
  <div class="introduce">
    <div class="title">Low Code低代码</div>
    <div>
      基于目前前端工作者在某些工作场景下，工作量大，重复性工作较多，因此生产效率成为了必须要解决的问题。本项目就是为了解决这种简单且重复性多的业务代码场景中的问题，通过配置化、自动化的方式提高生产效率，主要通过拖拉拽的方式完成页面编写，并支持一键导出代码，直接套用到项目中
    </div>
    <div class="title">项目仓库</div>
    <div>https://github.com/Plasticine-Yang/lowcode</div>
    <div class="title">开发人员</div>
    <ul>
      <li>杨文锋</li>
      <li>陈立婷</li>
      <li>叶晓娟</li>
      <li>谢祥辉</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
.introduce {
  .title {
    font-size: 30px;
    font-weight: 600;
    line-height: 80px;
  }
  width: 1000px;
  text-indent: 2em;
}
</style>
