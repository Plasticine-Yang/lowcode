export const timeLine: IField = {
  id: 25,
  fieldName: '时间线',
  componentName: 'Drawer-timeLine',
  type: 'senior',
  componentDisplay: 'TimeLineDisplay',
  componentProps: {
    options: [
      {
        type: 'success',
        title: '成功的尝试',
        content: '成功的内容',
        time: '2018-04-03',
      },
      {
        type: 'info',
        title: '成功的尝试',
        content: '成功的内容',
        time: '2018-04-03',
      },
    ],
    optionsLength: 2,
    horizontal: false,
    iconSize: 20,
    itemPlacement: 'left',
    size: 'medium',
  },
  componentPropsMeta: {
    options: {
      name: '时间线',
      fieldComponent: 'collapse-attribute',
    },
    optionsConfig: {
      type: {
        name: '类型',
        fieldComponent: 'n-select',
        fieldComponentParam: {
          selectOptions: [
            {
              label: '默认的',
              value: 'default',
            },
            {
              label: '主要的',
              value: 'primary',
            },
            {
              label: '成功',
              value: 'success',
            },
            {
              label: '信息',
              value: 'info',
            },
            {
              label: '警告',
              value: 'warning',
            },
            {
              label: '错误',
              value: 'error',
            },
          ],
        },
      },
      title: {
        name: '标题',
        fieldComponent: 'n-input',
      },
      content: {
        name: '内容',
        fieldComponent: 'n-input',
      },
      time: {
        name: '时间',
        fieldComponent: 'n-input',
      },
    },
    optionsLength: {
      name: '时间线长度',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 20,
      },
    },
    horizontal: {
      name: '是否水平',
      fieldComponent: 'n-switch',
    },
    iconSize: {
      name: '图标大小',
      fieldComponent: 'slider-attribute',
    },
    itemPlacement: {
      name: '方向',
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
    size: {
      name: '大小',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '默认的',
            value: 'medium',
          },
          {
            label: '较大的',
            value: 'large',
          },
        ],
      },
    },
  },
}
