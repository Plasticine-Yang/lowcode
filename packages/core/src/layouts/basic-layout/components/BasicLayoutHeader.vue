<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { animation } from '@/utils/logoAnimation'
import { themeOptions } from '@/theme'
import { useToggleTheme } from '@/composables'
import { useRouter } from 'vue-router'
// 切换主题
const toggleTheme = useToggleTheme()
const router = useRouter()
const isHome = ref(true)
onMounted(() => {
  const elts = {
    text1: document.getElementById('text1'),
    text2: document.getElementById('text2'),
  }
  animation(elts)
  if (router.currentRoute.value.matched[0].path == '/') {
    isHome.value = true
  } else {
    isHome.value = false
  }
})
</script>

<template>
  <n-layout-header
    class="px-30px py-10px flex items-center justify-between common-util"
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
    <div class="flex items-center">
      <!-- 跳转文档 -->
      <n-button v-if="isHome"
        ><router-link to="/description">文档</router-link></n-button
      >
      <n-button v-else><router-link to="/">首页</router-link></n-button>
      <!-- 切换主题 -->
      <n-dropdown :options="themeOptions" @select="toggleTheme">
        <n-button class="common-util" :bordered="false">主题切换</n-button>
      </n-dropdown>
      <a
        href="https://github.com/Plasticine-Yang/lowcode"
        target="_blank"
        class="flex-center gap-5px text-xl"
      >
        <icon icon="fa-brands:github" />Github
      </a>
    </div>
  </n-layout-header>
</template>
<style lang="scss" scoped>
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
