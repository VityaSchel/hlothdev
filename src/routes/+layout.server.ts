import { getAlertsDismissedProps } from "$lib/dismiss-alerts.server";

export const load = ({ cookies }) => getAlertsDismissedProps(cookies);
