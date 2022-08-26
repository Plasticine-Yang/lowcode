export const dropdown: IField = {
  id: 14,
  componentName: 'drawerDropdown',
  componentProps: {
    showText: '展示文字',
    options: [
      {
        label: '第1行显示内容，可点击',
        key: '1',
        disabled: false,
      },
      {
        label: '第2行显示内容，可点击',
        key: '2',
        disabled: false,
      },
      {
        label: '第3行显示内容，可点击',
        key: '3',
        disabled: true,
      },
    ],
    optionsLength: 3,
    animated: true,
    size: 'medium',
    showArrow: false,
    trigger: 'hover',
  },
  componentPropsMeta: {
    showText: {
      name: '展示文字',
      fieldComponent: 'input-attribute',
    },
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
      showArrow: {
        name: '是否显示箭头',
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
    animated: {
      name: '是否动画',
      fieldComponent: 'n-switch',
    },
    trigger: {
      name: '触发方式',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '经过触发',
            value: 'hover',
          },
          {
            label: '点击触发',
            value: 'click',
          },
        ],
      },
    },
    size: {
      name: '尺寸大小',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '较小',
            value: 'small',
          },
          {
            label: '标准',
            value: 'medium',
          },
          {
            label: '较大',
            value: 'large',
          },
          {
            label: '巨大',
            value: 'huge',
          },
        ],
      },
    },
  },
  fieldName: '下拉菜单',
  type: 'senior',
  iconName: 'carbon:list-dropdown',
  componentDisplay: 'dropdownDisplay',
}
