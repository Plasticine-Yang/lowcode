<template>
  <n-space vertical>
    <n-layout class="common-util">
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
          class="common-util"
        >
          <n-menu
            :collapsed-width="80"
            :collapsed-icon-size="22"
            :options="menuOptions"
            style="height: 100%"
            class="common-util"
          />
        </n-layout-sider>
        <n-layout class="show common-util"
          ><n-config-provider :hljs="hljs">
            <router-view></router-view>
          </n-config-provider>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { h, defineComponent, ref, Component } from 'vue'
import { menuOptions } from './menuOptions'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
export default defineComponent({
  setup() {
    return {
      menuOptions,
      hljs,
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
