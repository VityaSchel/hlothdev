export function isIos() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}
