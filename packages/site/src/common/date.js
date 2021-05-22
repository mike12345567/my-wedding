import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import relative from "dayjs/plugin/relativeTime"
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(duration)
dayjs.extend(relative)
dayjs.extend(advancedFormat)

export function getTimeUntil(date) {
  const millisecondDiff = dayjs(date).diff(Date.now())
  return dayjs.duration(millisecondDiff, "milliseconds").humanize()
}

export function formatDate(date, format) {
  return dayjs(date).format(format)
}
