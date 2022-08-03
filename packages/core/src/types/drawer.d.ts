interface DrawerComponent {
  // 字段 id 用于唯一标识字段
  id: string
  // 组件名 -- 比如 n-input
  componentName: string
  // 左上角拖拽把手显示的名字 -- 比如 单行输入
  dragHandlerName: string
  // 普通属性
  componentProps?: Record<string, any>
}
