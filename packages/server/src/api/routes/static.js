const Router = require("@koa/router")
const controller = require("../controllers/static")
const router = Router()

router
  .get("/", controller.serveApp)
  // include the general path
  .get("/site/:path(.*)", controller.serveApp)
  .get("/assets/:path(.*)", controller.serveAssets)
  .get("/build/:path(.*)", controller.serveBuild)

module.exports = router
