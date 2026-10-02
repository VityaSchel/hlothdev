export const alertIds = [
	"javascript-disabled",
	"reduced-motion",
	"reduced-transparency",
] as const;

export type AlertId = (typeof alertIds)[number];
