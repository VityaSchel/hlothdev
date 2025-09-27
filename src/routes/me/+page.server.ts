import { cache } from "./store.svelte.server";

export async function load() {
	if (
		cache.gitRepositoriesCount &&
		Date.now() - cache.gitRepositoriesCount.cachedAt.getTime() < 1000 * 60 * 5
	) {
		return {
			gitRepositoriesCount: cache.gitRepositoriesCount.value,
		};
	}
	let gitRepositoriesCount = "git";
	try {
		const res = await fetch(
			`https://git.hloth.dev/api/v1/users/hloth/repos?page=0&limit=1`,
		).then((req) => req.headers.get("X-Total-Count"));
		if (res) {
			gitRepositoriesCount = res;
		}
	} catch (e) {
		console.error(e);
	}
	cache.gitRepositoriesCount = {
		value: gitRepositoriesCount,
		cachedAt: new Date(),
	};
	return {
		gitRepositoriesCount,
	};
}
