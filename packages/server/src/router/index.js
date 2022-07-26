const Router = require('koa-router')
const path = require('path')

const router = new Router()
const setupAccount = require('./account')
const setupComponentJson = require('./component_json')

function setupRouter() {
  router.get('/', async ctx => {
    ctx.body = JSON.stringify({
      code: 20000,
      message: 'happy',
    })
  })

  setupAccount(router)
  setupComponentJson(router)
}

setupRouter()

module.exports = router
