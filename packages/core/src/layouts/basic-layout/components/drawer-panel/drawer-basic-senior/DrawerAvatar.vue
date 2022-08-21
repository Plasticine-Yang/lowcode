<script setup lang="ts">
import { useDrawerComponentPropsTransformer } from '@/hooks'

interface Props {
  element: DrawerComponent
}

defineProps<Props>()

const transformComponentProps = useDrawerComponentPropsTransformer()
</script>

<template>
  <n-avatar v-bind="transformComponentProps(element)" />
</template>
