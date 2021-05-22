const compose = require("docker-compose")
const { join } = require("path")

compose
  .down({ cwd: join(__dirname), log: false })
  .then(() => {
    console.log("Postgres stack stopped.")
  })
  .catch(err => {
    console.error(`FAILED TO COMPOSE - ${err}`)
  })
