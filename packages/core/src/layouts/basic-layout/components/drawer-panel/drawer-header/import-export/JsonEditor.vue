<template>
  <div class="ace-container">
    <VAceEditor
      v-bind="aceConfig"
      v-model:value="modelValue"
      class="ace-editor"
      :options="aceConfig.options"
    ></VAceEditor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VAceEditor } from 'vue3-ace-editor'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-chrome'
import { useDrawer } from '@/store'
import { JSONParse } from '@/utils/resetSerialize'
export default defineComponent({
  components: {
    VAceEditor,
  },
  props: {
    value: {
      type: String,
      default: () => {
        return ''
      },
    },
  },
  setup(props) {
    const aceConfig = ref({
      lang: 'json',
      theme: 'chrome',
      readOnly: false,
      maxLines: 20, // 最大行数，超过会自动出现滚动条
      minLines: 5, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
      highlightActiveLine: true,
      options: {
        tabSize: 2,
        showPrintMargin: false,
        fontSize: 16,
      },
    })
    const modelValue = ref(props.value)
    const drawerStore = useDrawer()
    //将导入的JSON存放到store
    const changeValue = () => {
      drawerStore.setComponent(JSONParse(modelValue.value))
    }
    return { aceConfig, modelValue, changeValue }
  },
})
</script>

<style scoped>
.ace-editor {
  height: 500px;
}
</style>
