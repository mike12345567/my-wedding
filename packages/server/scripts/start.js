const compose = require("docker-compose")
const { join } = require("path")

compose
  .upAll({ cwd: join(__dirname), log: false })
  .then(() => {
    console.log("Postgres stack up and running.")
  })
  .catch(err => {
    console.error(`FAILED TO COMPOSE - ${err}`)
  })
