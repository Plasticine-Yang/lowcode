import type { GlobalThemeOverrides } from 'naive-ui'
//蓝色
export const blueTheme: GlobalThemeOverrides = {
  Dropdown: {
    color: '#fff',
    optionTextColor: 'rgb(64, 158, 255)',
    // optionTextColorActive: '#e3adca',
    optionTextColorHover: 'rgb(142 188 236)',
  },
  Button: {
    color: 'rgb(64, 158, 255)',
    textColor: '#fff',
    colorHover: 'rgb(64, 158, 255)',
    textColorHover: '#fff',
    textColorFocus: '#fff',
    colorFocus: 'rgb(133 193 255)',
    borderHover: 'rgb(133 193 255)',
    borderFocus: 'rgb(133 193 255)',
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
    buttonTextColorActive: 'rgb(64, 158, 255)',
  },
  Checkbox: {
    colorChecked: 'rgb(64, 158, 255)',
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
  Divider: {
    color: 'black',
    textColor: 'rgb(64, 158, 255)',
  },
}
