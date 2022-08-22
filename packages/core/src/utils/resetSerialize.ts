// 对象序列化，undefined和函数丢失问题
export const JSONStringify = (option: any) => {
  return JSON.stringify(
    option,
    (key, val) => {
      // 处理函数丢失问题
      if (typeof val === 'function') {
        return `${val}`
      }
      return val
    },
    2,
  )
}
// 对象序列化解析
export const JSONParse = (objStr: any) => {
  return JSON.parse(objStr, (k, v) => {
    if (
      typeof v === 'string' &&
      v.indexOf &&
      (v.indexOf('(code) =>') > -1 || v.indexOf('code=>') > -1)
    ) {
      // eval 可能在eslint中报错，需要加入下行注释
      // eslint-disable-next-line
      return eval(`(function(){return ${v}})()`)
    }
    return v
  })
}
