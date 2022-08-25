import { defineStore } from 'pinia'

const initUserInfo = (): UserInfo => ({
  avatarUrl: '',
  nickname: '',
  componentJsonList: [],
})

export const useUserStore = defineStore('userinfo', {
  state: initUserInfo,
  actions: {
    changeUserInfo(newInfo: UserInfo) {
      this.avatarUrl = newInfo.avatarUrl || this.avatarUrl
      this.nickname = newInfo.nickname || this.nickname
      this.componentJsonList =
        newInfo.componentJsonList || this.componentJsonList
    },
    clearUserInfo() {
      ;(this.avatarUrl = ''),
        (this.nickname = ''),
        (this.componentJsonList = [])
    },
  },
})
