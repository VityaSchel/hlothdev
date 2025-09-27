import { showcasePages } from "$lib/showcase";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;

	if (!showcasePages.includes(id as (typeof showcasePages)[number])) {
		error(404);
	}

	return {
		id,
	};
};
