export const grid: IField = {
  id: 5,
  fieldName: '栅格',
  componentName: 'n-grid',
  iconName: 'bi:textarea-resize',
  children: [],
  componentProps: {
    cols: 2,
    xGap: '12',
    collapsed: false,
  },
  componentPropsMeta: {
    cols: {
      name: '栅格栏',
      fieldComponent: 'input-attribute',
    },
    collapsed: {
      name: '是否折叠',
      fieldComponent: 'n-switch',
    },
    xGap: {
      name: '间隔',
      fieldComponent: 'input-attribute',
    },
  },
}
