export const datePicker: IField = {
  id: 22,
  fieldName: '日期选择器',
  componentName: 'drawer-date-picker',
  iconName: 'bx:select-multiple',
  type: 'basic-senior',
  componentProps: {
    value: 1183135260000,
    type: 'date',
  },
  componentPropsMeta: {
    value: {
      name: '时间戳',
      fieldComponent: 'input-attribute',
    },
    type: {
      name: '格式',
      fieldComponent: 'selectAttribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '日期',
            value: 'date',
          },
          {
            label: '月份',
            value: 'month',
          },
        ],
      },
    },
  },
}
