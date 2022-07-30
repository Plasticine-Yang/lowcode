<script lang="ts" setup>
import { useDrawer } from '@/store'

const drawer = useDrawer()
</script>

<template>
  <section v-if="drawer.activeComponent === null" class="wh-full flex-center">
    <n-empty description="未选中组件"></n-empty>
  </section>
  <section v-else class="wh-full p-10px">
    <n-collapse>
      <n-collapse-item title="基本属性">
        <basic-settings />
      </n-collapse-item>
    </n-collapse>
  </section>
</template>
