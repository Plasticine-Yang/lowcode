<template>
  <div class="install">
    <div class="title">安装</div>
    <div class="showEdit">
      <n-code code="npm i lowcode-renders" language="Nginx" inline></n-code>
    </div>
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
.install {
  .title {
    font-size: 30px;
    font-weight: 600;
    line-height: 80px;
  }
  .showEdit {
    background: rgb(216 215 215 / 22%);
    width: 70%;
    padding: 20px;
    border-radius: 10px;
    margin-left: 30px;
    line-height: 45px;
    margin-top: 14px;
    color: #a8a8a8;
  }
  width: 1000px;
  text-indent: 2em;
}
</style>
