const jwt = require("jsonwebtoken")
const env = require("../environment")

const DAYS_EXPIRY = 30

exports.setCookie = (ctx, value, name) => {
  const expires = new Date()
  // 30 days
  expires.setDate(expires.getDate() + DAYS_EXPIRY)
  if (!value) {
    ctx.cookies.set(name)
  } else {
    value = jwt.sign(value, env.SECRET_KEY, {
      expiresIn: `${DAYS_EXPIRY} days`,
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
  try {
    return jwt.verify(cookie, env.SECRET_KEY)
  } catch (err) {
    // delete the cookie
    ctx.cookies.set(name)
  }
}
