type SvgRenderResult = {
	width: number;
	height: number;
	url: string;
};

declare module "*.svg?render" {
	const svg: SvgRenderResult;
	export default svg;
}

declare module "*.svelte?render" {
	const svg: SvgRenderResult;
	export default svg;
}

declare module "*?lqip" {
	const placeholder: { lqip: string };
	export default placeholder;
}

declare module "*?enhanced&quality=80" {
	import type { Picture } from "@sveltejs/enhanced-img";

	const picture: Picture;
	export default picture;
}

declare module "*?enhanced&w=230;460;690&quality=80" {
	import type { Picture } from "@sveltejs/enhanced-img";

	const picture: Picture;
	export default picture;
}
