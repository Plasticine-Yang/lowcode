<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  //注册组件
  setup() {
    const preview = () => {
      isPreview.value = true
    }
    const isPreview = ref(false)
    const changeIsPreview = () => {
      isPreview.value = !isPreview.value
    }
    return {
      preview,
      isPreview,
      changeIsPreview,
    }
  },
})
</script>
<template>
  <section class="flex DrawerPanelHeader h-50px common-util">
    <div class="flex-center export" style="cursor: pointer" @click="preview()">
      <icon icon="icon-park-outline:preview-open" />预览
    </div>
    <import-export></import-export>
    <drawerPreview
      :show-modal="isPreview"
      @change-is-preview="changeIsPreview"
    ></drawerPreview>
  </section>
</template>
<style lang="scss">
.DrawerPanelHeader {
  display: flex;
  justify-content: flex-end;
  .export {
    margin-right: 10px;
    font-size: 16px;
  }
}
</style>
