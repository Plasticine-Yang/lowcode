import { defineConfig, loadEnv } from 'vite'
// 将commonjs转化为es module
import { cjs2esmVitePlugin } from 'cjs2esmodule'
import { setupVitePlugins, srcPath, rootPath } from './build'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv

  return {
    plugins: [setupVitePlugins(viteEnv), cjs2esmVitePlugin()],
    resolve: {
      alias: {
        '@': srcPath,
        '#': rootPath,
      },
    },
    server: {
      host: '0.0.0.0',
      open: true,
    },
  }
})
