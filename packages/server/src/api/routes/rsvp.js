const Router = require("@koa/router")
const controller = require("../controllers/rsvp")
const Joi = require("joi")
const validateMiddleware = require("koa-joi-validate-middleware")
const admin = require("../../middleware/admin")
const { getMealTypes } = require("../../constants")

const router = Router()

function canAttendValidation() {
  return Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      choice: Joi.string().valid(...getMealTypes()),
      dietary: Joi.string().optional().allow("", null),
    }).unknown(false)
  )
}

function cantAttendValidation() {
  return Joi.object({
    name: Joi.string().required(),
    cantAttend: Joi.boolean().required()
  }).unknown(false)
}

function getRsvpSaveValidation() {
  // prettier-ignore
  return validateMiddleware.create({
    body: Joi.object({
      id: Joi.number().optional(),
      email: Joi.string().required(),
      phone: Joi.string().optional(),
      guests: Joi.alternatives().try(
        canAttendValidation(),
        cantAttendValidation(),
      ).required()
    }).unknown(false).required(),
  })
}

router
  .post("/api/rsvp", getRsvpSaveValidation(), controller.save)
  .get("/api/rsvp/all", admin, controller.allRsvp)
  .get("/api/rsvp/:email", controller.find)

module.exports = router
