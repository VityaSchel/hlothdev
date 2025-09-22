import type { Actions } from "./$types";
import { z } from "zod";
import { redirect } from "@sveltejs/kit";

export const actions: Actions = {
	dismiss: async ({ request, cookies }) => {
		let originPathname: string | undefined;
		try {
			const setCookie = (name: string) => {
				cookies.set(name, "true", {
					path: "/",
					httpOnly: false,
					maxAge: 60 * 60 * 24 * 365,
				});
			};
			const formData = await request.formData();
			const id = z
				.enum(["javascript-disabled", "reduced-motion", "reduced-transparency"])
				.parse(formData.get("alert"));
			originPathname = z
				.string()
				.refine(
					(value) =>
						["/", "/me", "/me/about", "/me/privacy-rights", "/donate"].includes(
							value,
						) || /^\/portfolio\/[a-zA-Z0-9_-]+$/.test(value),
				)
				.safeParse(formData.get("redirect")).data;
			switch (id) {
				case "javascript-disabled":
					setCookie("hloth-dev_js-disabled-alert-dismissed");
					break;
				case "reduced-motion":
					setCookie("hloth-dev_reduced-motion-alert-dismissed");
					break;
				case "reduced-transparency":
					setCookie("hloth-dev_reduced-transparency-alert-dismissed");
					break;
			}
		} catch {
			/**/
		}
		return redirect(303, originPathname || "/");
	},
};
