export const button: IField = {
  id: 2,
  fieldName: '按钮',
  componentName: 'drawerButton',
  iconName: 'material-symbols:radio-button-checked',
  type: 'basic-senior',
  componentProps: {
    Buttontext: '输入文本',
    type: 'default',
    bordered: false,
    dashed: false,
    disabled: false,
    focusable: true,
    ghost: false,
    loading: false,
    quaternary: false,
    round: false,
    tertiary: false,
    secondary: false,
  },
  componentPropsMeta: {
    Buttontext: {
      name: '按钮文本',
      fieldComponent: 'input-attribute',
    },
    type: {
      name: '类型',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '默认的',
            value: 'default',
          },
          {
            label: '主要的',
            value: 'primary',
          },
          {
            label: '成功',
            value: 'success',
          },
          {
            label: '信息',
            value: 'info',
          },
          {
            label: '警告',
            value: 'warning',
          },
          {
            label: '错误',
            value: 'error',
          },
        ],
      },
    },
    bordered: {
      name: '是否有边框',
      fieldComponent: 'n-switch',
    },
    dashed: {
      name: '边框是否为虚线',
      fieldComponent: 'n-switch',
    },
    disabled: {
      name: '是否禁用',
      fieldComponent: 'n-switch',
    },
    focusable: {
      name: '是否可被聚焦',
      fieldComponent: 'n-switch',
    },
    ghost: {
      name: '是否透明',
      fieldComponent: 'n-switch',
    },
    loading: {
      name: '是否显示加载状态',
      fieldComponent: 'n-switch',
    },
    secondary: {
      name: '是否为次要按钮',
      fieldComponent: 'n-switch',
    },
    tertiary: {
      name: '是否为三级按钮',
      fieldComponent: 'n-switch',
    },
    quaternary: {
      name: '是否为四级按钮',
      fieldComponent: 'n-switch',
    },
    round: {
      name: '是否为圆角',
      fieldComponent: 'n-switch',
    },
  },
  style: '',
  eventProps: {
    onBlur: {
      name: 'onBlur',
      code: 'console.log("blur")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
    onFocus: {
      name: 'onFocus',
      code: 'console.log("focus")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
  },
}
