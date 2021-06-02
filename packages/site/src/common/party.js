import config from "./config"

export function getParty() {
  let groom = [], bride = [], misc = []
  const chief = config.getChiefBridesmaid(),
    bestman = config.getBestMan(),
    groomsmen = config.getGroomsmen(),
    bridesmaids = config.getBridesmaids(),
    ushers = config.getUshers(),
    fatherBride = config.getFatherOfBride(),
    motherBride = config.getMotherOfBride(),
    motherGroom = config.getMotherOfGroom(),
    fatherGroom = config.getFatherOfGroom(),
    stepFatherGroom = config.getStepFatherOfGroom(),
    stepMotherBride = config.getStepMotherOfBride()
  if (chief) {
    bride.push({ title: "Chief bridesmaid", name: chief })
  }
  if (bestman) {
    groom.push({ title: "Best man", name: bestman })
  }
  if (bridesmaids) {
    bride.push({ title: "Bridesmaids", name: bridesmaids })
  }
  if (groomsmen) {
    groom.push({ title: "Groomsmen", name: groomsmen })
  }
  if (fatherBride) {
    bride.push({ title: "Father of bride", name: fatherBride })
  }
  if (motherBride) {
    bride.push({ title: "Mother of bride", name: motherBride })
  }
  if (stepMotherBride) {
    bride.push({ title: "Step mother of bride", name: stepMotherBride })
  }
  if (motherGroom) {
    groom.push({ title: "Mother of groom", name: motherGroom })
  }
  if (stepFatherGroom) {
    groom.push({ title: "Step father of groom", name: stepFatherGroom })
  }
  if (fatherGroom) {
    groom.push({ title: "Father of groom", name: fatherGroom })
  }
  if (ushers) {
    misc.push({ title: "Ushers", name: ushers })
  }
  return { groom, bride, misc }
}

export function getCombinedParty(includeUshers = false) {
  const { groom, bride, misc } = getParty()
  let final = []
  for (let i = 0; i < Math.max(bride.length, groom.length); i++) {
    // we want to push nulls/undefined if one of them isn't equal the other length
    final.push(groom[i])
    final.push(bride[i])
  }
  if (misc && misc.length && includeUshers) {
    final = final.concat(misc)
  }
  return final
}

export function getUshers() {
  const ushers = config.getUshers()
  if (ushers) {
    return { title: "Ushers", name: ushers }
  } else {
    return null
  }
}
