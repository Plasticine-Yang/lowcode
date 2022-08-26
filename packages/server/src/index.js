const Koa = require('koa')

const router = require(__dirname + '/router')
const setup = require(__dirname + '/setup')
const { PORT } = require('./constants')

function init() {
  const app = new Koa()

  setup(app)

  app.listen(PORT, () => {
    console.log('应用已经启动，正在监听' + PORT + '端口')
  })
}

init()
