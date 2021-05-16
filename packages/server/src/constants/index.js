const config = require("../../../site/config/mine.json")

exports.LOGGED_IN_COOKIE = "m_k_wedding"

exports.getMealTypes = () => {
  return config.meals.map(meal => meal.type)
}
