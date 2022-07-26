import type { Plugin } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolvePath, typesPath } from '../utils'

const unpluginPlugins: Plugin[] = [
  Components({
    dts: resolvePath(typesPath, 'components.d.ts'),
    dirs: ['src/components', 'src/layouts'],
    resolvers: [NaiveUiResolver()],
  }),
]

export default unpluginPlugins
