<template>
  <div>
    <n-input
      v-model:value="propsModel"
      :disabled="isDisabled"
      @update:value="iptChange"
    />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    propsModel: {
      type: [String, Number, Boolean],
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:propsModel'],
  setup(props: any, ctx: any) {
    function iptChange(e: any) {
      // ctx 这里通过emit来修改父组件中v-model的数据

      ctx.emit('update:propsModel', e)
    }
    return {
      iptChange,
    }
  },
}
</script>

<style scoped></style>
