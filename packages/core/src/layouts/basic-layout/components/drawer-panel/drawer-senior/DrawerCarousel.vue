<template>
  <n-carousel
    style="width: 100%; aspect-ratio: 16/9"
    v-bind="element.componentProps"
  >
    <img
      v-for="(item, index) in element.componentProps?.imgUrl"
      :key="index"
      :src="item"
      class="carousel-img wh-full"
    />
  </n-carousel>
</template>

<script setup lang="ts">
defineProps(['element'])
</script>
