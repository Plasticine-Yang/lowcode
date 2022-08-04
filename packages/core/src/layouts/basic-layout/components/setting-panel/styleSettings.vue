<template>
  <setting-part :model="model"></setting-part>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrawer } from '@/store'
import { FormInst } from 'naive-ui'

const drawer = useDrawer()
const formRef = ref<FormInst | null>(null)
// let model = ref(drawer.activeComponent?.options || {})
let model = ref({
  width: '',
  height: '',
  backgroundColor: '',
  color: '',
  fontSize: '',
})

const rules = {
  type: {},
}
</script>
