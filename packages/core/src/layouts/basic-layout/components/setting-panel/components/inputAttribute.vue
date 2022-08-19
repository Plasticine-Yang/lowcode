<template>
  <div>
    <n-input
      v-model:value="propsModel"
      :disabled="isDisabled"
      @update:value="iptChange"
    />
  </div>
</template>

<script>
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
  setup(props, ctx) {
    function iptChange(e) {
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
