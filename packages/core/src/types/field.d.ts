interface IField {
  // 字段 id 用于唯一标识字段
  id: number
  // 对应的 naive-ui 组件名
  componentName: string
  // 字段名
  fieldName: string
  // iconify图标名: https://icon-sets.iconify.design/
  iconName?: string
  // 组件 props
  componentProps?: Record<string, any>
}
