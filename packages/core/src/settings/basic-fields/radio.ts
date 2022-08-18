export const radio: IField = {
  id: 5,
  fieldName: '单选',
  componentName: 'drawer-radio',
  iconName: 'bi:textarea-resize',
  type: 'basic-senior',
  componentProps: {
    style: 'line-height: 35px;height:30px',
    value: '',
    options: [
      {
        label: 'radio1',
        key: 1,
      },
      {
        label: 'radio2',
        key: 2,
      },
      {
        label: 'radio3',
        key: 3,
      },
      {
        label: 'radio4',
        key: 4,
      },
    ],
    prefix: 'radio',
  },
  componentPropsMeta: {
    options: {
      name: '内容设置',
      fieldComponent: 'handle-array-attribute',
    },
    optionsConfig: {
      label: {
        name: '显示内容', // 显示内容不能相同
        fieldComponent: 'n-input',
      },
      key: {
        name: '关键字',
        fieldComponent: 'n-input',
      },
    },
  },
  style: '',
}
