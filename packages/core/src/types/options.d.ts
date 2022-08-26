interface Option {
  label: string
  key: string
}

type Options = Array<Option | string>

type UserInfo = {
  avatarUrl: string
  nickname: string
  accessToken?: string
  componentJsonList: Array<object>
}

type ApiResponse = {
  code: number
  data: UserInfo
  message: string
}
