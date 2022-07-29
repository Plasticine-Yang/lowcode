<template>
  <section class="wh-full flex-center">setting panel</section>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import EventBus from '@/lib/bus'

// 当前控件
const currentWidget = ref()
// 注入事件总线
const $bus = inject('$bus') as EventBus
$bus.on('changeCurrentEdit', (evt: Event) => {
  console.log(evt, 'evt')
  currentWidget.value = evt.target
})
</script>
