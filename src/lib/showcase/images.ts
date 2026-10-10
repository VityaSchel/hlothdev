import type { ShowcaseImage } from "#lib/showcase/items.ts";
import type { Picture } from "@sveltejs/enhanced-img";

type Placeholder = ShowcaseImage["lqip"];

const thumbnails = import.meta.glob<Picture>(
	"../assets/showcase/*/banner.webp",
	{
		eager: true,
		import: "default",
		query: "?enhanced&w=230;460;690&quality=80",
	},
);

const pictures = import.meta.glob<Picture>(
	["../assets/showcase/*/*.webp", "!**/banner.webp", "!**/logo-square-xs.webp"],
	{ eager: true, import: "default", query: "?enhanced&quality=80" },
);

const placeholders = import.meta.glob<Placeholder>(
	["../assets/showcase/*/*.webp", "!**/logo-square-xs.webp"],
	{ eager: true, import: "default", query: "?lqip" },
);

const pick = <Module>(modules: Record<string, Module>, path: string) => {
	const key = `../assets/showcase/${path}.webp`;
	if (!(key in modules)) throw new Error(`Missing showcase image ${path}.webp`);
	return modules[key];
};

const toImage = (
	sources: Record<string, Picture>,
	path: string,
): ShowcaseImage => ({
	src: pick(sources, path),
	lqip: pick(placeholders, path),
});

export const showcaseImages = (directory: string) => ({
	banner: toImage(thumbnails, `${directory}/banner`),
	image: (name: string) => toImage(pictures, `${directory}/${name}`),
});
