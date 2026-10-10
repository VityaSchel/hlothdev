import { isShowcaseId } from "#lib/showcase/index.ts";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params: { id } }) => {
	if (!isShowcaseId(id)) error(404);

	return { id };
};
