import { portfolio } from "$lib/portfolio";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;

	if (!portfolio.find((p) => p.id === id)) {
		error(404);
	}

	return {
		id,
	};
};
