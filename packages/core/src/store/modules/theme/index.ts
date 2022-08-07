import { defineStore } from 'pinia'
interface theme {
  theme: string
}

const initThemeState = (): theme => {
  return {
    theme: localStorage.getItem('theme') || 'light',
  }
}

export const useTheme = defineStore('theme', {
  state: initThemeState,

  actions: {
    setTheme(theme: string) {
      this.theme = theme
      localStorage.setItem('theme', theme)
    },
  },
})
