<template>
  <div>
    <n-form-item
      v-for="(item, key, index) in globalConfig.stylePropsMeta"
      :key="index"
      :path="key"
      :label="globalConfig.stylePropsMeta[key].name"
      ><global-setting-item
        :keys="key"
        :global-props="globalConfig.style"
        :global-meta="globalConfig.stylePropsMeta"
      ></global-setting-item
    ></n-form-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { globalConfigs } from '@/settings/globalConfig'
export default defineComponent({
  setup() {
    const globalConfig = ref(globalConfigs)
    return { globalConfig }
  },
})
</script>

<style scoped></style>
