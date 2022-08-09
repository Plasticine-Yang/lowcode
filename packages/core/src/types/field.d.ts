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
  // 组件 props 元数据
  componentPropsMeta?: ComponentPropsMeta
  //容器的子组件
  children?: any
}

// 记录组件 props 元数据信息 -- 方便属性配置表单的渲染
// 比如 <n-input> 组件有 clearable 这个属性
// 那么元数据信息编写方式如下
// const meta = {
//   clearable: {
//     name: '可清除'
//   }
// }
type ComponentPropsMeta = Record<
  string,
  {
    // 属性名
    name: string
    // 要用什么表单组件来渲染这个 prop
    // 比如 clearable 这个属性我希望用 <n-switch> 这个组件来渲染
    // 那么就填 n-switch
    fieldComponent: string
    // 对fieldcomponent 自定义组件 传参
    // 比如使用选择器，就要传入选项
    fieldComponentParam?: Record<string, any>
  }
>
