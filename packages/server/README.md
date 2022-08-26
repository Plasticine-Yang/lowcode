## 后台
分为 注册、登录、保存、获取列表、详情
数据库使用 mongodb
存在两种文档： 用户校验信息，用户配置信息
传递数据使用 jwt , jwt 具有时效性
需要 token 的接口请在 body 中携带 accessToken 
### 错误代码 code
40000 其它错误
40001 token超时
40002 账户已存在
40003 账号或密码错误
40004 token错误

### 字段

username：登录的用户名

nickname：显示昵称，默认与用户名相同

avatarUrl：头像 url

componentJsonList：所有配置列表，默认为空

componentJson: 需要保存的配置



### 注册

先实现注册：
1. 携带用户名和密码进行注册，如果数据库具备该用户名，则代表该账户已存在，返回 code: 40002
```javascript
axios.post('/account/sign_up', {
    username: "",
    password: ""
})
```
2. 否则将其加入数据库，并配置默认信息
3. 如果注册成功，根据用户名和密码生成 hash 字符串，保存到用户校验信息库中
4. 返回 jwt 以及默认配置信息
   ```json
    {
        "code": 20000,
        "data": {
            "accessToken": "", // 返回的 token 根据这个获取信息
            "avatarUrl": "", // 返回默认头像地址
            "configList": [],
            "nickname": "" //昵称，默认为用户名
        },
        "message": "注册成功"
    }
   ```

### 登录，获取列表
登录：
1. 携带用户名和密码传入后端，后端进行校验，如果成功返回对应配置信息，
   其中包含用户保存的 JSON 表单数据
```javascript
axios.post('/account/sign_in', {
    username: "",
    password: ""
})
```
2. 成功返回 body
```json
    {
        "code": 20000,
        "data": {
            "accessToken": "",
            "avatarUrl": "",
            "nickname": "",
            "componentJsonList": [] // 用户存储的 JSON 数据
        },
        "message": "配置获取成功"
    }
```
3. 失败返回 body
```json
    {
        "code": 40003,
        "message": "用户名或密码错误"
    }
```

### 保存(需要携带 token)
1. 将 JSON 信息放入 req.body 中
```javascript
    axios.patch("component_json/save", {
        "accessToken": "xxx",
        "componentJson": "xxx"
    })
```
2. 校验成功会存储至对应的数据项并返回新的数据 body
```json
    {
        "code": 20000,
        "data": {
            "avatarUrl": "",
            "nickname": "",
            "componentJsonList": [] // 用户存储的 JSON 数据
        },
        "message": "成功保存，数据返回"
    }
```
3. 校验失败
```json
    {
        "code": 40000,
        "message": "保存失败，具体原因待定"
    }
```

### 修改个人信息
1. 请求
``` javascript
axios.patch('account/user_info/change', {
    accessToken: "",
    avatarUrl: "",
  	nickname: ""
})
```
2. 如果 token 不合法，重新登录
```json
    {
        "code": 40001,
        "message": "token 不合法"
    }
```
3. 成功返回
``` json
    {
        "code": 20000,
        "data": {
            "avatarUrl": "",
            "nickname": ""
        },
        "message": "配置成功"
    }
```