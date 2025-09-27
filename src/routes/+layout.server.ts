import { getAlertsDismissedProps } from "$lib/dismiss-alerts.server.js";

export const load = async ({ cookies, depends, request }) => {
	request.integrity
	depends("app:alerts-dismissed");
	return {
		...getAlertsDismissedProps(cookies),
	};
};
