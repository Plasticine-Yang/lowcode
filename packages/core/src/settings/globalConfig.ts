export let globalConfigs = {
  componentsProps: {
    globalTheme: 'light', //这个具体展示出来的样式还可以再调
  },
  componentPropsMeta: {
    globalTheme: {
      name: '主题',
      fieldComponent: 'n-select',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '默认',
            value: 'light',
          },
          {
            label: '蜜糖主题',
            value: 'candy',
          },
          {
            label: '天蓝色主题',
            value: 'blue',
          },
        ],
      },
    },
  },
  style: {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    background: '#fff',
    color: 'black',
  },
  stylePropsMeta: {
    paddingTop: {
      name: '上内边距',
      fieldComponent: 'n-input',
    },
    paddingBottom: {
      name: '下内边距',
      fieldComponent: 'n-input',
    },
    paddingLeft: {
      name: '左内边距',
      fieldComponent: 'n-input',
    },
    paddingRight: {
      name: '右内边距',
      fieldComponent: 'n-input',
    },
    background: {
      name: '背景颜色',
      fieldComponent: 'n-color-picker',
    },
    color: {
      name: '文本框文本颜色',
      fieldComponent: 'n-color-picker',
    },
  },
}
