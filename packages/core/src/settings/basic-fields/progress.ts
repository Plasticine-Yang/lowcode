export const progress: IField = {
  id: 30,
  fieldName: '进度条',
  componentName: 'DrawerProgress',
  iconName: 'carbon:progress-bar',
  type: 'basic-senior',
  children: [],
  componentProps: {
    // 进度
    percentage: 0,
    // 颜色
    color: 'blue',
    // type
    type: 'line',
    // 内容
    content: '',
    showPercentage: true,
  },
  componentPropsMeta: {
    percentage: {
      name: '进度',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        max: 100,
      },
    },
    color: {
      name: '颜色',
      fieldComponent: 'n-color-picker',
    },
    type: {
      name: '类型',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          { label: '条形', value: 'line' },
          { label: '圆形', value: 'circle' },
        ],
      },
    },
    content: {
      name: '内容',
      fieldComponent: 'n-input',
    },
    showPercentage: {
      name: '显示进度',
      fieldComponent: 'n-switch',
    },
  },
  style: '',
}
