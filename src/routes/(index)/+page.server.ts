import type { Actions } from "./$types";
import { z } from "zod";
import { redirect } from "@sveltejs/kit";
import { alertIds } from "$lib/alerts";
import { alertDismissCookies } from "$lib/dismiss-alerts.server";

export const actions: Actions = {
	dismiss: async ({ request, cookies }) => {
		let originPathname: string | undefined;
		try {
			const formData = await request.formData();
			const id = z.enum(alertIds).parse(formData.get("alert"));
			originPathname = z
				.string()
				.refine(
					(value) =>
						["/", "/me", "/me/about", "/me/privacy-rights", "/donate"].includes(
							value,
						) || /^\/showcase\/[a-zA-Z0-9_-]+$/.test(value),
				)
				.safeParse(formData.get("redirect")).data;
			cookies.set(alertDismissCookies[id], "true", {
				path: "/",
				httpOnly: false,
				maxAge: 60 * 60 * 24 * 365,
			});
		} catch {
			/**/
		}
		return redirect(303, originPathname || "/");
	},
};
