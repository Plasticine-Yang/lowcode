import { generateId } from './generateId'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function transformFieldToDrawer(field: IField): DrawerComponent {
  // 深拷贝
  // const { fieldName, componentName, componentProps, componentPropsMeta } = field
  const fieldcopy = JSON.parse(JSON.stringify(field))
  const drawerComponent: DrawerComponent = {
    id: generateId(),
    componentName: fieldcopy.componentName,
    componentProps: fieldcopy.componentProps,
    componentPropsMeta: fieldcopy.componentPropsMeta,
    dragHandlerName: fieldcopy.fieldName,
  }

  return drawerComponent
}
