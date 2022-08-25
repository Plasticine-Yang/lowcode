export const useTokenInjector = () => {
  // 向请求体中注入 accessToken
  const injectTokenToBody = (body: object) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      body.accessToken = token
    }
  }

  const injectTokenToLocalStorage = (token: string) => {
    if (token) {
      localStorage.setItem('access_token', token)
    }
  }
  return {
    injectTokenToBody,
    injectTokenToLocalStorage,
  }
}
