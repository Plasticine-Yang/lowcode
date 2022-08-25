const jwt = require('jsonwebtoken')

// 密钥
const secret = 'lowcode'
const algorithm = 'HS256'
const expiresIn = '10h'

/**
 * @param {object} userinfo
 * userinfo 中包含 {
 *      username:
 *      hash:
 * }
 */
const generateToken = userinfo =>
  jwt.sign(userinfo, secret, { expiresIn, algorithm })

// 当需要 token 的时候调用该方法解析
const jwtToJson = (ctx, token) => {
  const body = ctx.request.body
  jwt.verify(token, secret, (err, decoded) => {
    if (err && err.name === 'TokenExpiredError') {
      const errMessage = 'token 过期'
      body.errorCode = 40001
      body.errMessage = errMessage
    } else if (err && err.name == 'JsonWebTokenError') {
      //无效的token
      const errMessage = 'token无效'
      body.errorCode = 40002
      body.errMessage = errMessage
    } else {
      // 向body中存入解析后的数据
      ctx.request.body = {
        ...ctx.request.body,
        decoded,
      }
    }
  })
}

module.exports = {
  generateToken,
  jwtToJson,
}
