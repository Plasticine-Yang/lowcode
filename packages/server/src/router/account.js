const path = require('path')
const { isString, isEmpty } = require('loadsh')

const {
    jwtToJson
} = require(path.join(__dirname, "../utils/jwt"))

const generateResBody = require(path.join(__dirname, "../utils/generate_res_body"))
const conform = require(path.join(__dirname, "../utils/conform"))

const {
    sign_up,
    sign_in,
    userinfo_change,
    userinfo_get
} = require(path.join(__dirname, "../database"))

function errorTokenHandler(errorCode, errMessage, ctx) {
    ctx.response.status = 400
    ctx.response.body = generateResBody(errorCode, errMessage)
}

module.exports = async router => {
    // 注册接口
    router.post('/account/sign_up', async ctx => {

        // 断言
        const shape = {
            username: isString,
            password: isString
        }

        const body = ctx.request.body
        const errMessage = "router/account/sign_up..., sign_up body parameter excepted a string"
        // 校验, 如果不符合断言返回错误
        conform(body, shape, errMessage)

        // 处理空字符串
        if (body.username == "" || body.password == "") {
            ctx.response.status = 400
            ctx.response.body = generateResBody(40003, "账号或密码不能为空")
        } else {
            // 该方法返回一个 jwt 以及配置信息
            const data = await sign_up(body)
            ctx.body =
                !isEmpty(data)
                    ? generateResBody(20000, "注册成功", data)
                    : generateResBody(40002, "账号已存在")
        }
    })

    // 登录接口
    router.post('/account/sign_in', async ctx => {
        const shape = {
            username: isString,
            password: isString
        }

        const body = ctx.request.body
        const errMessage = "router/account/sign_in..., sign_in body parameter excepted a string"
        conform(body, shape, errMessage)

        const data = await sign_in(ctx.request.body)
        ctx.body =
            data
                ? generateResBody(20000, "登录成功", data)
                : generateResBody(40003, "账号或密码错误")
    })

    // 修改接口
    router.patch('/account/userinfo/change', async ctx => {

        const token = ctx.request.body.accessToken

        if (!token) {
            ctx.response.body = generateResBody(40000, "请携带 token")
        } else {
            jwtToJson(ctx, token)
            const {
                errMessage,
                errorCode,
            } = ctx.request.body
    
            if (errMessage) {
                // token 不合法的处理
                errorTokenHandler(errorCode, errMessage, ctx)
            } else {
                const data = await userinfo_change(ctx.request.body)

                ctx.body =
                    data
                        ? generateResBody(20000, "修改成功", data)
                        : generateResBody(40000, "修改失败")
            }
        }
        
    })

    // 获取信息接口
    router.post('/account/userinfo', async (ctx) => {

        const token = ctx.request.body.accessToken

        if (!token) {
            ctx.response.body = generateResBody(40000, "请携带 token")
        } else {
            // 将解析后的 decoded 放入请求体中
            jwtToJson(ctx, token)
            const { errMessage, errorCode, decoded } = ctx.request.body

            if (errMessage) {
                // token 不合法的处理
                errorTokenHandler(errorCode, errMessage, ctx)
            } else {
                const data = await userinfo_get(decoded)
                
                ctx.response.status = 200
                ctx.body = 
                    data 
                        ? generateResBody(20000, "信息获取成功", data)
                        : generateResBody(40000, "信息获取失败，请校验token")
            }
        }

    })
}