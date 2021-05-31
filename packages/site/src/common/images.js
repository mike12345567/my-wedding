import config from "./config"

export const Images = {
  US: config.getImageUrl("us"),
  HEART: config.getImageUrl("heart"),
  LOGO: config.getImageUrl("logo"),
  VENUE_LRG: config.getImageUrl("venueLarge"),
  VENUE_MED: config.getImageUrl("venueMedium"),
  CORNER: config.getImageUrl("corner"),
  SIDE: config.getImageUrl("side"),
  G_STAIRS: config.getImageUrl("gstairs"),
  G_LONG: config.getImageUrl("glong"),
  G_CLOSE: config.getImageUrl("gcloseup"),
}

export const Labels = {
  G_STAIRS: config.getImageLabel("gstairs"),
  G_LONG: config.getImageLabel("glong"),
  G_CLOSE: config.getImageLabel("gcloseup"),
}
