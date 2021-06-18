const db = require("../../db")

exports.save = async ctx => {
  const { email, phone, guests, id } = ctx.request.body
  await db.saveRsvp(email, phone, guests, id)
  ctx.body = {
    message: "Rsvp saved",
  }
}

exports.find = async ctx => {
  const { email } = ctx.params
  ctx.body = await db.findRsvp(email)
}

exports.allRsvp = async ctx => {
  ctx.body = await db.allRsvp()
}
