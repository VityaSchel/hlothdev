import type { Handle } from "@sveltejs/kit/hooks";

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.append("vary", "Save-Data");
	return response;
};
