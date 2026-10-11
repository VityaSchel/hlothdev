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

const getMorphNames = ({ from, to }: OnNavigate) => {
	const name =
		from?.route.id === "/(index)"
			? cardNameOf(to)
			: to?.route.id === "/(index)"
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
