<template>
  <div class="ace-container">
    <div ref="editorform" class="ace-editor"></div>
  </div>
</template>

<script lang="ts">
import ace from 'ace-builds'

//import 'ace-builds/src-min-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-min-noconflict/theme-sqlserver' // 新设主题
import 'ace-builds/src-min-noconflict/mode-javascript' // 默认设置的语言模式
import 'ace-builds/src-min-noconflict/mode-json' //
import 'ace-builds/src-min-noconflict/mode-css' //
import 'ace-builds/src-min-noconflict/ext-language_tools'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

export default {
  name: 'CodeEditor',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    // 外部传入的内容，用于实现双向绑定
    value: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    // 外部传入的语法类型
    language: {
      type: String,
      default: 'TypeScript',
    },
    // 编辑器主题色
    theme: {
      type: String,
      default: 'chaos',
    },
  },
  emits: ['update:value', 'updateValue'],
  setup(props: any, { emit }: any) {
    let editor: any = null
    const editorform = ref()
    let options = {
      theme: 'ace/theme/' + (props.theme ? props.theme : 'chaos'),
      mode: 'ace/mode/' + (props.language ? props.language : 'yaml'),
      tabSize: 2,
      maxLines: 30,
      minLines: 25,
      showPrintMargin: false,
      fontSize: 14,
      readOnly: props.readonly ? props.readonly : false,
    }
    //切换语言
    //editor.getSession().setMode(modelPath)

    function initialize() {
      if (editor) {
        //实例销毁
        editor.destroy()
      }
      //初始化
      ace.config.set(
        'basePath',
        'https://ks3-cn-beijing.ksyun.com/vform2021/ace',
      )
      editor = ace.edit(editorform.value, options)
      //代码提示和自动补全
      editor.setOptions({
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableBasicAutocompletion: true,
      })
      editor.getSession().setUseWrapMode(true)
      // 支持双向绑定
      editor.on('change', () => {
        if (emit) {
          emit('updateValue', editor.getValue())
          emit('update:value', editor.getValue())
        }
      })
      //快捷键
      editor.commands.addCommand({
        name: 'formatter',
        bindKey: { win: 'Ctrl-Shift-F', mac: 'Command-Shift-F' },
        exec: () => emit('formatter', editor),
      })
      editor.setValue(props.value ? props.value : '')
    }
    watch(
      () => props.id,
      () => {
        initialize()
      },
    )
    watch(
      () => props.value,
      newProps => {
        //解决光标移动问题
        const position = editor.getCursorPosition()
        editor.getSession().setValue(newProps)
        editor.clearSelection()
        editor.moveCursorToPosition(position)
      },
    )
    onMounted(() => {
      initialize()
    })
    onBeforeUnmount(() => {
      editor.destroy()
    })
    return {
      editorform,
    }
  },
}
</script>
