<template>
  <div class="flex">
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
    <div
      class="flex-center export"
      style="cursor: pointer"
      @click="exportJSON('导出表单数据')"
    >
      <icon icon="ph-export-bold" />导出表单数据
    </div>
    <panel-header-modal
      :show-modal="showModal"
      :json-data="jsonData"
      :to-use="toUse"
      @change-show-modal="changeShowModal"
    >
    </panel-header-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { showExample } from './showExampe'
import { useDrawer, useForm } from '@/store'
export default defineComponent({
  setup() {
    const drawer = useDrawer()
    const former = useForm()
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
      } else if (toUseText == '导出表单数据') {
        jsonData.value = former.formList
      }
    }
    //改变弹出面板状态
    const changeShowModal = () => {
      showModal.value = !showModal.value
    }
    return {
      showExample,
      showModal,
      changeShowModal,
      exportJSON,
      jsonData,
      toUse,
    }
  },
})
</script>

<style scoped lang="scss"></style>
