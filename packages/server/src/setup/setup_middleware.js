const path = require("path")
const bodyParser = require('koa-bodyparser')

const routerPath = path.join(__dirname, '../router')
const router = require(routerPath)
const setupRouter = require('./setup_router')
function setupMiddleware(app) {

    // body 中间件
    app.use(bodyParser())

    setupRouter(app, router)

}

module.exports = setupMiddleware