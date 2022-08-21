export const singleLineInput: IField = {
  id: 4,
  fieldName: '单行输入',
  componentName: 'DrawerInput',
  iconName: 'lucide:text-cursor-input',
  type: 'basic-senior',
  componentProps: {
    type: 'text',
    clearable: false,
    readonly: false,
    disabled: false,
    placeholder: '',
    loading: false,
    autofocus: false,
    round: false,
    showCount: false,
    value: '123',
  },
  // 需要显示在属性配置面板的属性就在这里编写相关元数据信息
  // 比如 type: 'text' 这种属性不希望被用户修改 就不需要写进来
  // 属性配置面板只会渲染元数据中定义的属性
  componentPropsMeta: {
    placeholder: {
      name: '提示信息',
      fieldComponent: 'input-attribute',
    },
    clearable: {
      name: '是否可清除',
      fieldComponent: 'n-switch',
    },
    readonly: {
      name: '是否只读',
      fieldComponent: 'n-switch',
    },
    disabled: {
      name: '是否禁用',
      fieldComponent: 'n-switch',
    },
    autofocus: {
      name: '是否自动获取焦点',
      fieldComponent: 'n-switch',
    },
    loading: {
      name: '是否展示加载图标',
      fieldComponent: 'n-switch',
    },
    round: {
      name: '是否圆角',
      fieldComponent: 'n-switch',
    },
    showCount: {
      name: '是否显示字数',
      fieldComponent: 'n-switch',
    },
  },
  style: '',
  eventProps: {
    // 通过高阶函数的方式，利用 eval 执行编辑器代码 并利用闭包特性让编辑器代码能够访问到事件对象
    onFocus: {
      name: 'onFocus',
      code: 'console.log("focus")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
    },
    onBlur: {
      name: 'onBlur',
      code: 'console.log("blur")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
    },
    onChange: {
      name: 'onChange',
      code: 'console.log("change")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
    },
    onInput: {
      name: 'onInput',
      code: 'console.log("input")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
    },
  },
}
