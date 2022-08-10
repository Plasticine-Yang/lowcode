<script lang="ts" setup>
import { useDrawer } from '@/store'
import { ref } from 'vue'

const drawer = ref(useDrawer())
</script>

<template>
  <section
    v-if="drawer.activeComponent === null"
    class="wh-full flex-center common-util"
  >
    <n-empty description="未选中组件"></n-empty>
  </section>
  <section v-else class="wh-full p-10px common-util">
    <n-collapse :default-expanded-names="['basic']">
      <n-collapse-item title="基本属性" name="basic">
        <basic-settings />
      </n-collapse-item>
      <n-collapse-item title="样式属性" name="style">
        <style-settings />
      </n-collapse-item>
    </n-collapse>
  </section>
</template>
