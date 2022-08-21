<!-- 
  可对传入的数组项 keyname 进行添加或删除
  keyname 的子元素可支持对象或者字符串
 -->
<template>
  <div>
    <div
      style="
        margin-left: 10px;
        display: flex;
        margin-bottom: 20px;
        justify-content: center;
      "
    >
      <n-button class="mr-1" @click="changeOptions('add')" type="primary"
        >增加
      </n-button>
      <n-button @click="changeOptions('remove')" type="primary">
        减少
      </n-button>
    </div>
    <n-collapse>
      <n-collapse-item
        v-for="(item, index) in componentProps![keyname]"
        :key="index"
        :title="`第${index + 1}项`"
      >
        <n-form v-if="isObject(item)">
          <n-form-item
            v-for="(sub, key, indexs) in item"
            :key="indexs"
            :label="componentPropsMeta![`${keyname}Config`][key].name"
          >
            <global-setting-item
              :keys="key"
              :global-props="componentProps![keyname][index]"
              :global-meta=" componentPropsMeta![`${keyname}Config`] "
            ></global-setting-item>
          </n-form-item>
        </n-form>
        <div v-else-if="isString(item)">
          <span>{{ componentPropsMeta![keyname].keyname }}</span>
          <n-input v-model:value="componentProps![keyname][index]" />
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDrawer } from '@/store'
import { generateId } from '@/utils'
const enum Type {
  ADD = 'add',
  REMOVE = 'remove',
}

const props = defineProps(['keyname'])

const drawer = useDrawer()
let componentProps = computed(() => drawer.activeComponent?.componentProps)
let componentPropsMeta = computed(
  () => drawer.activeComponent?.componentPropsMeta,
)

// 针对对象或者字符串渲染不同表单
const isObject = (val): boolean => {
  return typeof val === 'object'
}
const isString = (val): boolean => {
  return typeof val === 'string'
}

/**
 * @description 添加删除选项的方法
 */
const changeOptions = (type: string) => {
  // 获取对应配置
  const options: Options = componentProps.value![props.keyname]
  // 错误处理
  if (!Array.isArray(options)) {
    throw new Error('handle-array-attribute... , options expected an array')
  }
  // 逻辑
  switch (type) {
    case Type.ADD:
      // 每项默认前缀
      const prefix = componentProps.value!.prefix
      const len = options.length

      // 针对不同情况 push 不同默认内容
      isObject(options[0]) &&
        options.push({
          label: `${prefix}${len + 1}`,
          key: generateId(),
        })
      isString(options[0]) && options.push('')

      break
    case Type.REMOVE:
      options.pop()
      break
    default:
      break
  }
}
</script>
