// this brings in important external variables to server, e.g. password
// through the .env file provided with it
require("dotenv").config()

module.exports = {
  PORT: process.env.PORT || 5001,
  PASSWORD: process.env.PASSWORD,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_URL: process.env.POSTGRES_URL || "localhost:5432",
}