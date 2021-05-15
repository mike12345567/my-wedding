const jwt = require("jsonwebtoken")
const env = require("../environment")

exports.setCookie = (ctx, value, name) => {
  const expires = new Date()
  // 30 days
  expires.setDate(expires.getDate() + 30)
  if (!value) {
    ctx.cookies.set(name)
  } else {
    value = jwt.sign(value, env.SECRET_KEY, {
      expiresIn: "1 day",
    })
    ctx.cookies.set(name, value, {
      expires,
      path: "/",
      httpOnly: false,
      overwrite: true,
    })
  }
}

exports.getCookie = (ctx, name) => {
  const cookie = ctx.cookies.get(name)
  if (!cookie) {
    return cookie
  }
  return jwt.verify(cookie, env.SECRET_KEY)
}
