export const collapse: IField = {
  id: 16,
  fieldName: '折叠栏',
  componentName: 'drawer-collapse',
  iconName: 'carbon:collapse-categories',
  style: '1',
  componentProps: {
    itemNum: 2,
    accordion: false,
    arrowPlacement: 'left',
    collapse1: '面板1',
    collapse2: '面板2',
  },
  children: [[], []],
  type: 'contain',
  componentPropsMeta: {
    itemNum: {
      name: '面板数量',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 10,
      },
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
    collapse1: {
      name: '面板1',
      fieldComponent: 'input-attribute',
    },
    collapse2: {
      name: '面板2',
      fieldComponent: 'input-attribute',
    },
  },
}
