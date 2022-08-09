import type { GlobalThemeOverrides } from 'naive-ui'
//黑暗
export const blueTheme: GlobalThemeOverrides = {
  common: {
    textColorBase: '#fff',
    bodyColor: 'black',
    borderColor: 'black',
    textColor1: 'rgb(64, 158, 255)',
    dividerColor: '#fff',
  },
  Dropdown: {
    color: '#fff',
    optionTextColor: 'rgb(64, 158, 255)',
    // optionTextColorActive: '#e3adca',
    optionTextColorHover: 'rgb(142 188 236)',
  },
  Button: {
    textColor: 'rgb(64, 158, 255)',
    border: 'rgb(64, 158, 255)',
    borderFocus: 'rgb(64, 158, 255)',
    borderHover: 'rgb(64, 158, 255)',
    colorFocusPrimary: 'rgb(64, 158, 255)',
    colorFocusSuccess: 'rgb(64, 158, 255)',
  },
  Collapse: {
    titleTextColor: 'rgb(64, 158, 255)',
    arrowColor: 'rgb(64, 158, 255)',
    textColor: 'black',
  },
  Tag: {
    color: 'rgb(241, 242, 243)',
    // textColor: 'rgb(64, 158, 255)',
    border: 'rgb(64, 158, 255)',
    colorBordered: 'rgb(64, 158, 255)',
  },
  Radio: {
    dotColorActive: 'rgb(64, 158, 255)',
  },
  Switch: {
    railColorActive: 'rgb(64, 158, 255)',
  },
  Form: {
    labelTextColor: 'black',
  },
  Tabs: {
    barColor: 'purple',
    tabTextColorActiveBar: '#8a49cb',
    tabTextColorHoverBar: '#8a49cb',
    tabTextColorBar: 'rgb(133 179 226)',
  },
}
