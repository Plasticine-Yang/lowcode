<template>
  <div
    v-for="(item, index) in formwork"
    :key="index"
    style="border: 1px solid black; position: relative"
    @click="changeActive(item)"
  >
    <img :src="getAssetImages(item.formworkDisplay)" style="height: 250px" />
    <div class="description">{{ item.formworkName }}</div>
  </div>
  <n-drawer v-model:show="active" :width="700">
    <n-drawer-content :title="activeItem.formworkName" class="drawerContent">
      <img
        :src="getAssetImages(activeItem!.formworkDisplay)"
        style="width: 100%"
      />
      <div class="useBtn" @click="handleUseFormwork">
        <div>使用该模板</div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { formwork } from '@/settings/formwork-fields/index'
import { useDialog } from 'naive-ui'
import { useDrawer } from '@/store'
export default defineComponent({
  setup() {
    //通过formworkName获取当前显示的照片
    const getAssetImages = (name: string) => {
      return new URL(`/src/assets/${name}.png`, import.meta.url).href
    }
    //决定右边弹出框是否显示
    const active = ref(false)
    //选中的模板
    const activeItem = ref()
    const changeActive = (item: object) => {
      active.value = true
      activeItem.value = item
    }
    const dialog = useDialog()
    const handleUseFormwork = () => {
      dialog.info({
        title: '确定使用该模板?',
        content: '使用模板会覆盖当前编辑的内容,请确认是否使用',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
          active.value = false
          const drawer = useDrawer()
          drawer.setComponent(activeItem.value.jsonContent)
        },
        onNegativeClick: () => {
          active.value = false
        },
      })
    }
    return {
      formwork,
      getAssetImages,
      active,
      changeActive,
      activeItem,
      handleUseFormwork,
    }
  },
})
</script>

<style scoped>
.drawerContent {
  position: relative;
}
.useBtn {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #2080f0;
}
.description {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: rgb(241 242 243);
}
</style>
