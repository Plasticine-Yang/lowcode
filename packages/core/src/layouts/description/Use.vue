<template>
  <div class="use">
    <div class="title">使用</div>
    <div>
      本项目依赖于<span class="showEditText">naive-ui</span>，所以也要安装<span
        class="showEditText"
        >naive-ui</span
      >防止渲染异常
    </div>

    <div class="showEdit">
      <n-code :code="showSecond" language="javascript"></n-code>
    </div>
    <div>
      可以在任何页面应用，传入的参数格式按照http://www.gdut.site/ 导出的JSON代码
    </div>
    <div>
      可以传入<span class="showEditText">containWidth</span>,<span
        class="showEditText"
        >containHeight</span
      >设置页面大小
    </div>
    <div class="showEdit">
      <n-code :code="show" language="HTML" inline></n-code>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const show =
      '<lowCoderRender :components="exampleComponents" contain-width="800px" contain-height="600px"></lowCoderRender>'
    //简单的使用配置这两个就行了
    const showSecond = `import { createApp } from 'vue'
    import App from './App.vue'
    import naive from 'naive-ui'
    import lowCoderRender from 'lowcode-renders'
    createApp(App).use(lowCoderRender).use(naive).mount('#app')`
    return { show, showSecond }
  },
})
</script>

<style scoped lang="scss">
.use {
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
  }
  .showEditText {
    background: rgb(222 222 222 / 17%);
    width: 70%;
    padding: 0 10px;
    font-style: oblique;
    color: #a8a8a8;
  }
  width: 1000px;
  text-indent: 2em;
}
</style>
