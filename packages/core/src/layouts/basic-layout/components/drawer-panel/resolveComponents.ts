import { NInput, NRadio, NCheckbox, NButton, NRate } from 'naive-ui'

import { drawerBasicSenior } from './drawerBasic-senior'
import { drawerContain } from './drawerContain'
import { drawerSenior } from './drawerSenior'
export default {
  NInput,
  NRadio,
  NCheckbox,
  NButton,
  NRate,
  ...drawerBasicSenior,
  ...drawerContain,
  ...drawerSenior,
}

//只要是可以拖入容器的话就不可以在这里进行声明！
