export const textInput: IField = {
  id: 13,
  fieldName: '文本框',
  componentName: 'drawerText',
  iconName: 'material-symbols:format-color-text',
  type: 'basic-senior',
  style: '',
  componentProps: {
    style: {
      width: '100%',
      lineHeight: '30px',
      // color: 'orange',
      height: '30px',
    },
    inputText: '123',
  },
  componentPropsMeta: {
    width: {
      name: '长度',
      fieldComponent: 'input-attribute',
    },
    height: {
      name: '高度',
      fieldComponent: 'input-attribute',
    },
    lineHeight: {
      name: '行高',
      fieldComponent: 'input-attribute',
    },
    inputText: {
      name: '文本内容',
      fieldComponent: 'input-attribute',
    },
  },
}
