<template>
  <n-grid x-gap="8" y-gap="8" :cols="2">
    <!-- 单行输入 -->
    <n-grid-item>
      <field-item field-name="单行输入" icon-name="lucide:text-cursor-input" />
    </n-grid-item>

    <!-- 多行输入 -->
    <n-grid-item>
      <field-item field-name="多行输入" icon-name="bi:textarea-resize" />
    </n-grid-item>

    <!-- 单选项 -->
    <n-grid-item>
      <field-item field-name="单选项" icon-name="carbon:radio-button-checked" />
    </n-grid-item>

    <!-- 多选项 -->
    <n-grid-item>
      <field-item field-name="多选项" icon-name="bx:select-multiple" />
    </n-grid-item>
  </n-grid>
</template>
