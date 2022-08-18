<template>
  <div class="panelHeaderModal">
    <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      @mask-click="close()"
    >
      <n-card style="width: 600px; max-height: 800px">
        <!-- 标题 -->
        <template #header> {{ toUse }} </template>
        <div style="max-height: 600px; overflow: auto">
          <!-- 导入JSON额外有的提示 -->
          <n-alert
            v-if="toUse == '导入JSON'"
            title=" 导入的JSON应符合以下格式，以保证导入成功"
            type="info"
          >
          </n-alert>
          <!-- 导出导入JSON展示数据 -->
          <json-editor
            ref="editor"
            :value="JSON.stringify(jsonData, null, 2)"
          ></json-editor>
        </div>
        <!-- 导出的按钮 -->
        <template v-if="toUse == '导出JSON' || toUse == '导出表单数据'" #footer
          ><div class="flex justify-end">
            <n-button
              strong
              secondary
              type="info"
              class="sure"
              @click="close()"
            >
              确定
            </n-button>
            <n-button
              strong
              secondary
              type="primary"
              class="sure"
              @click="copy(JSON.stringify(jsonData, null, 2))"
            >
              {{ copyText }}
            </n-button>
            <!-- 还没实现 -->
            <n-button
              strong
              secondary
              type="primary"
              class="sure"
              @click="close()"
            >
              保存为JSON文件
            </n-button>
          </div></template
        >
        <!-- 导入的按钮 -->
        <template v-else #footer>
          <div class="flex justify-end">
            <n-button
              strong
              secondary
              type="info"
              class="sure"
              @click="insert()"
            >
              确定
            </n-button>
            <!-- 还没实现 -->
            <n-button
              strong
              secondary
              type="primary"
              class="sure"
              @click="close()"
            >
              取消
            </n-button>
          </div>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JsonEditor from './JsonEditor.vue'
import useClipboard from 'vue-clipboard3'
export default defineComponent({
  components: {
    JsonEditor,
  },
  props: {
    //是否展示面板
    showModal: {
      type: Boolean,
      default: false,
    },
    //传入显示的JSONData
    jsonData: {
      type: Object,
      default: () => {
        return {}
      },
    },
    //作用，区分是导入还是导出
    toUse: {
      type: String,
      default: '导出JSON',
    },
  },
  //改变是否出现面板
  emits: ['changeShowModal'],
  setup(props, context) {
    //关闭
    const close = () => {
      context.emit('changeShowModal')
      copyText.value = '复制'
    }
    //区分是否已经复制
    const copyText = ref('复制')
    //实现复制功能
    const { toClipboard } = useClipboard()
    const copy = async (value: any) => {
      try {
        await toClipboard(value)
        copyText.value = '已复制'
      } catch (e) {
        console.log(e)
      }
    }
    const editor = ref<any>(null)
    const insert = () => {
      if (editor.value) {
        editor.value.changeValue()
        close()
      }
    }
    const modelValue = ref([])
    return { close, copy, copyText, insert, modelValue, editor }
  },
})
</script>

<style scoped>
.sure {
  margin-left: 20px;
}
</style>
