import CONFIG from "../../config/mine.json"

export function getFullConfig() {
  return CONFIG
}

function getInfoProp(prop, full = true) {
  const property = CONFIG.info[prop]
  return full ? property.join("") : property
}

export default {
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
  getImageLabel: imgName => {
    if (CONFIG.imageLabels[imgName]) {
      return CONFIG.imageLabels[imgName]
    }
    return CONFIG.imageLabels.custom[imgName]
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
  getRSVP: (full = true) => {
    return getInfoProp("rsvp", full)
  },
  getArrival: () => {
    return CONFIG.timing.arrival
  },
  getCeremonyStart: () => {
    return CONFIG.timing.ceremonyStart
  },
  getCanapesStart: () => {
    return CONFIG.timing.canapes
  },
  getSpeechesStart: () => {
    return CONFIG.timing.speeches
  },
  getDinnerStart: () => {
    return CONFIG.timing.dinner
  },
  getHotelInfo: (full = true) => {
    return getInfoProp("hotel", full)
  },
  getGiftInfo: (full = true) => {
    return getInfoProp("gift", full)
  },
  getVenueInfo: (full = true) => {
    return getInfoProp("venue", full)
  },
  getVenueLink: () => {
    return CONFIG.info.venueLink
  },
  getDirections: () => {
    return getInfoProp("directions", true)
  },
  getParkingInfo: () => {
    return getInfoProp("parking", true)
  },
  getDayInfo: (full = true) => {
    return getInfoProp("theDay", full)
  },
  getGiftLink: () => {
    return CONFIG.info.giftLink
  },
  getBestMan: () => {
    return CONFIG.party.bestMan
  },
  getChiefBridesmaid: () => {
    return CONFIG.party.chiefMaid
  },
  getGroomsmen: () => {
    return CONFIG.party.groomsmen.join(", ")
  },
  getBridesmaids: () => {
    return CONFIG.party.bridesmaids.join(", ")
  },
  getUshers: () => {
    return CONFIG.party.ushers.join(", ")
  },
  getMotherOfGroom: () => {
    return CONFIG.party.groomMother
  },
  getMotherOfBride: () => {
    return CONFIG.party.brideMother
  },
  getStepMotherOfBride: () => {
    return CONFIG.party.brideStepMother
  },
  getStepMotherOfGroom: () => {
    return CONFIG.party.groomStepMother
  },
  getFatherOfGroom: () => {
    return CONFIG.party.groomFather
  },
  getStepFatherOfGroom: () => {
    return CONFIG.party.groomStepFather
  },
  getStepFatherOfBride: () => {
    return CONFIG.party.brideStepFather
  },
  getFatherOfBride: () => {
    return CONFIG.party.brideFather
  },
}
