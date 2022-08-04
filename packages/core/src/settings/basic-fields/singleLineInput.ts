export const singleLineInput: IField = {
  id: 1,
  fieldName: '单行输入',
  componentName: 'n-input',
  iconName: 'lucide:text-cursor-input',
  componentProps: {
    type: 'text',
    clearable: false,
    readonly: false,
    disabled: false,
    placeholder: '',
  },
  // 需要显示在属性配置面板的属性就在这里编写相关元数据信息
  // 比如 type: 'text' 这种属性不希望被用户修改 就不需要写进来
  // 属性配置面板只会渲染元数据中定义的属性
  componentPropsMeta: {
    placeholder: {
      name: '提示信息',
      fieldComponent: 'input-attribute',
    },
    clearable: {
      name: '可清除',
      fieldComponent: 'n-switch',
    },
    readonly: {
      name: '只读',
      fieldComponent: 'n-switch',
    },
    disabled: {
      name: '禁用',
      fieldComponent: 'n-switch',
    },
  },
}
