import { getAlertsDismissedProps } from "#lib/dismiss-alerts.server.ts";

export const load = ({ cookies, request }) => ({
	...getAlertsDismissedProps(cookies),
	saveData: request.headers.get("save-data") === "on",
});
