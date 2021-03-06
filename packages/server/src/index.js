"use strict"

const env = require("./environment")
const Koa = require("koa")
const app = new Koa()

const Router = require("@koa/router")
const serve = require("koa-static")
const compress = require("koa-compress")
const body = require("koa-body")
const authMiddleware = require("./middleware/cookie")
const zlib = require("zlib")
const api = require("./api")
const { join } = require("path")

const mainRouter = new Router()

mainRouter
  .use(
    body({
      jsonLimit: "1mb",
      enableTypes: ["json"],
    })
  )
  .use(
    compress({
      threshold: 2048,
      gzip: {
        flush: zlib.constants.Z_SYNC_FLUSH,
      },
      deflate: {
        flush: zlib.constants.Z_SYNC_FLUSH,
      },
      br: false,
    })
  )
  .use(
    authMiddleware([
      {
        method: "POST",
        route: "/api/login",
      },
      {
        method: "GET",
        route: "/assets/",
      },
      {
        method: "GET",
        route: "/build/",
      },
      {
        method: "GET",
        route: "/",
      },
      {
        method: "GET",
        route: "/site/",
      },
    ])
  )
  .use(api.routes())

app.use(serve(join(__dirname, "..", "public")))
app.use(mainRouter.routes())

module.exports = app.listen(env.PORT, async () => {
  console.log(`Wedding server running on ${env.PORT}`)
})
