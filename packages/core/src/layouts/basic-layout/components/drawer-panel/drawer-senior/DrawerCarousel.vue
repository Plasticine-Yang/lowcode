<template>
  <n-carousel
    style="width: 100%; aspectratio: 16/9"
    v-bind="element.componentProps"
  >
    <img
      v-for="(item, index) in element.componentProps?.imgUrl"
      :key="index"
      :src="getAssetImages(item)"
      class="carousel-img wh-full"
    />
  </n-carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    element: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup() {
    const getAssetImages = (name: string) => {
      return new URL(`/src/assets/lb/${name}`, import.meta.url).href
    }
    return { getAssetImages }
  },
})
</script>

<style scoped></style>
