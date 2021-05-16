const env = require("../environment")
const { TableNames, rsvp } = require("./tables")

let client

async function init() {
  client = require("knex")({
    client: "pg",
    connection: {
      host: env.POSTGRES_URL,
      user: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      database: env.POSTGRES_DB,
    },
  })
  await rsvp(client)
}
// always init immediately
init().catch(err => {
  console.error(`PG error - ${err}`)
  process.exit(-1)
})

exports.saveRsvp = async (email, guests) => {
  if (typeof guests !== "object") {
    throw "Guests must be of type Object"
  }
  await client(TableNames.RSVP).insert({
    email,
    guests,
  })
}

exports.findRsvp = async email => {
  const rows = await client(TableNames.RSVP).where({
    email,
  })
  if (rows && rows.length === 1) {
    return rows[0]
  }
  return rows
}

exports.allRsvp = async () => {
  return client(TableNames.RSVP).select("*")
}
