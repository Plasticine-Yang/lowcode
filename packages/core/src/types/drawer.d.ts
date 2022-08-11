interface DrawerComponent {
  // 字段 id 用于唯一标识字段
  id: string
  // 组件名 -- 比如 n-input
  componentName: string
  // 左上角拖拽把手显示的名字 -- 比如 单行输入
  dragHandlerName: string
  // 组件 props
  componentProps?: Record<string, any>
  // 组件 props 元数据
  componentPropsMeta?: ComponentPropsMeta
  //容器的子组件
  children?: DrawerComponent[]
  // 组件的类型
  type: 'senior' | 'contain' | 'basic' | 'basic-senior'
}
