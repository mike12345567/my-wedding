const { getCookie } = require("../utils")
const { LOGGED_IN_COOKIE } = require("../constants")

module.exports = (noAuthPatterns = []) => {
  if (!Array.isArray(noAuthPatterns)) {
    throw "Unable to generate cookie middleware, no auth patterns must be an array"
  }
  return async (ctx, next) => {
    const url = ctx.request.url.toLowerCase()
    const method = ctx.request.method.toLowerCase()
    const matched = noAuthPatterns.find(
      pattern =>
        method === pattern.method.toLowerCase() && url.includes(pattern.route)
    )
    if (matched) {
      return next()
    }
    const value = getCookie(ctx, LOGGED_IN_COOKIE)
    if (value && value.loggedInAt && value.userId) {
      ctx.user = value
      return next()
    } else {
      ctx.throw(403, "Forbidden")
    }
  }
}
