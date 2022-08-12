<template>
  <section class="wh-full p-10px common-util">
    <n-tabs type="bar" animated>
      <n-tab-pane name="组件库">
        <n-collapse
          :default-expanded-names="[
            'contain-field',
            'basic-field',
            'senior-field',
          ]"
        >
          <n-collapse-item
            title="容器"
            name="contain-field"
            class="common-util"
          >
            <contain-fields></contain-fields>
          </n-collapse-item>
          <!-- 基础字段 -->
          <n-collapse-item
            title="基础字段"
            name="basic-field"
            class="common-util"
          >
            <basic-fields />
          </n-collapse-item>
          <n-collapse-item
            title="高级组件"
            name="senior-field"
            class="common-util"
          >
            <senior-fields />
          </n-collapse-item>
        </n-collapse>
      </n-tab-pane>
      <n-tab-pane name="模版"></n-tab-pane>
    </n-tabs>
  </section>
</template>
