module.exports = async (ctx, next) => {
  if (!ctx.user || !ctx.user.admin) {
    ctx.throw(403, "Forbidden")
  }
  return next()
}
