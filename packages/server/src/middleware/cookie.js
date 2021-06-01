const { getCookie } = require("../utils")
const { LOGGED_IN_COOKIE } = require("../constants")

function doesMatch(pattern, url, method) {
  const route = pattern.route
  return method === pattern.method.toLowerCase() &&
    (
      (route.length === 1 && url === route) ||
      (route.length > 1 && url.startsWith(route))
    )
}

module.exports = (noAuthPatterns = []) => {
  if (!Array.isArray(noAuthPatterns)) {
    throw "Unable to generate cookie middleware, no auth patterns must be an array"
  }
  return async (ctx, next) => {
    const url = ctx.request.url.toLowerCase()
    const method = ctx.request.method.toLowerCase()
    const matched = noAuthPatterns.find(pattern => doesMatch(pattern, url, method))
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
