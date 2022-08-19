export const form: IField = {
  id: 28,
  componentName: 'drawerForm',
  componentProps: {},
  type: 'contain',
  fieldName: '表单',
  iconName: 'clarity:form-line',
  children: [],
}

export const formInitial = {
  componentProps: {
    labelWidth: 80,
    labelAlign: 'right',
    labelPlacement: 'left',
    showLabel: true,
  },
  componentPropsMeta: {
    showLabel: {
      name: '是否展示标签',
      fieldComponent: 'n-switch',
    },
    labelWidth: {
      name: '标签宽度',
      fieldComponent: 'slider-attribute',
    },
    labelAlign: {
      name: '标签宽度',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '左边',
            value: 'left',
          },
          {
            label: '右边',
            value: 'right',
          },
        ],
      },
    },
    labelPlacement: {
      name: '标签位置',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '左边',
            value: 'left',
          },
          {
            label: '上边',
            value: 'top',
          },
        ],
      },
    },
  },
}
