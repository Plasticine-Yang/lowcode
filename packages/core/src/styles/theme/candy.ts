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
    textColor: 'rgb(221, 118, 173)',
    border: 'rgb(221, 118, 173)',
    colorHover: 'rgb(221, 118, 173)',
    borderHover: 'rgb(221, 118, 173)',
    borderFocus: 'rgb(221, 118, 173)',
  },
  Collapse: {
    titleTextColor: 'rgb(221, 118, 173)',
    arrowColor: 'rgb(221, 118, 173)',
    textColor: 'black',
  },
  Tag: {
    // color: 'rgb(221 201 212)',
    // textColor: 'rgb(64, 158, 255)',
    border: '  rgb(221, 118, 173)',
    colorBordered: 'rgb(64, 158, 255)',
  },
  Radio: {
    dotColorActive: 'rgb(64, 158, 255)',
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
}
