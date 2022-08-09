import { generateId } from './generateId'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function transformFieldToDrawer(field: IField): DrawerComponent {
  const fieldcopy = JSON.parse(JSON.stringify(field))
  //如果是grid栅格的话，其children应该为n个子数组
  if (fieldcopy.componentName == 'n-grid') {
    //这里不能使用fill初始化数组，二维数组初始化时，fill填充的为对象类型（数组）为浅拷贝
    fieldcopy.children = new Array(fieldcopy.componentProps!.cols)
    for (let i = 0; i < fieldcopy.children.length; i++) {
      fieldcopy.children[i] = []
    }
  }
  const drawerComponent: DrawerComponent = {
    id: generateId(),
    componentName: fieldcopy.componentName,
    componentProps: fieldcopy.componentProps,
    componentPropsMeta: fieldcopy.componentPropsMeta,
    dragHandlerName: fieldcopy.fieldName,
    children: fieldcopy.children,
  }

  return drawerComponent
}
