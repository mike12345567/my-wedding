const Router = require("@koa/router")
const controller = require("../controllers/password")
const Joi = require("joi")
const validateMiddleware = require("koa-joi-validate-middleware")

const router = Router()

function getCheckPasswordValidation() {
  // prettier-ignore
  return validateMiddleware.create({
    body: Joi.object({
      password: Joi.string().required(),
    }).unknown(false).required(),
  })
}

router.post(
  "/api/password/check",
  getCheckPasswordValidation(),
  controller.checkPassword
)

module.exports = router
