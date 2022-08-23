<template>
  <n-space vertical>
    <n-layout>
      <n-layout-header bordered>
        <basic-layout-header></basic-layout-header>
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="80"
          :width="240"
          :native-scrollbar="false"
        >
          <n-menu
            :collapsed-width="80"
            :collapsed-icon-size="22"
            :options="menuOptions"
            style="height: 100%"
          />
        </n-layout-sider>
        <n-layout class="show"> <router-view></router-view></n-layout>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { h, defineComponent, ref, Component } from 'vue'
import { menuOptions } from './menuOptions'

export default defineComponent({
  setup() {
    return {
      menuOptions,
    }
  },
})
</script>
<style scoped>
.show {
  font-size: 16px;
  width: 600px;
  overflow: hidden;
  line-height: 30px;
  padding: 30px;
  padding-top: 10px;
}
</style>
