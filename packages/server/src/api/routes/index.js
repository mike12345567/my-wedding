const Router = require("@koa/router")

const router = new Router()

let routes = [require("./static"), require("./password")]

for (let route of routes) {
  router.use(route.routes())
  router.use(route.allowedMethods())
}

module.exports = router
