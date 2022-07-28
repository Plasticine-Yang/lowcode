<script setup lang="ts">
import { reactive } from 'vue'

const drawerItemList = reactive<any[]>([])
</script>

<template>
  <draggable
    :list="drawerItemList"
    item-key="id"
    group="basic-field"
    class="wh-full bg-white"
    ghost-class="ghost"
    :animation="300"
  >
    <template #item="{ element }">
      <div class="cursor-pointer">{{ element.fieldName }}</div>
    </template>
  </draggable>
</template>
