<template>
  <n-carousel
    style="width: 100%; aspect-ratio: 16/9"
    v-bind="element.componentProps"
  >
    <img
      v-for="(item, index) in element.componentProps?.imgUrl"
      :key="index"
      :src="getAssetImages(item, index)"
      class="carousel-img wh-full"
    />
  </n-carousel>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const props = defineProps(['element'])

const componentProps = reactive(props.element.componentProps)
const defaultImgLength = componentProps.imgUrl.length
const getAssetImages = (name: string, idx: number) => {
  // 如果是新加的图片，直接使用base64
  if (idx >= defaultImgLength) {
    console.log(name, 'name')
    return name
  }
  return new URL(`/src/assets/lb/${name}`, import.meta.url).href
}
</script>
