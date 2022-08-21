export const avatar: IField = {
  id: 12,
  fieldName: '头像',
  componentName: 'DrawerAvatar',
  iconName: 'icon-park-solid:avatar',
  type: 'basic-senior',
  componentProps: {
    bordered: false,
    color: 'transparent',
    fallbackSrc: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
    objectFit: 'fill',
    round: false,
    size: 'medium',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
  },
  componentPropsMeta: {
    bordered: {
      name: '头像是否带边框',
      fieldComponent: 'n-switch',
    },
    color: {
      name: '头像背景色',
      fieldComponent: 'n-color-picker',
    },
    fallbackSrc: {
      name: '头像加载失败时显示的图片的地址',
      fieldComponent: 'n-input',
    },
    objectFit: {
      name: '头像的图片在容器内的的适应类型',
      fieldComponent: 'selectAttribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: 'fill',
            value: 'fill',
          },
          {
            label: 'contain',
            value: 'contain',
          },
          {
            label: 'cover',
            value: 'cover',
          },
          {
            label: 'none',
            value: 'none',
          },
          {
            label: 'scale-down',
            value: 'scale-down',
          },
        ],
      },
    },
    round: {
      name: '头像是否圆形',
      fieldComponent: 'n-switch',
    },
    size: {
      name: '头像尺寸',
      fieldComponent: 'selectAttribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '小',
            value: 'small',
          },
          {
            label: '中',
            value: 'medium',
          },
          {
            label: '大',
            value: 'large',
          },
        ],
      },
    },
    src: {
      name: '头像的地址',
      fieldComponent: 'n-input',
    },
  },
  style: '',
  eventProps: {
    // 通过高阶函数的方式，利用 eval 执行编辑器代码 并利用闭包特性让编辑器代码能够访问到事件对象
    onError: {
      name: 'onError',
      code: 'console.log("头像的图片加载失败执行的回调")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
  },
}
