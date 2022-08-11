export const button: IField = {
  id: 11,
  fieldName: '按钮',
  componentName: 'drawerButton',
  iconName: 'bx:select-multiple',
  type: 'basic-senior',
  componentProps: {
    Buttontext: '输入文本',
    type: 'primary',
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
          'primary',
          'default',
          'tertiary',
          'success',
          'info',
          'warning',
          'error',
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
}
