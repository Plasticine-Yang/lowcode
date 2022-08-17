export const flex: IField = {
  //这个组件主要是想实现可以按照比例分割
  id: 1,
  componentName: 'drawerFlex',
  componentProps: {
    cols: 2,
    flexText: '1,2',
    interval: 10,
  },
  componentPropsMeta: {
    cols: {
      name: '容器数量',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 12,
      },
    },
    flexText: {
      name: '容器比例',
      fieldComponent: 'input-attribute',
    },
    interval: {
      name: '容器间隔',
      fieldComponent: 'slider-attribute',
    },
  },
  iconName: 'arcticons:orange-flex',
  fieldName: 'flex布局',
  type: 'contain',
  children: [[], []],
  style: '',
}
