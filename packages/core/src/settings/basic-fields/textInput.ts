export const textInput: IField = {
  id: 13,
  fieldName: '文本框',
  componentName: 'drawerText',
  iconName: 'material-symbols:format-color-text',
  type: 'basic-senior',
  style: '',
  componentProps: {
    style: {
      width: '100%',
      lineHeight: '30px',
      // color: 'orange',
      height: '30px',
    },
    inputText: '123',
  },
  componentPropsMeta: {
    width: {
      name: '长度',
      fieldComponent: 'input-attribute',
    },
    height: {
      name: '高度',
      fieldComponent: 'input-attribute',
    },
    lineHeight: {
      name: '行高',
      fieldComponent: 'input-attribute',
    },
    inputText: {
      name: '文本内容',
      fieldComponent: 'input-attribute',
    },
  },
  eventProps: {
    onFocus: {
      name: 'onFocus',
      code: 'console.log("focus")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
    onBlur: {
      name: 'onBlur',
      code: 'console.log("blur")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
    onChange: {
      name: 'onChange',
      code: 'console.log("change")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
    onInput: {
      name: 'onInput',
      code: 'console.log("input")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
  },
}
