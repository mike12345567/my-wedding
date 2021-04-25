const Router = require("@koa/router")
const controller = require("../controllers/static")
const router = Router()

router.get("/", controller.serveApp)

module.exports = router