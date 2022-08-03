import { generateId } from './generateId'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function transformFieldToDrawer(field: IField): DrawerComponent {
  const { fieldName, componentName, componentProps, componentPropsMeta } = field
  const drawerComponent: DrawerComponent = {
    id: generateId(),
    componentName,
    componentProps,
    componentPropsMeta,
    dragHandlerName: fieldName,
  }

  return drawerComponent
}
