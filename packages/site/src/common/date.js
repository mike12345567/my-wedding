import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import relative from "dayjs/plugin/relativeTime"

dayjs.extend(duration)
dayjs.extend(relative)

export function getTimeUntil(date) {
  const millisecondDiff = dayjs(date).diff(Date.now())
  return dayjs.duration(millisecondDiff, "milliseconds").humanize()
}

export function formatDate(date, format) {
  return dayjs(date).format(format)
}
