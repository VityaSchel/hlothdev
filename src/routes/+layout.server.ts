import { getAlertsDismissedProps } from "$lib/dismiss-alerts.server";

export const load = ({ cookies, request, setHeaders }) => {
	setHeaders({ vary: "Save-Data" });
	return {
		...getAlertsDismissedProps(cookies),
		saveData: request.headers.get("save-data") === "on",
	};
};
