import type { NavigationTarget, OnNavigate } from "$app/navigation";

let morphNames = $state.raw<string[]>([]);

export const morphName = (name: string) =>
	morphNames.includes(name) ? name : undefined;

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
	const names = getMorphNames(navigation);
	morphNames = names;
	return () => {
		if (morphNames === names) morphNames = [];
	};
};

const sourceHrefOf = ({ from, to }: OnNavigate) => {
	if (!from) return;
	if (to?.route.id === "/me") return from.url.pathname;
	if (to?.route.id !== "/(index)") return;
	return from.route.id?.startsWith("/me/") ? "/me" : from.url.pathname;
};

export const revealSource = (navigation: OnNavigate) => {
	const href = sourceHrefOf(navigation);
	if (!href) return;
	[...document.querySelectorAll("main a")]
		.find(
			(link) => link.getAttribute("href") === href && !link.closest("[inert]"),
		)
		?.scrollIntoView({
			block: "center",
			inline: "nearest",
			behavior: "instant",
		});
};
