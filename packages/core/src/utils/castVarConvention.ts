type KeBab2PascalMidway<S extends string> =
  S extends `${infer first}-${infer second}${infer rest}`
    ? `${first}${Uppercase<second>}${KeBab2PascalMidway<rest>}`
    : S

type KeBab2Pascal<S extends string> = Capitalize<KeBab2PascalMidway<S>>

/**
 * @description 短横线分隔字符串(kebab-case)转大驼峰(PascalCase)字符串
 */

export function kebab2Pascal<S extends string>(str: S): KeBab2Pascal<S> {
  const strArr = str.split('-')
  return strArr
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join('') as KeBab2Pascal<S>
}
// example
// 可通过传入泛型推导出结果
// const str = 'asd-asd'
// const k = kebab2Pascal<typeof str>(str)
