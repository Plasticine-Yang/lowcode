import type { GlobalThemeOverrides } from 'naive-ui'
//黑暗
export const darkTheme: GlobalThemeOverrides = {
  common: {
    textColorBase: '#fff',
    bodyColor: 'black',
    borderColor: 'black',
    textColor1: '#fff',
    dividerColor: '#fff',
  },
  Dropdown: {
    color: 'black',
    optionTextColor: '#fff',
  },
  Button: {
    textColor: '#fff',
    border: '#fff',
  },
  Collapse: {
    titleTextColor: '#fff',
    arrowColor: '#fff',
  },
  Tag: {
    color: '#fff',
  },
  Radio: {
    dotColorActive: 'black',
  },
  Switch: {
    railColorActive: '#fff',
    // railColor: '#fff',
  },
  Card: {
    textColor: 'black',
    titleTextColor: 'black',
  },
  Alert: {
    color: 'black',
    iconColorInfo: 'black',
    iconColor: 'black',
    titleTextColor: 'black',
    titleTextColorInfo: 'black',
  },
}
