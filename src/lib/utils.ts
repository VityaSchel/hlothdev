export function isIos() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}

export const transition = (clampStart: number, clampEnd: number, x: number) =>
  clampStart + (clampEnd - clampStart) * Math.max(0, Math.min(x, 1))
