<template>
  <div class="progress">
    <n-progress
      v-if="element.componentProps.type == 'circle'"
      type="circle"
      :percentage="element.componentProps.percentage"
      :color="element.componentProps.color"
    >
      <span style="text-align: center"
        >{{ element.componentProps.content }}
        <span v-if="element.componentProps.showPercentage">{{
          `${element.componentProps.percentage}%`
        }}</span>
      </span>
    </n-progress>
    <n-progress
      v-else
      type="line"
      :color="element.componentProps.color"
      :percentage="element.componentProps.percentage"
    >
      {{ element.componentProps.content }}
      <span v-if="element.componentProps.showPercentage">{{
        `${element.componentProps.percentage}%`
      }}</span>
    </n-progress>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    element: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.progress {
  width: 100%;
}
</style>
