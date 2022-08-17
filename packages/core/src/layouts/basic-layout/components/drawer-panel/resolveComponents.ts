import {
  NInput,
  NRadio,
  NCheckbox,
  NButton,
  NRate,
  NDatePicker,
  NSwitch,
  NSlider,
} from 'naive-ui'

import { DrawerBasicSenior } from './drawer-basic-senior'
import { DrawerContainer } from './drawer-container'
import { DrawerSenior } from './drawer-senior'
export default {
  NInput,
  NRadio,
  NCheckbox,
  NButton,
  NRate,
  NDatePicker,
  NSwitch,
  NSlider,
  ...DrawerBasicSenior,
  ...DrawerContainer,
  ...DrawerSenior,
}

//只要是可以拖入容器的话就不可以在这里进行声明！
