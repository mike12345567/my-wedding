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
  getFatherOfGroom: () => {
    return CONFIG.party.groomFather
  },
  getFatherOfBride: () => {
    return CONFIG.party.brideFather
  },
}
