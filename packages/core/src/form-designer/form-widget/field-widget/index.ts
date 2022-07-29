// 保存全部模块
let comps: {
  [propName: string]: any
} = {}

// 动态导入全部组件
interface Module {
  default: {
    name: string
  }
}

type Modules = Record<string, Module>

const modules: Modules = import.meta.glob('./*.vue', { eager: true })

for (const path in modules) {
  let cname = modules[path].default.name
  comps[cname] = modules[path].default
}

export default comps
