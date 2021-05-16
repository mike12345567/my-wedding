exports.TableNames = {
  RSVP: "rsvp",
}

exports.rsvp = async builder => {
  const name = exports.TableNames.RSVP
  // table exists, no need to continue
  if (await builder.schema.hasTable(name)) {
    return
  }
  return builder.schema.createTable(name, table => {
    table.increments("id")
    table.string("email")
    table.json("guests")
    table.unique(["email"])
  })
}
