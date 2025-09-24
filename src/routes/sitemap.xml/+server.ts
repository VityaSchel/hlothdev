import * as sitemap from "super-sitemap";
import type { RequestHandler } from "@sveltejs/kit";
import { showcase } from "$lib/showcase";

export const GET: RequestHandler = async () => {
	return await sitemap.response({
		origin: "https://hloth.dev",
		paramValues: {
			'/showcase/[id]': showcase.map((item) => item.id),
		},
	});
};
