import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

const iconsPreset = presetIcons()
const unoPreset = presetUno({ dark: 'class' })
const attributifyPreset = presetAttributify()

export default () =>
  Unocss({
    presets: [unoPreset, attributifyPreset, iconsPreset],
    shortcuts: {
      'wh-full': 'w-full h-full',
      'flex-center': 'flex justify-center items-center',
    },
  })
