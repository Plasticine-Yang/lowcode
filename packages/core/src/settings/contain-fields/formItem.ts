// 一个表单项就放一个输入数据
export const formItem: IField = {
  id: 29,
  fieldName: '表单项',
  componentName: 'drawerFormItem',
  type: 'contain',
  iconName: 'fluent:form-new-20-filled',
  children: [],
  componentProps: {
    label: '标签',
    propertyName: '',
    independent: false,
  },
  componentPropsMeta: {
    label: {
      name: '标签',
      fieldComponent: 'input-attribute',
    },
    propertyName: {
      name: '属性名',
      fieldComponent: 'input-attribute',
    },

    value: {
      name: '属性值',
      fieldComponent: 'input-attribute',
      isDisabled: true,
    },
    independent: {
      name: '是否独立配置',
      fieldComponent: 'n-switch',
    },
  },
}
