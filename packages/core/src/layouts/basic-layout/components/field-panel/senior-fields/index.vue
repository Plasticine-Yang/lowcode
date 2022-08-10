<template>
  <draggable
    v-model="fieldItemList"
    :group="basicFieldGroup"
    :sort="false"
    :clone="transformFieldToDrawer"
    item-key="fileName"
  >
    <template #item="{ element }">
      <div
        v-if="element.componentName == 'n-carousel'"
        class="relative"
        style="height: 100px"
      >
        <n-carousel autoplay class="wh-full" style="height: 100px">
          <img src="@/assets/lb/lb1.png" class="carousel-img wh-full" />
          <img src="@/assets/lb/lb2.png" class="carousel-img wh-full" />
          <img src="@/assets/lb/lb3.png" class="carousel-img wh-full" />
        </n-carousel>
        <div class="absolute lb">轮播图</div>
      </div></template
    ></draggable
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive } from 'vue'
import { seniorFields } from '@/settings'
import { basicFieldGroup } from '@/utils'
import transformFieldToDrawer from '@/utils/transformFieldToDrawer'
export default defineComponent({
  setup() {
    const fieldItemList = reactive(seniorFields)
    const lbList = [
      '@/assets/lb/lb1.png',
      '@/assets/lb/lb2.png',
      '@/assets/lb/lb3.png',
    ]
    return { fieldItemList, basicFieldGroup, transformFieldToDrawer, lbList }
  },
})
</script>

<style scoped>
.lb {
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  background-color: rgb(241 242 243);
}
</style>
