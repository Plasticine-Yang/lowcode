interface EventPropValue<E extends Event = Event> {
  // 事件属性名 -- 比如 onClick
  name: string
  // 事件监听器的代码
  code: string
  // 事件属性监听器函数生成器
  eventHandlerGenerator: EventHandlerGenerator<E>
}

// 事件属性监听器函数生成器的类型 -- 约束闭包函数的事件对象参数得是 Event 或其子类型
type EventHandlerGenerator<E extends Event = Event> = (
  code: string,
) => (e: E) => void
