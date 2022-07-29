/**
 * @description 短横线分隔字符串(kebab-case)转大驼峰(PascalCase)字符串
 */
export const kebab2Pascal = (str: string) => {
  const strArr = str.split('-')
  return strArr
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join('')
}
