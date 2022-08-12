<!-- 上传图片 -->
<template>
  <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="previewFileList"
    list-type="image-card"
    @preview="handlePreview"
  />
  <n-modal
    v-model:show="showModal"
    preset="card"
    style="width: 600px"
    title="一张很酷的图片"
  >
    <img :src="previewImageUrl" style="width: 100%" />
  </n-modal>
</template>

<script lang="ts" setup>
import { useDrawer } from '@/store'
import { ref } from 'vue'
import { UploadFileInfo } from 'naive-ui'
/**
 * interface  UploadFileInfo {
 *  id: 'a',
 *  name: '我是上传出错的普通文件.png',
 *  status: 'error'|'finished'|'uploading',  
  },
 * 
 */
interface Props {
  keyname: string
}
const drawer = useDrawer()
const props = defineProps<Props>()
let componentProps = drawer.activeComponent?.componentProps || {}
let componentPropsMeta: ComponentPropsMeta =
  drawer.activeComponent?.componentPropsMeta || {}
let param = componentPropsMeta[props.keyname]?.fieldComponentParam || {}

const showModalRef = ref(false)
const previewImageUrlRef = ref('')
function handlePreview(file: UploadFileInfo) {
  const { url } = file
  previewImageUrlRef.value = url as string
  showModalRef.value = true
}

let showModal = showModalRef
let previewImageUrl = previewImageUrlRef
let fileList = ref<UploadFileInfo[]>([])
let previewFileList = ref<UploadFileInfo[]>([])
</script>
