<template>
  <div class="detail">
    <div class="title">JSON配置</div>
    <n-table :bordered="true" :single-line="true" class="table">
      <thead>
        <tr>
          <th>属性名</th>
          <th>解释</th>
          <th>是否必要</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>标识不同组件，不可重复</td>
          <td>必须</td>
        </tr>
        <tr>
          <td>componentName</td>
          <td>组件名称</td>
          <td>必须</td>
        </tr>
        <tr>
          <td>componentProps</td>
          <td>设置在组件上的属性</td>
          <td>非必要</td>
        </tr>
        <tr>
          <td>componentMeta</td>
          <td>设置在属性面板对属性进行配置</td>
          <td>非必要</td>
        </tr>
        <tr>
          <td>dragHandlerName</td>
          <td>点击组件后显示的名称</td>
          <td>非必要</td>
        </tr>
        <tr>
          <td>children</td>
          <td>用于容器组件存放组件</td>
          <td>非必要</td>
        </tr>
        <tr>
          <td>style</td>
          <td>用于对组件的样式进行设置</td>
          <td>必要</td>
        </tr>
        <tr>
          <td>eventProps</td>
          <td>用于对组件的事件属性进行设置</td>
          <td>非必要</td>
        </tr>
        <tr>
          <td>type</td>
          <td>用于对组件类别进行分辨</td>
          <td>必要</td>
        </tr>
      </tbody>
    </n-table>
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
.detail {
  .title {
    font-size: 30px;
    font-weight: 600;
    line-height: 80px;
  }
  .table {
    margin-left: 30px;
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
