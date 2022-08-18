export const slider: IField = {
  id: 19,
  fieldName: '滑动选择器',
  componentName: 'DrawerSlider',
  componentProps: {
    range: true,
    max: 20,
    min: 0,
    step: 1,
    vertical: false,
    showTooltip: false,
    style: 'height:30px;padding-top:15px',
  },
  componentPropsMeta: {
    range: {
      name: '是否选择范围值',
      fieldComponent: 'n-switch',
    },

    vertical: {
      name: '是否垂直',
      fieldComponent: 'n-switch',
    },
    showTooltip: {
      name: '是否一直展示值',
      fieldComponent: 'n-switch',
    },
    max: {
      name: '最大值',
      fieldComponent: 'input-attribute',
    },
    min: {
      name: '最小值',
      fieldComponent: 'input-attribute',
    },
    step: {
      name: '步长',
      fieldComponent: 'input-attribute',
    },
  },
  type: 'basic-senior',
  iconName: 'bx:slider-alt',
}
