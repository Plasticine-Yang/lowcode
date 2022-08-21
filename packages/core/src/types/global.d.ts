interface EventPropValue {
  // 事件属性名 -- 比如 onClick
  name: string
  // 事件监听器的代码
  code: string
  // 事件属性监听器函数生成器
  eventHandlerGenerator: EventHandlerGenerator
  // 事件属性监听器函数参数描述符
  eventHandlerArgsDescriptor: {
    [arg: string]: string
  }
}

// 事件属性监听器函数生成器的类型 -- 约束闭包函数的事件对象参数得是 Event 或其子类型
type EventHandlerGenerator = (code: string) => (...args: any[]) => void
