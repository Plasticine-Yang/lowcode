import { useTheme } from '@/store'

export const useToggleTheme = () => {
  const theme = useTheme()

  /**
   * @description 更新主题
   * @param themeKey 主题唯一标识符
   */
  const toggleTheme = (themeKey: string) => {
    setRootDocThemeAttr(themeKey)
    setTimeout(() => {
      theme.setTheme(themeKey)
    }, 500)
  }

  /**
   * @description 在根结点上添加 `data-theme` 属性用于标识系统当前是什么主题
   * @param themeKey 主题唯一标识符
   */
  const setRootDocThemeAttr = (themeKey: string) => {
    window.document.documentElement.setAttribute('data-theme', themeKey)
  }

  setRootDocThemeAttr(theme.theme)

  return toggleTheme
}
