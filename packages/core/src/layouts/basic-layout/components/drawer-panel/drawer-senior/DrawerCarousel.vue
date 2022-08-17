<template>
  <n-carousel
    style="width: 100%; aspectratio: 16/9"
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
  setup(props) {
    const defaultImgLength:number = props.element.componentProps.imgUrl.length
    const getAssetImages = (name: string, idx: number) => {
      if (idx >= defaultImgLength) {
        return name
      }
      return new URL(`/src/assets/lb/${name}`, import.meta.url).href
    }
    return { getAssetImages }
  },
})
</script>
