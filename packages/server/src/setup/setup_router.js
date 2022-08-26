module.exports = (app, router) => {
  // 路由中间件
  app.use(router.routes())
  app.use(
    router.allowedMethods({
      notImplemented: () => '不支持当前请求所需要的功能',
      methodNotAllowed: () => '不支持的请求方式',
    }),
  )
}
