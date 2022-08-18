//找到点击的target组件
export const getTarget = (list: any, id: string): any => {
  for (let o of list) {
    if (o.id == id) return o
    if (o.children) {
      if (o.children[0] instanceof Array) {
        for (let item of o.children) {
          const o_ = getTarget(item, id)
          if (o_) return o_
        }
      } else {
        const o_ = getTarget(o.children, id)
        if (o_) return o_
      }
    }
  }
}

//使用filter删除要删除的id
export const recurFilter = (arr: any, id: string) => {
  return arr.filter((item: any) => {
    if (item.id == id) {
      return false
    }
    //flex，gird，collapse的children是二维数组
    if (item.children && item.children[0] instanceof Array) {
      for (let i = 0; i < item.children.length; i++) {
        item.children[i] = recurFilter(item.children[i], id)
      }
    }
    //表单，表单项的children是一维数组
    if (item.children && !(item.children[0] instanceof Array)) {
      item.children = recurFilter(item.children, id)
    }
    return true
  })
}
