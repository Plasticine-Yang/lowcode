<template>
  <n-layout-header
    class="px-30px py-10px flex items-center justify-between"
    bordered
  >
    <h1 class="text-xl">
      🐻<span id="text1"></span> <span id="text2"></span>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 255 -90"
            />
          </filter>
        </defs>
      </svg>
    </h1>

    <a
      href="https://github.com/Plasticine-Yang/lowcode"
      target="_blank"
      class="flex-center gap-5px text-xl"
    >
      <icon icon="fa-brands:github" />Github
    </a>
  </n-layout-header>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { animation } from '@/utils/logoAnimation'
export default defineComponent({
  //注册组件
  setup() {
    onMounted(() => {
      const elts = {
        text1: document.getElementById('text1'),
        text2: document.getElementById('text2'),
      }
      animation(elts)
      console.log(elts, 'elts')
    })
  },
})
</script>
<style>
.text-xl {
  position: relative;
  filter: url(#threshold) blur(0.6px);
}
#filters {
  width: 0;
  height: 0;
}
#text1,
#text2 {
  position: absolute;
  width: 100%;
  display: inline-block;
  font-size: 32px;
  text-align: center;
}
</style>
