export const datePicker: IField = {
  id: 11,
  fieldName: '日期选择器',
  componentName: 'drawer-date-picker',
  iconName: 'bx:select-multiple',
  type: 'basic-senior',
  style: '',
  componentProps: {
    value: Date.now(),
    type: 'date',
    clearable: true,
    disabled: false,
    inputReadonly: false,
    panel: false,
    placement: 'bottom-start',
    size: 'medium',
  },
  componentPropsMeta: {
    value: {
      name: '时间戳',
      fieldComponent: 'input-attribute',
    },
    type: {
      name: '格式',
      fieldComponent: 'selectAttribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '日期',
            value: 'date',
          },
          {
            label: '月份',
            value: 'month',
          },
        ],
      },
    },
    clearable: {
      name: '是否支持清除',
      fieldComponent: 'n-switch',
    },
    disabled: {
      name: '是否禁用',
      fieldComponent: 'n-switch',
    },
    inputReadonly: {
      name: '是否只读',
      fieldComponent: 'n-switch',
    },
    panel: {
      name: '是否限制只允许通过面板修改日期',
      fieldComponent: 'n-switch',
    },
    placement: {
      name: '面板弹出的位置',
      fieldComponent: 'selectAttribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '上方左侧',
            value: 'top-start',
          },
          {
            label: '上方中央',
            value: 'top',
          },
          {
            label: '上方右侧',
            value: 'top-end',
          },
          {
            label: '右侧上方',
            value: 'right-start',
          },
          {
            label: '右侧中央',
            value: 'right',
          },
          {
            label: '右侧下方',
            value: 'right-end',
          },
          {
            label: '底部右侧',
            value: 'bottom-end',
          },
          {
            label: '底部中央',
            value: 'bottom',
          },
          {
            label: '底部左侧',
            value: 'bottom-start',
          },
          {
            label: '左侧下方',
            value: 'left-end',
          },
          {
            label: '左侧中央',
            value: 'left',
          },
          {
            label: '左侧上方',
            value: 'left-start',
          },
        ],
      },
    },
    size: {
      name: '尺寸',
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
  },
  eventProps: {
    onClear: {
      name: 'onClear',
      code: 'console.log("clear")',
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
    onFocus: {
      name: 'onFocus',
      code: 'console.log("focus")',
      eventHandlerGenerator: (code: string) => (e: Event) => eval(code),
      eventHandlerArgsDescriptor: {
        e: 'Event',
      },
    },
    onUpdateShow: {
      name: 'onUpdateShow',
      code: 'console.log("update show")',
      eventHandlerGenerator: (code: string) => (show: boolean) => eval(code),
      eventHandlerArgsDescriptor: {
        show: 'boolean -- 控制日期组件的显示逻辑',
      },
    },
  },
}
