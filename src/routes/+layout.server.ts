import { getAlertsDismissedProps } from "$lib/dismiss-alerts.server.js";

export const load = async ({ cookies, depends }) => {
	depends("app:alerts-dismissed");
	return {
		...getAlertsDismissedProps(cookies),
	};
};
