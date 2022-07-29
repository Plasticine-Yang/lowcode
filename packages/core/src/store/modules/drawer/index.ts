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
    setActiveComponent(component: DrawerComponent): void {
      this.activeComponent = component
    },
    addComponent(component: DrawerComponent): void {
      this.components.push(component)
      this.setActiveComponent(component)
    },
  },
})
