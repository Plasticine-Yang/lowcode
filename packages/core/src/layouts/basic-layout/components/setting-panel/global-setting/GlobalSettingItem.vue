<template>
  <div>
    <!-- select -->
    <template v-if="globalMeta[keys].fieldComponent == 'n-select'"
      ><n-select
        v-model:value="globalProps[keys]"
        :options="globalMeta[keys].fieldComponentParam.selectOptions"
        style="width: 150px"
        @update:value="changeTheme(keys)"
      ></n-select
    ></template>
    <template v-if="globalMeta[keys].fieldComponent == 'n-input'">
      <n-input
        v-model:value="globalProps[keys]"
        @keydown.enter.prevent
      ></n-input
    ></template>
    <template v-if="globalMeta[keys].fieldComponent == 'n-color-picker'"
      ><n-color-picker
        v-model:value="globalProps[keys]"
        style="width: 150px"
      ></n-color-picker
    ></template>
  </div>
</template>

<script lang="ts">
import { useTheme } from '@/store'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    globalProps: {
      type: Object,
      default: () => {
        return {}
      },
    },
    globalMeta: {
      type: Object,
      default: () => {
        return {}
      },
    },
    keys: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const themer = useTheme()
    const changeTheme = (key: string) => {
      if (key == 'globalTheme') {
        themer.setGlobalTheme(props.globalProps.globalTheme)
      }
    }
    if (props.globalProps.globalTheme) {
      props.globalProps.globalTheme = themer.globalTheme
    }
    return { changeTheme }
  },
})
</script>

<style scoped></style>
