<script setup lang="ts">
import { useTheme } from '@/store'
import { getTheme } from '@/utils/theme'

const themer = useTheme()
const themeOverrides = getTheme(themer)
</script>

<template>
  <div id="app">
    <n-config-provider :theme-overrides="themeOverrides" style="height: 100%">
      <n-dialog-provider><router-view></router-view> </n-dialog-provider>
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
