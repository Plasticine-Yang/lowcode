interface DrawerComponent {
  // 字段 id 用于唯一标识字段
  id: string
  // 组件名 -- 比如 n-input
  name: string
  // 左上角拖拽把手显示的名字 -- 比如 单行输入
  dragHandlerName: string
  // 组件 props
  options?: object
}