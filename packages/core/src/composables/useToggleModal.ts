import { useUserStore, useDrawer } from '@/store'
import api from '@/apis'
import { computed } from 'vue'
import { encrypt } from '@/utils/crypt'
import { JSONStringify } from '@/utils/resetSerialize'

type Ref = {
  value: boolean
}

const drawer = useDrawer()
const userStore = useUserStore()

const saveComponents = () => {
  const components = computed(() => drawer.components).value
  // 先将对象 JSONStringify
  const componentJSON = JSONStringify(components)
  // 再将其加密为字符串，读取的时候进行解密，这样数据就不会丢失
  const decryptedComponentJSON = encrypt(componentJSON)
  console.log('components', typeof componentJSON)
  const accessToken = localStorage.getItem('access_token')
  api.patch!('/component_json/save', {
    accessToken,
    componentJson: decryptedComponentJSON,
  }).then(response => {
    console.log('response', response)
    if (response.code === 20000) {
      userStore.changeUserInfo(response.data)
      alert(response.message)
    } else {
      alert(response.message)
    }
  })
}

export const useToggleModal = (
  showUserInfoModal: Ref,
  showComponentJsonListModal: Ref,
  isLogin: Ref,
) => {
  return (key: string) => {
    switch (key) {
      case 'changeUserInfo':
        showUserInfoModal.value = true
        break
      case 'getComponentJsonList':
        showComponentJsonListModal.value = true
        break
      case 'saveComponentJson':
        saveComponents()
        break
      case 'logout':
        isLogin.value = false
        localStorage.removeItem('access_token')
        userStore.clearUserInfo()
      default:
        break
    }
  }
}
