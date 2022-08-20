<script setup lang="ts">
import { useDrawer } from '@/store'
import { computed, ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'

const drawer = useDrawer()

const eventProps = computed(() => drawer.activeComponent?.eventProps)

// 代码编辑器相关
// 当前编辑的事件属性名
const eventName = ref('')
// 当前编辑的事件监听器代码
const eventCode = ref("console.log('hello lowcode')")
const codemirrorConfig = {
  // 扩展: 使用 js 语言
  extensions: [javascript()],
  // 使用 tab 缩进
  indentWithTab: true,
  // tab 的大小为 2 个空格
  tabSize: 2,
  // 自动将焦点聚在编辑器中
  autoFocus: true,
}
const showEventCodeEditor = ref(false)
// 点击事件编辑按钮 -- 要将 code 的值赋值为当前激活组件的对应事件属性的代码
const handleEditEventHandlerBtnClick = (
  eventPropName: string,
  eventPropCode: string,
) => {
  eventName.value = eventPropName
  eventCode.value = eventPropCode
  showEventCodeEditor.value = true
}
// 修改当前激活组件对应时间属性的代码
const handleEventCodeUpdate = () => {
  drawer.setEventPropCode(eventName.value, eventCode.value)
  showEventCodeEditor.value = false
}
</script>

<template>
  <n-list>
    <n-list-item v-for="(eventProp, idx) in eventProps" :key="idx">
      <section flex justify-between>
        <!-- 事件属性名 -->
        <span>{{ eventProp.name }}</span>
        <!-- 事件属性编辑按钮 -->
        <n-button
          round
          secondary
          type="primary"
          size="tiny"
          @click="
            () => handleEditEventHandlerBtnClick(eventProp.name, eventProp.code)
          "
          >编写代码</n-button
        >
      </section>
    </n-list-item>
  </n-list>
  <!-- 代码编辑器模态框 -->

  <n-modal
    v-model:show="showEventCodeEditor"
    preset="card"
    :title="`${eventName}(e) { // e 为事件对象`"
    :style="{ width: '800px' }"
  >
    <codemirror
      v-model="eventCode"
      :style="{ height: '400px' }"
      :autofocus="codemirrorConfig.autoFocus"
      :indent-with-tab="codemirrorConfig.indentWithTab"
      :tab-size="codemirrorConfig.tabSize"
      :extensions="codemirrorConfig.extensions"
    />
    <template #footer>
      <span>}</span>
      <div w-full flex justify-end gap-10px>
        <n-button @click="() => (showEventCodeEditor = false)">取消</n-button>
        <n-button type="primary" @click="handleEventCodeUpdate">确认</n-button>
      </div>
    </template>
  </n-modal>
</template>
