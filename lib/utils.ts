export function formatDateRange(start?: string, end?: string) {
  if (!start) return ""
  return end ? `${start} — ${end}` : start
}
