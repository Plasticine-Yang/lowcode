interface typeShowExample {
  id: string
  componentName: string
  componentProps: Props
  componentPropMeta: object
  dragHandlerName?: string
}
interface Props {
  type?: string
  clearable?: boolean
  readonly?: boolean
  disabled?: boolean
}

export const showExample: typeShowExample[] = [
  {
    id: '1',
    componentName: 'n-input',
    componentProps: {
      type: 'text',
      clearable: false,
      readonly: false,
      disabled: false,
    },
    dragHandlerName: '单行输入',
    componentPropMeta: {
      clearable: {
        name: '可清除',
        fieldComponent: 'n-switch',
      },
      readonly: {
        name: '只读',
        fieldComponent: 'n-switch',
      },
      disabled: {
        name: '禁用',
        fieldComponent: 'n-switch',
      },
    },
  },
]
