exports.TableNames = {
  RSVP: "rsvp",
}

exports.rsvp = async builder => {
  const name = exports.TableNames.RSVP
  return builder.schema.createTableIfNotExists(name, table => {
    table.increments("id")
    table.string("email")
    table.primary(["email"])
    table.json("guests")
  })
}
