const env = require("../../environment")
const { setCookie, getCookie } = require("../../utils")
const { LOGGED_IN_COOKIE } = require("../../constants")
const { v4 } = require("uuid")

const EXPECTED = env.PASSWORD.trim()
const EXPECTED_ADMIN = env.ADMIN_PASSWORD.trim()

exports.checkPassword = async ctx => {
  const password = ctx.request.body["password"].trim()

  let admin = false
  if (password === EXPECTED_ADMIN) {
    admin = true
  } else if (password !== EXPECTED) {
    ctx.throw(403, "Forbidden")
  }
  const value = {
    loggedInAt: Date.now(),
    userId: v4(),
    admin,
  }
  setCookie(ctx, value, LOGGED_IN_COOKIE)
  ctx.body = value
}

exports.getSelf = async ctx => {
  const value = getCookie(ctx, LOGGED_IN_COOKIE)
  if (!value) {
    ctx.throw(403, "Forbidden")
  }
  ctx.body = value
}
