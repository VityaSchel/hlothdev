import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";
import { isAlertId } from "$lib/alerts";
import { alertDismissCookies } from "$lib/dismiss-alerts.server";

const redirectablePathnames = [
	"/",
	"/me",
	"/me/about",
	"/me/privacy-rights",
	"/donate",
];

const isRedirectablePathname = (value: unknown): value is string =>
	typeof value === "string" &&
	(redirectablePathnames.includes(value) ||
		/^\/showcase\/[a-zA-Z0-9_-]+$/.test(value));

export const actions: Actions = {
	dismiss: async ({ request, cookies }) => {
		const formData = await request.formData().catch(() => new FormData());
		const id = formData.get("alert");
		const pathname = formData.get("redirect");
		if (!isAlertId(id)) redirect(303, "/");
		cookies.set(alertDismissCookies[id], "true", {
			path: "/",
			httpOnly: false,
			maxAge: 60 * 60 * 24 * 365,
		});
		redirect(303, isRedirectablePathname(pathname) ? pathname : "/");
	},
};
