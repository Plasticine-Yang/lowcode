<template>
  <div>
    <n-input v-model:value="propsModel" @update:value="iptChange" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    propsModel: { type: String, default: '' },
  },
  emits: ['update:propsModel'],
  setup(props: any, ctx: any) {
    function iptChange(e: any) {
      // ctx 这里通过emit来修改父组件中v-model的数据
      console.log(e)
      ctx.emit('update:propsModel', e)
    }
    return {
      iptChange,
    }
  },
}
</script>

<style scoped></style>
