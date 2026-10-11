import type { Picture } from "@sveltejs/enhanced-img";
import {
	projectNames,
	websiteNames,
	type ProjectId,
} from "#lib/showcase/index.ts";
import type { ShowcaseImage } from "#lib/showcase/items.ts";

const banners = import.meta.glob<Picture>("../assets/showcase/*/banner.webp", {
	eager: true,
	import: "default",
	query: "?enhanced&w=230;460;690&quality=80",
});

const placeholders = import.meta.glob<ShowcaseImage["lqip"]>(
	"../assets/showcase/*/banner.webp",
	{ eager: true, import: "default", query: "?lqip" },
);

const directories: Partial<Record<ProjectId, string>> = {
	bes: "business-estate-solutions",
};

export type ShowcaseCardData = {
	id: ProjectId;
	name: string;
	banner: ShowcaseImage;
};

const toCards = (names: Partial<Record<ProjectId, string>>) =>
	Object.entries(names).map(([key, name]): ShowcaseCardData => {
		const id = key as ProjectId;
		const path = `../assets/showcase/${directories[id] ?? id}/banner.webp`;
		if (!(path in banners)) throw new Error(`Missing showcase banner ${path}`);
		return {
			id,
			name,
			banner: { src: banners[path], lqip: placeholders[path] },
		};
	});

export const websites = toCards(websiteNames);
export const projects = toCards(projectNames);
