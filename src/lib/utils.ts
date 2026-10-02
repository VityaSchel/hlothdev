import { page } from "$app/state";
import { getSvgPath } from "figma-squircle";

export const transition = (clampStart: number, clampEnd: number, x: number) =>
	clampStart + (clampEnd - clampStart) * x;

export const clearnetDomain = "hloth.dev";
export const torDomain =
	"hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion";

export const isOnion = () => {
	try {
		return page.url.host.endsWith(".onion");
	} catch {
		// TODO: fix when Svelte ships async ssr
		// see https://github.com/sveltejs/svelte/discussions/16784
		return false;
	}
};

const getOrigin = (hostPrefix = "") =>
	isOnion()
		? `http://${hostPrefix}${torDomain}`
		: `https://${hostPrefix}${clearnetDomain}`;

export const siteUrl = (path = "") => getOrigin() + path;

export const subdomainUrl = (subdomain: string, path = "") =>
	getOrigin(`${subdomain}.`) + path;

export function browserSupportsSVG() {
	return (
		!!document.createElementNS &&
		!!document.createElementNS("http://www.w3.org/2000/svg", "svg")
			.createSVGRect
	);
}

export function getSquirclePath({
	width,
	height,
	cornerRadius,
	cornerSmoothing,
}: {
	width: number;
	height: number;
	cornerRadius: number;
	cornerSmoothing: number;
}) {
	if (!browserSupportsSVG()) return null;
	return getSvgPath({
		width,
		height,
		cornerRadius,
		cornerSmoothing,
	});
}
