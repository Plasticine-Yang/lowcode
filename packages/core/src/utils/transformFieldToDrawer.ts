import { generateId } from './generateId'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function transformFieldToDrawer(field: IField): DrawerComponent {
  let {
    fieldName,
    componentName,
    componentProps,
    componentPropsMeta,
    children,
  } = field
  //如果是grid栅格的话，其children应该为n个子数组
  if (componentName == 'n-grid') {
    //这里不能使用fill初始化数组，二维数组初始化时，fill填充的为对象类型（数组）为浅拷贝
    children = new Array(componentProps!.cols)
    for (let i = 0; i < children.length; i++) {
      children[i] = []
    }
  }
  const drawerComponent: DrawerComponent = {
    id: generateId(),
    componentName,
    componentProps,
    componentPropsMeta,
    dragHandlerName: fieldName,
    children,
  }

  return drawerComponent
}
