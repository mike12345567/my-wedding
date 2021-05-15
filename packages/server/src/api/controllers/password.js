const env = require("../../environment")
const { setCookie } = require("../../utils")
const { LOGGED_IN_COOKIE } = require("../../constants")
const { v4 } = require("uuid")

exports.checkPassword = async ctx => {
  const { password } = ctx.request.body
  const expected = env.PASSWORD
  if (password.trim() !== expected.trim()) {
    ctx.throw(403, "Forbidden")
  }
  const value = {
    loggedInAt: Date.now(),
    userId: v4(),
  }
  setCookie(ctx, value,  LOGGED_IN_COOKIE)
}
