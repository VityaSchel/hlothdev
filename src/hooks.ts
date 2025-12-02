import { building } from "$app/environment";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// See https://github.com/sveltejs/kit/issues/13612
	if (!building) {
		const mime = response.headers.get("content-type");
		if (mime && ["text/html", "text/plain"].includes(mime)) {
			response.headers.set("content-type", mime + "; charset=utf-8");
		}
	}
	return response;
};
