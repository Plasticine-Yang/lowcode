<template>
  <div class="relative" style="height: 100px; margin-top: 10px">
    <img src="@/assets/timeline.png" class="carousel-img wh-full" />
    <div class="absolute lb">时间线</div>
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
