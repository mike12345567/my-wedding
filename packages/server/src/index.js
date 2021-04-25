'use strict'

const env = require("./environment")
const Koa = require("koa")
const app = new Koa()
const serve = require("koa-static")
const { join } = require("path")

app.use(serve(join(__dirname, "..", "public")))

module.exports = app.listen(env.PORT, async () => {
  console.log(`Wedding server running on ${env.PORT}`)
})
