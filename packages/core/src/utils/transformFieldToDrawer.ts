import { generateId } from './generateId'
import { cloneDeep } from 'lodash-es'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function transformFieldToDrawer(field: IField): DrawerComponent {
  const fieldcopy = cloneDeep(field)
  const drawerComponent: DrawerComponent = {
    id: generateId(),
    componentName: fieldcopy.componentName,
    componentProps: fieldcopy.componentProps,
    componentPropsMeta: fieldcopy.componentPropsMeta,
    dragHandlerName: fieldcopy.fieldName,
    children: fieldcopy.children,
    type: fieldcopy.type,
    style: fieldcopy.style!,
    eventProps: fieldcopy.eventProps,
  }

  return drawerComponent
}
