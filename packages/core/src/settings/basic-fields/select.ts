export const select: IField = {
  id: 22,
  componentName: 'drawer-select',
  fieldName: '选择器',
  type: 'basic-senior',
  iconName: 'carbon:select-window',
  componentProps: {
    options: [
      {
        label: '第1行显示内容，可点击',
        value: '1',
        disabled: false,
      },
      {
        label: '第2行显示内容，可点击',
        value: '2',
        disabled: false,
      },
      {
        label: '第3行显示内容，可点击',
        value: '3',
        disabled: true,
      },
    ],
    optionsLength: 3,
    multiple: true,
    clearable: true,
    filterable: false,
    placement: 'bottom',
    size: 'medium',
    showArrow: false,
    value: '',
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
      value: {
        name: '对应数据',
        fieldComponent: 'n-input',
      },
      disabled: {
        name: '是否可点击',
        fieldComponent: 'n-switch',
      },
    },
    optionsLength: {
      name: '选项个数',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 10,
      },
    },
    multiple: {
      name: '是否多选',
      fieldComponent: 'n-switch',
    },
    clearable: {
      name: '是否可情况',
      fieldComponent: 'n-switch',
    },
    filterable: {
      name: '是否可过滤',
      fieldComponent: 'n-switch',
    },
    showArrow: {
      name: '是否展示箭头',
      fieldComponent: 'n-switch',
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
        ],
      },
    },
    placement: {
      name: '弹出位置',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '上方',
            value: 'top',
          },
          {
            label: '下方',
            value: 'bottom',
          },
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
