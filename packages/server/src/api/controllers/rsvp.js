exports.save = async ctx => {
  const { email, guests } = ctx.request.body
  ctx.body = {
    message: "Rsvp saved"
  }
}

exports.find = async ctx => {
  const { email } = ctx.params
  ctx.body = {}
}
