export const divider: IField = {
  id: 7,
  componentName: 'drawerDivider',
  type: 'basic-senior',
  iconName: 'material-symbols:safety-divider',
  fieldName: '分割线',
  componentProps: {
    dashed: false,
    dividerText: '分割线文字',
    titlePlacement: 'center',
    verticalL: false,
  },
  componentPropsMeta: {
    dashed: {
      name: '是否用虚线分割',
      fieldComponent: 'n-switch',
    },
    dividerText: {
      name: '分割线文字',
      fieldComponent: 'input-attribute',
    },
    titlePlacement: {
      name: '文字位置',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '靠左边',
            value: 'left',
          },
          {
            label: '中间',
            value: 'center',
          },
          {
            label: '靠右边',
            value: 'right',
          },
        ],
      },
    },
    vertical: {
      name: '是否垂直分割',
      fieldComponent: 'n-switch',
    },
  },
}
