// 主题唯一标识符
type ThemeKey = 'light' | 'dark' | 'candy' | 'blue'

// 主题下拉选择器组件的 option
type ThemeOption = {
  // 主题中文名
  label: string
  // 主题唯一标识符
  key: ThemeKey
}
