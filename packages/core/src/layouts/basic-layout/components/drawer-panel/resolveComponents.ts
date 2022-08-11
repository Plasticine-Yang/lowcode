import { NInput, NRadio, NCheckbox, NButton } from 'naive-ui'

import { drawerBasicSenior } from './drawerBasic-senior'
import { drawerContain } from './drawerContain'
import { drawerSenior } from './drawerSenior'
export default {
  NInput,
  NRadio,
  NCheckbox,
  NButton,
  ...drawerBasicSenior,
  ...drawerContain,
  ...drawerSenior,
}
