<template>
  <div class="form_wrapper">
    <form action="" ref="form">
      <n-button class="back">
        <router-link to="/index">返回</router-link>
      </n-button>
      <span>{{ route.name === 'sign_up' ? '注册' : '登录' }}</span>
      <input type="text" placeholder="请输入账号" v-model="username" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <button @click.prevent="submit">提交</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store'
import { useTokenInjector } from '@/composables'
import api from '@/apis'

const enum Type {
  SIGN_UP = 'sign_up',
  SIGN_IN = 'sign_in',
}

const route = useRoute()
const userStore = useUserStore()
const router = useRouter()
const username = ref<string>()
const password = ref<string>()
const { injectTokenToLocalStorage } = useTokenInjector()

const submit = () => {
  const url =
    route.name == Type.SIGN_IN ? '/account/sign_in' : '/account/sign_up'
  api.post!(url, {
    username: username.value,
    password: password.value,
  }).then(response => {
    if (response.code === 20000 && response.data.accessToken) {
      // 更改当前用户信息
      userStore.changeUserInfo(response.data)
      // 注入token之后携带
      injectTokenToLocalStorage(response.data.accessToken)
      // 跳转到 home
      router.push('/index')
    } else {
      alert(response.message)
    }
  })
}
</script>

<style scoped>
.form_wrapper {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(45deg, #ccfbff, #ef96c5);
  display: flex;
}
form {
  margin: 0 auto;
  margin-top: 50px;
  width: 400px;
  height: 350px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(136, 136, 136, 0.5);
}
form > span {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 30px;
}
form > input {
  width: 200px;
  height: 30px;
  color: #000;
  margin: 0 auto;
  border: 0;
  border-bottom: 1px solid #000;
  margin-bottom: 30px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
  color: #777;
}

form > input:focus {
  outline: none;
  background-color: rgb(232, 240, 254);
}
form button {
  width: 100px;
  height: 30px;
  background-color: rgb(0, 103, 184);
  color: #fff;
  border: none;
  cursor: pointer;
}
form button:hover {
  background-color: rgb(0, 93, 166);
}

form button:active {
  background-color: rgb(204, 204, 204);
}

form > .back {
  float: left;
  width: 60px;
  align-self: flex-start;
}
</style>
