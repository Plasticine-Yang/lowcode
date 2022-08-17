export const rate: IField = {
  id: 10,
  componentName: 'n-rate',
  fieldName: '评分器',
  type: 'basic',
  style: '',
  iconName: 'ic:baseline-star-rate',
  componentProps: {
    allowHalf: false,
    count: 5,
    defaultValue: 0,
    readonly: false,
    size: 'medium',
  },
  componentPropsMeta: {
    allowHalf: {
      name: '是否允许只激活一半图标',
      fieldComponent: 'n-switch',
    },
    count: {
      name: '图标个数',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 10,
        minNum: 0,
      },
    },
    defaultValue: {
      name: '默认激活图标个数',
      fieldComponent: 'input-attribute',
    },
    readonly: {
      name: '是否只读',
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
}
