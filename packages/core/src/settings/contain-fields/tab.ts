export const tab: IField = {
  id: 32,
  fieldName: '标签栏',
  componentName: 'DrawerTabs',
  iconName: 'ep:switch',
  type: 'contain',
  children: [],
  componentProps: {
    pane: 2, // 标签数量
    trigger: 'click', // 触发方式
    tabName1: '标签',
  },
  componentPropsMeta: {
    pane: {
      name: '标签数量',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 12,
      },
    },
    trigger: {
      name: '触发方式',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          { label: '点击', value: 'click' },
          { label: '悬停', value: 'hover' },
        ],
      },
    },
    // 标签名称和value
    tabName1: { name: '标签1', fieldComponent: 'n-input' },
  },
  style: '',
}
