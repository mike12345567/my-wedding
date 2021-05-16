const Router = require("@koa/router")
const controller = require("../controllers/rsvp")
const Joi = require("joi")
const validateMiddleware = require("koa-joi-validate-middleware")
const { getMealTypes } = require("../../constants")

const router = Router()

function getRsvpSaveValidation() {
  // prettier-ignore
  return validateMiddleware.create({
    body: Joi.object({
      email: Joi.string().required(),
      guests: Joi.array().items(
        Joi.object({
          name: Joi.string().required(),
          mealChoice: Joi.string().valid(...getMealTypes())
        }).unknown(false)
      ).required()
    }).unknown(false).required(),
  })
}

router.post(
  "/api/rsvp",
  getRsvpSaveValidation(),
  controller.save
)
  .get("/api/rsvp/:email", controller.find)

module.exports = router
