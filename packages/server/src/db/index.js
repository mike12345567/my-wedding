const env = require("../environment")
const { TableNames, rsvp } = require("./tables")

let CLIENT

async function init() {
  CLIENT = require("knex")({
    client: "pg",
    connection: {
      host: env.POSTGRES_HOST,
      port: env.POSTGRES_PORT,
      user: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      database: env.POSTGRES_DB,
    },
  })
  await rsvp(CLIENT)
}
// always init immediately
init().catch(err => {
  console.error(`PG error - ${err}`)
  process.exit(-1)
})

exports.saveRsvp = async (email, guests, id = undefined) => {
  if (typeof guests !== "object") {
    throw "Guests must be of type Object"
  }
  if (!id) {
    await CLIENT(TableNames.RSVP).insert({
      email,
      guests: JSON.stringify(guests),
    })
  } else {
    await CLIENT(TableNames.RSVP).where({ id }).update({
      email,
      guests: JSON.stringify(guests),
    })
  }
}

exports.findRsvp = async email => {
  const rows = await CLIENT(TableNames.RSVP).where({
    email,
  })
  if (rows && rows.length === 1) {
    return rows[0]
  }
  return rows
}

exports.allRsvp = async () => {
  return CLIENT(TableNames.RSVP).select("*")
}
