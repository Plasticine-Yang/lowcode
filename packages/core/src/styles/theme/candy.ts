import type { GlobalThemeOverrides } from 'naive-ui'
//黑暗
export const candyTheme: GlobalThemeOverrides = {
  common: {
    textColorBase: '#fff',
    bodyColor: 'black',
    borderColor: 'black',
    textColor1: 'rgb(221, 118, 173)',
    dividerColor: '#fff',
  },
  Dropdown: {
    color: '#fff',
    optionTextColor: 'rgb(221, 118, 173)',
    // optionTextColorActive: '#e3adca',
    optionTextColorHover: '#e3adca',
  },
  Button: {
    color: 'rgb(221, 118, 173)',
    textColor: '#fff',
    border: 'rgb(221, 118, 173)',
    colorHover: 'rgb(234 189 213)',
    textColorHover: '#fff',
    textColorFocus: '#fff',
    colorFocus: 'rgb(234 189 213)',
    borderHover: 'rgb(221, 118, 173)',
    borderFocus: 'rgb(221, 118, 173)',
  },
  Collapse: {
    titleTextColor: 'rgb(221, 118, 173)',
    arrowColor: 'rgb(221, 118, 173)',
    textColor: 'black',
  },
  Tag: {
    border: '  rgb(221, 118, 173)',
    colorBordered: 'rgb(64, 158, 255)',
  },
  Radio: {
    dotColorActive: 'rgb(221, 118, 173)',
    buttonTextColorActive: 'rgb(221, 118, 173)',
  },
  Checkbox: {
    colorChecked: 'rgb(221, 118, 173)',
  },
  Switch: {
    railColorActive: 'rgb(221, 118, 173)',
  },
  Form: {
    labelTextColor: 'black',
  },
  Input: {
    loadingColor: 'rgb(221, 118, 173)',
    caretColor: 'rgb(221, 118, 173)',
    borderFocus: 'rgb(221, 118, 173)',
    borderHover: 'rgb(221, 118, 173)',
  },
  Tabs: {
    barColor: 'orange',
    tabTextColorActiveBar: '#f2ae2e',
    tabTextColorHoverBar: '#f2ae2e',
    tabTextColorBar: '#f0b6c0',
  },
  Divider: {
    color: 'black',
    textColor: 'rgb(221, 118, 173)',
  },
}
