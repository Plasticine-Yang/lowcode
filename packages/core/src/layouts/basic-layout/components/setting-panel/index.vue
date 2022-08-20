<script lang="ts" setup>
import { useDrawer } from '@/store'
import { ref } from 'vue'

const drawer = ref(useDrawer())
</script>

<template>
  <section class="wh-full p-10px common-util">
    <n-tabs class="wh-full">
      <n-tab-pane name="全局属性">
        <global-setting></global-setting>
      </n-tab-pane>
      <n-tab-pane name="组件属性">
        <div
          v-if="drawer.activeComponent === null"
          class="wh-full flex-center common-util"
        >
          <n-empty description="未选中组件" class="wh-full"></n-empty>
        </div>
        <section v-else>
          <n-collapse :default-expanded-names="['basic']">
            <n-collapse-item title="基本属性" name="basic">
              <basic-settings />
            </n-collapse-item>
            <n-collapse-item title="样式属性" name="style">
              <style-settings />
            </n-collapse-item>
            <n-collapse-item
              v-if="drawer.activeComponent?.eventProps"
              title="事件属性"
              name="event"
            >
              <event-settings />
            </n-collapse-item>
          </n-collapse>
        </section>
      </n-tab-pane>
    </n-tabs>
  </section>
</template>
