<!--
  上传图片
  componentProps 中需要有 imgUrl 属性，可以是字符串或者数组
-->
<template>
  <div class="label-wrapper" ref="labelWrapper">
    <label for="upload">
      <div id="vertical-line" v-show="!isPreview"></div>
      <div id="transverse-line" v-show="!isPreview"></div>
    </label>
  </div>
  <input type="file" @change="imageUpload" id="upload" style="display: none" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const labelWrapper = ref<HTMLElement>()
const isPreview = ref(false)
const emits = defineEmits(['updateImgUrl'])

const imageUpload = (e: Event) => {
  // 获取上传的文件 files是一个伪数组
  const files = (e.target as HTMLInputElement).files

  if (!files) throw new Error('uploadImageAttribute..., 文件上传出错')

  for (let file of Array.from(files)) {
    let reader = new FileReader()

    reader.readAsDataURL(file)
    // 添加加载完成事件
    reader.addEventListener('load', ev => {
      if (!ev.target) throw new Error('uploadImageAttribute..., 图片上传出错')
      if (!labelWrapper.value)
        throw new Error('uploadImageAttribute..., 不存在 labelWrapper')

      // 图片转成的 base64 码,可作为 src
      const result = ev.target.result

      // 更新 url
      emits('updateImgUrl', result)

      // 设置预览图
      labelWrapper.value.style.background = `url('${
        ev.target!.result
      }') no-repeat center`
      labelWrapper.value.style.backgroundSize = '100px 100px'
      // 不显示边框
      isPreview.value = true
    })
  }
}
</script>

<style scss scoped>
.label-wrapper {
  z-index: 100;
  width: 100px;
  height: 100px;
  border-radius: 2px;
}
/* 容器 */
label {
  border: 2px solid rgb(89, 89, 92);
  display: block;
  height: 100px;
  width: 100px;
  transition: all 0.5s;
  border-radius: 3px;
  position: relative;
}

label:hover {
  border: 2px solid rgb(99, 226, 183);
}

/* 竖线 */
#vertical-line {
  border-right: 2px dotted rgba(89, 89, 92, 0.5);
  width: 0;
  height: 96px;
  transform: translateX(49px);
  z-index: -99;
}
/* 横线 */
#transverse-line {
  border-top: 2px dotted rgba(89, 89, 92, 0.5);
  width: 96px;
  height: 0;
  transform: translateY(-50px);
  z-index: -99;
}
</style>
