// this brings in important external variables to server, e.g. password
// through the .env file provided with it
require("dotenv").config()

module.exports = {
  PORT: process.env.PORT || 5001,
  PASSWORD: process.env.PASSWORD,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  SECRET_KEY: process.env.SECRET_KEY,
  // postgres stuff
  POSTGRES_HOST: process.env.POSTGRES_HOST || "localhost",
  POSTGRES_PORT: process.env.POSGRES_PORT || 5432,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
}
