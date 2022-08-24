<template>
  <div class="notFound"><h3>404,您请求的文件不存在!</h3></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped>
.notFound {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; /*定义body的元素垂直居中*/
  justify-content: center; /*定义body的里的元素水平居中*/
  background-color: #444;
  font-size: 14px;
}

h3 {
  font-size: 60px;
  color: #eee;
  text-align: center;
  padding-top: 30px;
  font-weight: normal;
}
</style>
