<template>
  <n-carousel style="height: 300px; width: 100%" v-bind="list.componentProps">
    <img
      v-for="(item, index) in list.componentProps?.imgUrl"
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
    list: {
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
