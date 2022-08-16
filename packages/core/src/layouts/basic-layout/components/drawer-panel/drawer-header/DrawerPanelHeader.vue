<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDrawer } from '@/store'
import { useDialog } from 'naive-ui'
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
    const drawer = useDrawer()
    const dialog = useDialog()
    const clear = () => {
      dialog.warning({
        title: '确认是否清空？',
        content: '清空无法恢复，请确认是否清空',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
          drawer.setComponent([])
        },
        onNegativeClick: () => {},
      })
    }
    return {
      preview,
      isPreview,
      changeIsPreview,
      clear,
    }
  },
})
</script>
<template>
  <section class="flex DrawerPanelHeader h-50px common-util">
    <div class="flex-center export" style="cursor: pointer" @click="preview()">
      <icon icon="icon-park-outline:preview-open" />预览
    </div>
    <div class="flex-center export" style="cursor: pointer" @click="clear()">
      <icon icon="ant-design:clear-outlined" />清空
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
