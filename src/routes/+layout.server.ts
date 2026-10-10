import { getAlertsDismissedProps } from "#lib/dismiss-alerts.server.ts";

export const load = ({ cookies, request, setHeaders }) => {
	setHeaders({ vary: "Save-Data" });
	return {
		...getAlertsDismissedProps(cookies),
		saveData: request.headers.get("save-data") === "on",
	};
};
