export const checkbox: IField = {
  id: 8,
  fieldName: '复选框',
  componentName: 'drawerCheckBox',
  iconName: 'bx:select-multiple',
  style: '',
  type: 'basic-senior',
  componentProps: {
    options: [
      {
        label: 'checkbox1',
        key: 1,
      },
      {
        label: 'checkbox2',
        key: 2,
      },
      {
        label: 'checkbox3',
        key: 3,
      },
      {
        label: 'checkbox4',
        key: 4,
      },
    ],
    prefix: 'checkbox', // 数组每一项的前置字段
  },
  componentPropsMeta: {
    options: {
      name: '内容设置',
      fieldComponent: 'handle-array-attribute',
    },
    optionsConfig: {
      label: {
        name: '显示内容',
        fieldComponent: 'n-input',
      },
      key: {
        name: '关键字',
        fieldComponent: 'n-input',
      },
    },
  },
  eventProps: {
    onClick: {
      name: 'onClick',
      code: 'console.log("click")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
  },
}
