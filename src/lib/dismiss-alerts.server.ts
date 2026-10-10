import type { Cookies } from "@sveltejs/kit";
import type { AlertId } from "#lib/alerts.ts";

export const alertDismissCookies = {
	"javascript-disabled": "hloth-dev_js-disabled-alert-dismissed",
	"reduced-motion": "hloth-dev_reduced-motion-alert-dismissed",
	"reduced-transparency": "hloth-dev_reduced-transparency-alert-dismissed",
} as const satisfies Record<AlertId, string>;

export function getAlertsDismissedProps(cookies: Cookies) {
	const isDismissed = (id: AlertId) =>
		cookies.get(alertDismissCookies[id]) === "true";
	return {
		alertsDismissed: {
			jsDisabled: isDismissed("javascript-disabled"),
			reducedMotion: isDismissed("reduced-motion"),
			reducedTransparency: isDismissed("reduced-transparency"),
		},
	};
}
