<template>
  <n-grid y-gap="8" :cols="2">
    <!-- 单行输入 -->
    <n-grid-item>
      <field-item field-name="单行输入" icon-name="lucide:text-cursor-input" />
    </n-grid-item>

    <!-- 多行输入 -->
    <n-grid-item>
      <field-item field-name="多行输入" icon-name="bi:textarea-resize" />
    </n-grid-item>

    <!-- 计数器 -->
    <n-grid-item>
      <field-item field-name="计数器" icon-name="bi:textarea-resize" />
    </n-grid-item>
  </n-grid>
</template>
