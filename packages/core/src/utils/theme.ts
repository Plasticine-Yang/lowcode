import { darkTheme } from '@/styles/theme/dark'
import { lightTheme } from '@/styles/theme/light'
import { blueTheme } from '@/styles/theme/bule'
import { candyTheme } from '@/styles/theme/candy'

import { computed } from 'vue'

export const getTheme = (themer: any) => {
  //获取到选中的主题
  const theme = computed(() => themer.theme)
  console.log(theme.value)
  //因为themeOvrrides依赖的theme会改变，因此可以响应式变化
  const themeList: any = {
    light: lightTheme,
    dark: darkTheme,
    blue: blueTheme,
    candy: candyTheme,
  }
  const themeOverrides = computed(() => {
    return themeList[theme.value]
  })
  return themeOverrides
}
