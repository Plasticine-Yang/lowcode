<template>
  <div class="user-panel ml2">
    <n-grid :cols="2" v-if="!isLogin">
      <n-gi>
        <n-button>
          <router-link to="/sign_up">注册</router-link>
        </n-button>
      </n-gi>
      <n-gi>
        <n-button>
          <router-link to="/sign_in">登录</router-link>
        </n-button>
      </n-gi>
    </n-grid>
    <n-dropdown v-else :options="userOptions" @select="toggleModal">
      <div class="user-info">
        <img class="avatar" :src="userStore.$state.avatarUrl" alt="hello" />
        <p>{{ userStore.$state.nickname }}</p>
      </div>
    </n-dropdown>
    <n-modal v-model:show="showUserInfoModal">
      <n-card
        style="width: 600px"
        class="custom-card"
        :bordered="false"
        size="huge"
        preset="card"
        title="个人信息修改"
      >
        <div class="flex" style="margin-bottom: 30px">
          <div style="flex-basis: 60px">头像：</div>
          <UploadImage v-on:update-img-url="updateImgUrl" />
        </div>
        <div class="flex" style="margin-bottom: 30px">
          <div style="flex-basis: 60px">昵称：</div>
          <n-input v-model:value="nickname"></n-input>
        </div>
        <div class="user-info-footer" style="margin-bottom: 30px">
          <n-button id="submit" @click="submitUserInfoForm">提交</n-button>
          <n-button
            @click="
              () => {
                showUserInfoModal = false
              }
            "
            >取消</n-button
          >
        </div>
      </n-card>
    </n-modal>
    <n-modal v-model:show="showComponentJsonListModal">
      <n-card
        style="width: 600px"
        class="custom-card"
        :bordered="false"
        size="huge"
        preset="card"
        title="已保存配置"
      >
        <n-list hoverable v-if="userInfo.componentJsonList.length != 0">
          <n-list-item
            v-for="(item, index) in userInfo.componentJsonList"
            :key="index"
          >
            <n-thing
              :title="'配置' + (index + 1)"
              @click="replaceDrawer(item)"
              style="cursor: pointer"
            >
            </n-thing>
          </n-list-item>
        </n-list>
        <div v-else>当前没有已保存的信息</div>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { userOptions } from '@/user'
import { useToggleModal } from '@/composables'
import { useUserStore, useDrawer } from '@/store'
import api from '@/apis'
import { decrypt } from '@/utils/crypt'
import UploadImage from './UploadImage.vue'
import { JSONParse } from '@/utils/resetSerialize'

const isLogin = ref(false)
const userStore = useUserStore()

onMounted(() => {
  // 取得token
  // 长期登录
  const token = localStorage.getItem('access_token')
  isLogin.value = token ? true : false
  if (isLogin.value) {
    // 如果有 token，先携带token获取信息
    api.post!('/account/userinfo', {
      accessToken: token,
    })
      .then(response => {
        // 如果正确返回则更改用户个人信息
        if (response.code === 20000 && response.data) {
          userStore.changeUserInfo(response.data)
        } else {
          // token 无效则不做改变，照常登录
          isLogin.value = false
          alert(response.message)
        }
      })
      .catch(error => {
        // token 有错或者过期都不显示个人中心
        isLogin.value = false
      })
  } else {
    // 没有token正常走登录
  }
})

// 个人信息
const showUserInfoModal = ref(false)
const avatarUrl = ref<string>('')
const updateImgUrl = (imgUrl: string) => {
  avatarUrl.value = imgUrl
}
const nickname = ref<string>('')

const submitUserInfoForm = () => {
  api.patch!('/account/userinfo/change', {
    accessToken: localStorage.getItem('access_token'),
    nickname: nickname.value || userStore.$state.nickname,
    avatarUrl: avatarUrl.value || userStore.$state.avatarUrl,
  }).then(response => {
    if (response.code == 20000) {
      userStore.changeUserInfo(response.data)
      alert('配置修改成功')
      showUserInfoModal.value = false
    } else {
      alert(response.message)
      showUserInfoModal.value = false
    }
  })
}

// 读取配置
const showComponentJsonListModal = ref(false)
const drawer = useDrawer()
const userInfo = reactive(userStore.$state)
const replaceDrawer = componentJson => {
  // 解密后得到JSON字符串
  const component = decrypt(componentJson)
  drawer.setComponent(JSONParse(component))
  showComponentJsonListModal.value = false
}

// 模态切换
const toggleModal = useToggleModal(
  showUserInfoModal,
  showComponentJsonListModal,
  isLogin,
)
</script>

<style scoped>
.user-info {
  width: 100%;
  height: 100%;
  display: flex;
  line-height: 30px;
  vertical-align: middle;
}

.avatar {
  display: inline;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}

.user-info-footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.user-info-footer > #submit {
  margin-right: 20px;
}
</style>
