import { response } from "super-sitemap/sveltekit";
import type { RequestHandler } from "@sveltejs/kit";
import { showcasePages } from "$lib/showcase";

export const GET: RequestHandler = ({ url }) =>
	response({
		origin: url.origin,
		paramValues: { "/showcase/[id]": [...showcasePages] },
	});
