<script lang="ts">
import { useDrawer } from '@/store'
import { defineComponent, ref } from 'vue'
import { showExample } from './showExampe'
import PanelHeaderModal from './panelHeaderModal.vue'
export default defineComponent({
  components: { PanelHeaderModal },
  //注册组件
  setup() {
    const drawer = useDrawer()
    //控制面板的弹出
    const showModal = ref(false)
    //存放展示的JSON数据
    const jsonData = ref({})
    //区分状态-目前为导入和导出
    const toUse = ref('导出JSON')
    //弹出面板并且拿到存放在pinia的数据
    const exportJSON = (toUseText: string) => {
      showModal.value = true
      toUse.value = toUseText
      if (toUseText == '导入JSON') {
        jsonData.value = showExample
      } else if (toUseText == '导出JSON') {
        // 拿到目前的components
        jsonData.value = drawer.components
      }
    }
    //改变弹出面板状态
    const changeShowModal = () => {
      showModal.value = !showModal.value
    }
    return {
      drawer,
      exportJSON,
      showExample,
      showModal,
      jsonData,
      toUse,
      changeShowModal,
    }
  },
})
</script>
<template>
  <section class="flex DrawerPanelHeader h-50px">
    <div
      class="flex-center export"
      style="cursor: pointer"
      @click="exportJSON('导出JSON')"
    >
      <icon icon="ph-export-bold" />导出为JSON
    </div>
    <div
      class="flex-center export"
      style="cursor: pointer"
      @click="exportJSON('导入JSON')"
    >
      <icon icon="ph-export-bold" />导入为JSON
    </div>
    <PanelHeaderModal
      :show-modal="showModal"
      :json-data="jsonData"
      :to-use="toUse"
      @change-show-modal="changeShowModal"
    >
    </PanelHeaderModal>
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
