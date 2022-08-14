<script setup lang="ts">
import BasicLayout from './layouts/basic-layout/index.vue'
import { useTheme } from '@/store'
import { getTheme } from '@/utils/theme'
const themer = useTheme()
const themeOverrides = getTheme(themer)
</script>

<template>
  <div id="app">
    <n-config-provider :theme-overrides="themeOverrides" style="height: 100%">
      <basic-layout />
    </n-config-provider>
  </div>
</template>

<style lang="scss">
@import '@/styles/scss/handle';
.common-util {
  transition: all 1s;
  @include font_color('font_color');
  @include background_color('background_color');
}
</style>
