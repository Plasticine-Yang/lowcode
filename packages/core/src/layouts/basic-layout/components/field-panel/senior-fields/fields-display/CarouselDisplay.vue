<template>
  <div>
    <div class="relative" style="height: 100px">
      <n-carousel autoplay class="wh-full">
        <img src="@/assets/lb/lb1.png" class="carousel-img wh-full" />
        <img src="@/assets/lb/lb2.png" class="carousel-img wh-full" />
        <img src="@/assets/lb/lb3.png" class="carousel-img wh-full" />
      </n-carousel>
      <div class="absolute lb">轮播图</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
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
