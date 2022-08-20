//对grid,flex的children进行修改
export const changeChildren = (drawer: any, e: number) => {
  const children: any = drawer.activeComponent.children
  drawer.activeComponent.children = changeArray(children, e, [])
}

const changeArray = (item: any, e: number, adds: any) => {
  if (item.length > e) {
    item.length = e
  } else {
    const add = Number(e) - Number(item.length)
    for (let i = 0; i < add; i++) {
      //这里不能直接push（adds）因为是浅拷贝，push进去的指向同一地址
      item.push(JSON.parse(JSON.stringify(adds)))
    }
  }
  return item
}
