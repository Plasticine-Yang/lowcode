<template>
  <n-form ref="formRef" :model="model" label-placement="left" :rules="rules">
    <n-form-item
      v-for="(item, key, index) in model"
      :key="index"
      :path="key"
      :label="key"
    >
      <component
        :is="formType[key].component + '-attribute'"
        v-if="formType[key] != null"
        :attribute="formType.text.props"
        :indexes="key"
      >
      </component>
      <!-- <span>{{ formType[key].component }}</span> -->
      <n-input
        v-else-if="typeof item == 'string'"
        v-model:value="model[key]"
        @keydown.enter.prevent
      />
      <n-switch v-else-if="typeof item == 'boolean'" v-model:value="model[key]">
      </n-switch>
    </n-form-item>
  </n-form>
</template>

<script lang="ts">
import inputAttribute from './inputAttribute.vue'
export default {
  components: {
    inputAttribute,
  },
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrawer } from '@/store'
import { FormInst } from 'naive-ui'

interface Props {
  model: Object
}
const props = defineProps<Props>()
const formRef = ref<FormInst | null>(null)
let model = ref(props.model || {})

const rules = {
  type: {},
}

interface FormTypeItem {
  component: String
  props: Object
}

interface FormType {
  text: FormTypeItem
  placeholder: FormTypeItem
  minWideth: FormTypeItem
  maxWidth: FormTypeItem
}

const formType: FormType = {
  text: {
    component: 'input',
    props: {
      name: '内容',
    },
  },
  placeholder: {
    component: 'input',
    props: {
      name: '占位内容',
    },
  },
  minWideth: {
    component: 'input',
    props: {
      name: '最小宽度',
    },
  },
  maxWidth: {
    component: 'input',
    props: {
      name: '最大宽度',
    },
  },
}
// let getComponent: Function = key => {
//   return formType[key].component + '-attribute'
// }
console.log()
</script>
