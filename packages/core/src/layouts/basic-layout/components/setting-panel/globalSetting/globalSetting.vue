<template>
  <div>
    <n-form
      ref="formRef"
      :model="globalConfig.componentsProps"
      label-placement="left"
      label-align="left"
      label-width="100px"
    >
      <n-form-item
        v-for="(item, key, index) in globalConfig.componentPropsMeta"
        :key="index"
        :path="key"
        :label="globalConfig.componentPropsMeta[key].name"
      >
        <global-component
          :keys="key"
          :global-props="globalConfig.componentsProps"
          :global-meta="globalConfig.componentPropsMeta"
        ></global-component>
      </n-form-item>
      <style-setting></style-setting>
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { globalConfigs } from '@/settings/globalConfig'

export default defineComponent({
  components: {},
  setup() {
    const globalConfig = ref(globalConfigs)

    return { globalConfig }
  },
})
</script>

<style scoped></style>
