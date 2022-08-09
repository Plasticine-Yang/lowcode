import { defineStore } from 'pinia'

interface DrawerState {
  // 画布当中的所有组件
  components: DrawerComponent[]
  // 当前激活的组件
  activeComponent: DrawerComponent | undefined | null
}

const initDrawerState = (): DrawerState => {
  return {
    components: [],
    activeComponent: null,
  }
}

export const useDrawer = defineStore('drawer', {
  state: initDrawerState,

  actions: {
    setActiveComponent(id: string): void {
      this.activeComponent = this.getTarget(this.components, id)
    },
    //找到点击的target
    getTarget(list: any, id: string): any {
      for (let o of list || []) {
        if (o.id == id) return o
        if (o.children) {
          for (let item of o.children) {
            const o_ = this.getTarget(item, id)
            if (o_) return o_
          }
        }
      }
    },
    setComponent(components: DrawerComponent[]): void {
      this.components = components
    },
    removeComponent(id: string) {
      let targetIdx = -1
      this.components.forEach((item, idx) => {
        if (item.id === id) targetIdx = idx
      })

      targetIdx !== -1 && this.components.splice(targetIdx, 1)
    },
    /**
     * @description 取消选中组件
     */
    resetActiveComponent() {
      this.activeComponent = null
    },
  },
})
