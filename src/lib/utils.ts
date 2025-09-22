export function isIos() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export const transition = (clampStart: number, clampEnd: number, x: number) =>
	clampStart + (clampEnd - clampStart) * x;
