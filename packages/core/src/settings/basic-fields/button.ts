export const button: IField = {
  id: 11,
  fieldName: '按钮',
  componentName: 'drawerButton',
  iconName: 'bx:select-multiple',
  type: 'basic-senior',
  componentProps: {
    Buttontext: '输入文本',
    type: 'primary',
  },
  componentPropsMeta: {
    Buttontext: {
      name: '按钮文本',
      fieldComponent: 'input-attribute',
    },
    // type: {
    //   name
    // }
  },
  style: '',
}
