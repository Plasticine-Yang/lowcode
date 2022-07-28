/**
 * @description 事件总线
 */
// 在需要使用事件总线的地方使用inject注入
export default class EventBus {
  private events: {
    [propName: string]: Array<Function>
  }
  constructor() {
    this.events = {}
  }
  // 发布事件
  emit(eventName: string, data?: unknown) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        fn(data)
      })
    }
  }
  // 订阅事件,传入函数，在发布事件时执行
  on(eventName: string, fn: Function) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(fn)
  }
  // 取消订阅事件
  off(eventName: string, fn: Function) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1)
          break
        }
      }
    }
  }
}
