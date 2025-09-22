import { showcase } from "$lib/showcase";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;

	if (!showcase.find((p) => p.id === id)) {
		error(404);
	}

	return {
		id,
	};
};
