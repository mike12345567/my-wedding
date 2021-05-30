import CONFIG from "../../config/mine.json"

export function getFullConfig() {
  return CONFIG
}

export const config = {
  getHisName: () => {
    return CONFIG.hisName
  },
  getHerName: () => {
    return CONFIG.herName
  },
  getImages: () => {
    return CONFIG.images
  },
  getImageUrl: imgName => {
    let path = CONFIG.images[imgName]
    if (!path && CONFIG.images.custom) {
      path = CONFIG.images.custom[imgName]
    }
    return `/${CONFIG.images.directory}/${path}`
  },
  getPrimaryFont: () => {
    return CONFIG.fonts.primary
  },
  getSecondaryFont: () => {
    return CONFIG.fonts.secondary
  },
  getAddress: () => {
    return CONFIG.address
  },
  getDate: () => {
    return CONFIG.date
  },
  getColors: () => {
    return CONFIG.colors
  },
  getMeals: () => {
    return CONFIG.meals
  },
  getRSVP: () => {
    return CONFIG.info.rsvp
  },
}
