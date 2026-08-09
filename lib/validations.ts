export function isEmail(v?: string) {
  if (!v) return false
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)
}
