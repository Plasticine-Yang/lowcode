import { generateId } from './generateId'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function transformFieldToDrawer(field: IField): DrawerComponent {
  const fieldcopy = JSON.parse(JSON.stringify(field))
  const drawerComponent: DrawerComponent = {
    id: generateId(),
    componentName: fieldcopy.componentName,
    componentProps: fieldcopy.componentProps,
    componentPropsMeta: fieldcopy.componentPropsMeta,
    dragHandlerName: fieldcopy.fieldName,
    children: fieldcopy.children,
    type: fieldcopy.type,
    style: fieldcopy.style,
  }

  return drawerComponent
}
