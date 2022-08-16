export const dropdown: IField = {
  id: 14,
  componentName: 'drawerDropdown',
  componentProps: {
    options: [
      {
        label: '第一行显示内容，可点击',
        key: '123',
        disabled: false,
      },
      {
        label: '第二行显示内容，可点击',
        key: '1234',
        disabled: false,
      },
      {
        label: '第三行显示内容，可点击',
        key: '12345',
        disabled: true,
      },
    ],
    optionsLength: 3,
    // animated
  },
  componentPropsMeta: {
    options: {
      name: '内容设置',
      fieldComponent: 'collapse-attribute',
    },
    optionsConfig: {
      label: {
        name: '显示内容',
        fieldComponent: 'n-input',
      },
      key: {
        name: '对应数据',
        fieldComponent: 'n-input',
      },
      disabled: {
        name: '是否可点击',
        fieldComponent: 'n-switch',
      },
    },
    optionsLength: {
      name: '下拉菜单个数',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 10,
      },
    },
  },
  fieldName: '下拉菜单',
  type: 'senior',
  iconName: 'carbon:list-dropdown',
  componentDisplay: 'dropdownDisplay',
}
