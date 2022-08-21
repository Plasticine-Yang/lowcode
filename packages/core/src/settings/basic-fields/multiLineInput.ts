import { singleLineInput } from './singleLineInput'

export const multiLineInput: IField = Object.assign({}, singleLineInput, {
  id: 6,
  fieldName: '多行输入',
  iconName: 'bi:textarea-resize',
  componentProps: Object.assign({}, singleLineInput.componentProps, {
    type: 'textarea',
    value: '',
  }),
})
