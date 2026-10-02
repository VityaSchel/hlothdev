export const alertIds = [
	"javascript-disabled",
	"reduced-motion",
	"reduced-transparency",
] as const;

export type AlertId = (typeof alertIds)[number];

export const isAlertId = (value: unknown): value is AlertId =>
	alertIds.includes(value as AlertId);
