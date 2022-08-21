export const tag: IField = {
  id: 3,
  fieldName: '标签',
  componentName: 'drawerTag',
  iconName: 'tabler:tag',
  type: 'basic-senior',
  componentProps: {
    bordered: true,
    type: 'default',
    content: '标签',
    closable: false,
  },
  // 需要显示在属性配置面板的属性就在这里编写相关元数据信息
  // 比如 type: 'text' 这种属性不希望被用户修改 就不需要写进来
  // 属性配置面板只会渲染元数据中定义的属性
  componentPropsMeta: {
    bordered: {
      name: '是否带有边框',
      fieldComponent: 'n-switch',
    },
    type: {
      name: '标签类型',
      fieldComponent: 'selectAttribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: 'default',
            value: 'default',
          },
          {
            label: 'primary',
            value: 'primary',
          },
        ],
      },
    },
    closable: {
      name: '是否可关闭',
      fieldComponent: 'n-switch',
    },
    disabled: {
      name: '是否禁用',
      fieldComponent: 'n-switch',
    },
    round: {
      name: '是否圆角',
      fieldComponent: 'n-switch',
    },
    size: {
      name: '尺寸',
      fieldComponent: 'selectAttribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '小',
            value: 'small',
          },
          {
            label: '中',
            value: 'medium',
          },
          {
            label: '大',
            value: 'large',
          },
        ],
      },
    },
    strong: {
      name: '文字是否加粗',
      fieldComponent: 'n-switch',
    },
    triggerClickOnClose: {
      name: '关闭时是否触发点击事件',
      fieldComponent: 'n-switch',
    },
  },
  style: '',
  eventProps: {
    onClose: {
      name: 'onClose',
      code: 'console.log("close")',
      eventHandlerGenerator: code => (e: MouseEvent) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'MouseEvent',
      },
    },
  },
}
