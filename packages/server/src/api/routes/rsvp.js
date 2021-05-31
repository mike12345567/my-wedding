const Router = require("@koa/router")
const controller = require("../controllers/rsvp")
const Joi = require("joi")
const validateMiddleware = require("koa-joi-validate-middleware")
const admin = require("../../middleware/admin")
const { getMealTypes } = require("../../constants")

const router = Router()

function getRsvpSaveValidation() {
  // prettier-ignore
  return validateMiddleware.create({
    body: Joi.object({
      id: Joi.number().optional(),
      email: Joi.string().required(),
      guests: Joi.array().items(
        Joi.object({
          name: Joi.string().required(),
          choice: Joi.string().valid(...getMealTypes()),
          dietary: Joi.string().optional(),
        }).unknown(false)
      ).required()
    }).unknown(false).required(),
  })
}

router
  .post("/api/rsvp", getRsvpSaveValidation(), controller.save)
  .get("/api/rsvp/all", admin, controller.allRsvp)
  .get("/api/rsvp/:email", controller.find)

module.exports = router
