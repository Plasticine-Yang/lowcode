export const checkbox: IField = {
  id: 8,
  fieldName: '复选框',
  componentName: 'drawerCheckBox',
  iconName: 'bx:select-multiple',
  style: '',
  type: 'basic-senior',
  componentProps: {
    number: 4,
  },
  componentPropsMeta: {
    number: {
      name: '复选框数量',
      fieldComponent: 'input-number-attribute',
      fieldComponentParam: {
        size: 4,
      },
    },
  },
}
