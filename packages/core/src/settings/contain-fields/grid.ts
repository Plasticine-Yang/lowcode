export const grid: IField = {
  id: 1,
  fieldName: '栅格',
  componentName: 'drawerGrid',
  iconName: 'bi:textarea-resize',
  type: 'contain',
  children: [],
  componentProps: {
    cols: 2,
    xGap: '12',
    collapsed: false,
  },
  componentPropsMeta: {
    cols: {
      name: '栅格栏',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 24,
        // emit映射的事件名称：updateValue
        // 定义一下在fieldComponentParam中使用该组件可以填写的参数
        // maxNum?: number // 最大值
        // minNum?: number // 最小值
        // step?: number // 滑动灵敏度
      },
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
  style: '',
}
