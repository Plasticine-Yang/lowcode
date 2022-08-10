export const lb: IField = {
  id: 6,
  fieldName: '轮播图',
  componentName: 'drawer-carousal',
  type: 'senior',
  showName: 'carouselShow',
  componentProps: {
    imgUrl: ['lb1.png', 'lb2.png', 'lb3.png'],
    imgNum: 3,
    autoplay: true,
    defaultIndex: 0,
    direction: 'horizontal',
    draggable: false,
    interval: 3000,
    showArrow: false,
    showDots: false,
  },
  componentPropsMeta: {
    autoplay: {
      name: '是否自动播放',
      fieldComponent: 'n-switch',
    },
    defaultIndex: {
      name: '默认显示页',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 2,
      },
    },
    direction: {
      name: '轮播图的显示方向',
      fieldComponent: 'input-attribute',
    },
    draggable: {
      name: '是否通过鼠标拖拽切换轮播图',
      fieldComponent: 'n-switch',
    },
    interval: {
      name: '自动播放时间间隔',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 6000,
        minNum: 1000,
        step: 1000, // 滑动灵敏度
      },
    },
    showArrow: {
      name: '是否显示箭头按钮',
      fieldComponent: 'n-switch',
    },
    showDots: {
      name: '是否展示指示点',
      fieldComponent: 'n-switch',
    },
  },
}
