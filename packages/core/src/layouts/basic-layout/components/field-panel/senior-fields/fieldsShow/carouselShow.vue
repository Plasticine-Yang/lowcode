<template>
  <div>
    <div class="relative" style="height: 100px">
      <n-carousel autoplay class="wh-full" style="height: 100px">
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

<style scoped></style>
