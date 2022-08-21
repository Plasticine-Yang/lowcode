<script setup lang="ts">
import { useDrawerComponentPropsTransformer } from '@/hooks'

interface Props {
  element: DrawerComponent
}

defineProps<Props>()

const transformComponentProps = useDrawerComponentPropsTransformer()
</script>

<template>
  <div>
    <n-tag v-bind="transformComponentProps(element)">
      {{ element.componentProps!.content }}
    </n-tag>
  </div>
</template>
