const path = require('path')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const koaBody = require('koa-body')

const routerPath = path.join(__dirname, '../router')
const router = require(routerPath)
const setupRouter = require('./setup_router')
function setupMiddleware(app) {
  app.use(
    koaBody({
      multipart: true,
      formLimit: '10mb',
      jsonLimit: '10mb',
    }),
  )

  // body 中间件
  app.use(
    bodyParser({
      formLimit: '10mb',
      jsonLimit: '10mb',
    }),
  )

  app.use(
    cors({
      origin: 'http://localhost:5173',
    }),
  )

  setupRouter(app, router)
}

module.exports = setupMiddleware
