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
