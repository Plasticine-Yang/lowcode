export const collapse: IField = {
  id: 16,
  fieldName: '折叠面板',
  componentName: 'drawer-collapse',
  style: '1',
  componentProps: {
    title: '青铜,黄金',
    accordion: false,
    arrowPlacement: 'left',
  },
  children: [[], []],
  type: 'senior',
  componentDisplay: 'collapse-display',
  componentPropsMeta: {
    title: {
      name: '面板标题',
      fieldComponent: 'input-attribute',
    },
    accordion: {
      name: '是否只允许展开一个面板',
      fieldComponent: 'n-switch',
    },
    arrowPlacement: {
      name: '箭头位置',
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
  },
}
