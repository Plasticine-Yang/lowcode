interface typeShowExample {
  id: string
  name: string
  dragHandlerName: string
  options: options
}
interface options {
  type?: string
  placeholder?: string
  minWidth?: string
  maxWidth?: string
  clearable?: false
  showPassword?: false
  readonly?: false
  disabled?: false
  labelName?: string
}
export const showExample: typeShowExample[] = [
  {
    id: '1',
    name: 'n-input',
    dragHandlerName: '单行输入',
    options: {
      type: '类型',
      placeholder: '替代文字',
      minWidth: '最小宽度',
      maxWidth: '最大宽度',
      clearable: false,
      showPassword: false,
      readonly: false,
      disabled: false,
      labelName: '单行输入',
    },
  },
]
