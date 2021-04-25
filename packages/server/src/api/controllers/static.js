const send = require("koa-send")
const { join } = require("path")

exports.serveApp = async ctx => {
  await send(ctx, "public/site/index.html")
}

exports.serveAssets = async ctx => {
  await send(ctx, join("public/site/assets", ctx.params.path))
}

exports.serveBuild = async ctx => {
  await send(ctx, join("public/site/build", ctx.params.path))
}
