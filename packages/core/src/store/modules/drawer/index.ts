import { tr } from 'date-fns/locale'
import { defineStore } from 'pinia'
import { getTarget, recurFilter } from '@/utils/onComponents'
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
      this.activeComponent = getTarget(this.components, id)
    },
    setComponent(components: DrawerComponent[]): void {
      this.components = components
    },
    removeComponent(id: string) {
      this.components = recurFilter(this.components, id)
    },
    /**
     * @description 取消选中组件
     */
    resetActiveComponent() {
      this.activeComponent = null
    },
    // 设置事件属性代码
    setEventPropCode(eventName: string, eventCode: string) {
      if (this.activeComponent?.eventProps) {
        this.activeComponent.eventProps[eventName].code = eventCode
      }
    },
  },
})
