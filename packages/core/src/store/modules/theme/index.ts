import { defineStore } from 'pinia'
interface Theme {
  theme: string
  globalTheme: string
}

const initThemeState = (): Theme => ({
  theme: localStorage.getItem('theme') || 'light',
  globalTheme: localStorage.getItem('globalTheme') || 'light',
})

export const useTheme = defineStore('theme', {
  state: initThemeState,

  actions: {
    setTheme(theme: string) {
      this.theme = theme
      localStorage.setItem('theme', theme)
    },
    setGlobalTheme(globalTheme: string) {
      this.globalTheme = globalTheme
      localStorage.setItem('globalTheme', globalTheme)
    },
  },
})
