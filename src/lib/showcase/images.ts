import type { ShowcaseImage } from "#lib/showcase/items.ts";
import type { Picture } from "@sveltejs/enhanced-img";

type Placeholder = ShowcaseImage["lqip"];

const pictures = import.meta.glob<Picture>(
	["../assets/showcase/*/*.webp", "!**/banner.webp", "!**/logo-square-xs.webp"],
	{
		eager: true,
		import: "default",
		query: "?enhanced&w=640;960;1280;1920;2560&quality=80",
	},
);

const placeholders = import.meta.glob<Placeholder>(
	["../assets/showcase/*/*.webp", "!**/banner.webp", "!**/logo-square-xs.webp"],
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
	image: (name: string) => toImage(pictures, `${directory}/${name}`),
});
