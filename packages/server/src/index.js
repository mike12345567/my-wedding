'use strict'

const env = require("./environment")
const Koa = require("koa")
const app = new Koa()

app.use(ctx => {
  ctx.body = "Hello World"
})

module.exports = app.listen(env.PORT, async () => {
  console.log(`Wedding server running on ${env.PORT}`)
})
