import type { NavigationTarget, OnNavigate } from "$app/navigation";

let morphNames = $state.raw<string[]>([]);
let pageName = $state.raw<string>();

export const morphName = (name: string) =>
	morphNames.includes(name) ? name : undefined;

export const windowName = (viewId?: string) =>
	(viewId && morphName(viewId)) || pageName;

const cardNameOf = (target: NavigationTarget | null) => {
	const routeId = target?.route.id;
	if (routeId === "/showcase/[id]") return `showcase-${target?.params?.id}`;
	if (routeId === "/donate") return "donate";
	if (routeId === "/me" || routeId?.startsWith("/me/")) return "me";
};

const subpageNames: Record<string, string[]> = {
	"/me/about": ["about-me", "about-me-content"],
	"/me/privacy-rights": [
		"privacy-rights",
		"privacy-rights-content",
		"privacy-rights-content-ignore",
	],
};

const getMorphNames = ({ from, to }: OnNavigate) => {
	const fromRoute = from?.route.id;
	const toRoute = to?.route.id;
	const subpage =
		fromRoute === "/me" ? toRoute : toRoute === "/me" ? fromRoute : undefined;
	const subpageMorph = subpage && subpageNames[subpage];
	if (subpageMorph) return ["me", ...subpageMorph];
	const name =
		fromRoute === "/(index)"
			? cardNameOf(to)
			: toRoute === "/(index)"
				? cardNameOf(from)
				: undefined;
	return name ? [name] : [];
};

export const startMorph = (navigation: OnNavigate) => {
	const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
	const names = reducedMotion ? [] : getMorphNames(navigation);
	const crossfade = !reducedMotion && !names.length;
	morphNames = names;
	pageName = crossfade ? "page" : "page-out";
	return {
		enter: () => {
			if (morphNames === names) pageName = crossfade ? "page" : "page-in";
		},
		end: () => {
			if (morphNames !== names) return;
			morphNames = [];
			pageName = undefined;
		},
	};
};

const sourceHrefOf = ({ from, to }: OnNavigate) => {
	if (!from) return;
	const fromSubpage = from.route.id?.startsWith("/me/");
	if (to?.route.id === "/me")
		return fromSubpage ? from.url.pathname : undefined;
	if (to?.route.id !== "/(index)") return;
	if (fromSubpage) return "/me";
	return from.route.id === "/showcase/[id]"
		? `/showcase/${from.params?.id}`
		: from.url.pathname;
};

const isRevealed = (element: Element) => {
	const rect = element.getBoundingClientRect();
	const outside = (
		bounds: Pick<DOMRect, "top" | "left" | "bottom" | "right">,
	) =>
		rect.top < bounds.top ||
		rect.left < bounds.left ||
		rect.bottom > bounds.bottom ||
		rect.right > bounds.right;
	if (outside({ top: 0, left: 0, bottom: innerHeight, right: innerWidth }))
		return false;
	for (
		let parent = element.parentElement;
		parent;
		parent = parent.parentElement
	) {
		const { overflowX, overflowY } = getComputedStyle(parent);
		if (overflowX === "visible" && overflowY === "visible") continue;
		if (outside(parent.getBoundingClientRect())) return false;
	}
	return true;
};

export const revealSource = (navigation: OnNavigate) => {
	const href = sourceHrefOf(navigation);
	if (!href) return;
	const link = [...document.querySelectorAll("main a")].find(
		(link) => link.getAttribute("href") === href && !link.closest("[inert]"),
	);
	if (!link || isRevealed(link)) return;
	link.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "instant",
	});
};
