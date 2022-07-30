import { defineStore } from 'pinia'

interface DrawerState {
  // 画布当中的所有组件
  components: DrawerComponent[]
  // 当前激活的组件
  activeComponent: DrawerComponent | null
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
      const target = this.components.find(item => item.id === id)
      if (target !== undefined) {
        this.activeComponent = target
      }
    },
    removeComponent(id: string) {
      let targetIdx = -1
      this.components.forEach((item, idx) => {
        if (item.id === id) targetIdx = idx
      })

      targetIdx !== -1 && this.components.splice(targetIdx, 1)
    },
  },
})
