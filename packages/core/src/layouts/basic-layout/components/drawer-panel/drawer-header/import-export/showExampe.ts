export const showExample = [
  {
    id: '427a91a1-a03f-4470-a722-142bdeba9918',
    componentName: 'DrawerInput',
    componentProps: {
      type: 'text',
      clearable: false,
    },
    componentPropsMeta: {
      placeholder: {
        name: '提示信息',
        fieldComponent: 'input-attribute',
      },
      clearable: {
        name: '是否可清除',
        fieldComponent: 'n-switch',
      },
    },
    dragHandlerName: '单行输入',
    //类型
    type: 'basic-senior',
    style: '',
    //事件属性
    eventProps: {
      onFocus: {
        name: 'onFocus',
        code: 'console.log("focus")',
        eventHandlerGenerator: '(code) => (e) => eval(code)',
        eventHandlerArgsDescriptor: {
          e: 'Event',
        },
      },
      onBlur: {
        name: 'onBlur',
        code: 'console.log("blur")',
        eventHandlerGenerator: '(code) => (e) => eval(code)',
        eventHandlerArgsDescriptor: {
          e: 'Event',
        },
      },
      onChange: {
        name: 'onChange',
        code: 'console.log("change")',
        eventHandlerGenerator: '(code) => (e) => eval(code)',
        eventHandlerArgsDescriptor: {
          e: 'Event',
        },
      },
      onInput: {
        name: 'onInput',
        code: 'console.log("input")',
        eventHandlerGenerator: '(code) => (e) => eval(code)',
        eventHandlerArgsDescriptor: {
          e: 'Event',
        },
      },
    },
  },
]
