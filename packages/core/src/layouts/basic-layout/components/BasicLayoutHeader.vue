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
      <!-- 切换主题 -->
      <n-dropdown :options="options" @select="handleSelect">
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
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { animation } from '@/utils/logoAnimation'
import { useTheme } from '@/store'
export default defineComponent({
  //注册组件
  setup() {
    //过渡文字
    onMounted(() => {
      const elts = {
        text1: document.getElementById('text1'),
        text2: document.getElementById('text2'),
      }
      animation(elts)
    })
    //切换主题的选择
    let options = [
      {
        label: '默认主题',
        key: 'light',
      },
      {
        label: '暗黑主题',
        key: 'dark',
      },
      {
        label: '蜜糖主题',
        key: 'candy',
      },
      {
        label: '天空蓝主题',
        key: 'blue',
      },
    ]
    const themer = useTheme()
    const handleSelect = (e: any) => {
      theme(e)
      setTimeout(() => {
        themer.setTheme(e)
      }, 500)
    }
    const theme = (type: string) => {
      window.document.documentElement.setAttribute('data-theme', type)
    }
    theme(themer.theme)

    return { options, handleSelect }
  },
})
</script>
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
