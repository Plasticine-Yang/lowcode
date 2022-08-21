export const switchSelector: IField = {
  id: 21,
  componentName: 'drawerSwitch',
  fieldName: '开关选择器',
  iconName: 'entypo:switch',
  type: 'basic-senior',
  componentProps: {
    disabled: false,
    loading: false,
    round: true,
    rubberBand: true,
    size: 'medium',
    value: false,
    style: 'height: 32px',
  },
  componentPropsMeta: {
    disabled: {
      name: '是否禁用',
      fieldComponent: 'n-switch',
    },
    loading: {
      name: '是否加载',
      fieldComponent: 'n-switch',
    },
    round: {
      name: '是否为圆形按钮',
      fieldComponent: 'n-switch',
    },
    rubberBand: {
      name: '是否有橡皮筋效果',
      fieldComponent: 'n-switch',
    },
    size: {
      name: '尺寸',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '最小的',
            value: 'small',
          },
          {
            label: '中等的',
            value: 'medium',
          },
          {
            label: '最大的',
            value: 'large',
          },
        ],
      },
    },
  },
  eventProps: {
    'onUpdate:value': {
      name: 'onUpdate:value',
      code: 'console.log("update value")',
      eventHandlerGenerator: (code: string) => (value: boolean) => eval(code),
      eventHandlerArgsDescriptor: {
        value: 'value -- 输入变化的值',
      },
    },
  },
}
