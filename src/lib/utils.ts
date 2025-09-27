import { page } from "$app/state";

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

export const getMainDomain = () => (isOnion() ? torDomain : clearnetDomain);

export const getMainDomainProtocol = () => (isOnion() ? "http" : "https");
