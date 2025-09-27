import * as sitemap from "super-sitemap";
import type { RequestHandler } from "@sveltejs/kit";
import { showcasePages } from "$lib/showcase";

export const GET: RequestHandler = async ({ url }) => {
	return await sitemap.response({
		origin: url.origin,
		paramValues: {
			"/showcase/[id]": showcasePages.map((id) => [id]),
		},
	});
};
