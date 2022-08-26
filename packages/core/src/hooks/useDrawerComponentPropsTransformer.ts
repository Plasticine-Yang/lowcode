/**
 * @description 将 DrawerComponent 对象转成组件 props 对象 -- 包括基本属性和事件属性
 */
export default function useDrawerComponentPropsTransformer() {
  return (drawerComponent: DrawerComponent) => {
    const eventProps: Record<string, Function> = {}

    // 遍历所有 eventProps 执行 eventHandlerGenerator 拿到事件监听函数赋值即可
    if (drawerComponent.eventProps) {
      // 只在有配置事件属性时才会进行转换
      for (const eventName of Object.keys(drawerComponent.eventProps)) {
        const eventPropValue: EventPropValue =
          drawerComponent.eventProps[eventName]
        // 提取监听器代码以及调用监听器函数生成器生成监听器函数
        const eventCode = eventPropValue.code
        const eventHandler = eventPropValue.eventHandlerGenerator(eventCode)
        // 赋值给 eventProps 生成事件属性
        eventProps[eventName] = eventHandler
      }
    }

    const transformedComponentProps = {
      eventProps: drawerComponent.eventProps,
      ...drawerComponent.componentProps,
      ...eventProps,
    }

    return transformedComponentProps
  }
}
