<template>
  <div>
    <n-form
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      label-placement="left"
    >
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const formValue = ref({})
    return { formValue }
  },
})
</script>

<style scoped></style>
