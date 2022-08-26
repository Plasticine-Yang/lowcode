const { jwtToJson } = require('../utils/jwt')
const generateResBody = require('../utils/generate_res_body')
const { component_json_save } = require('../database')

module.exports = router => {
  router.patch('/component_json/save', async ctx => {
    let body = ctx.request.body
    const token = body.accessToken
    if (!token) {
      ctx.response.status = 400
      ctx.response.body = generateResBody(40000, '请携带 token')
    } else {
      jwtToJson(ctx, token)
      body = ctx.request.body
      const data = await component_json_save(body)
      ctx.response.body = data
        ? generateResBody(20000, '更新配置成功', data)
        : generateResBody(40000, '更新配置失败')
    }
  })
}
