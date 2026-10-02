import { cache } from "./cache.server";

const cacheLifetime = 5 * 60 * 1000;

async function fetchRepositoriesCount() {
	const response = await fetch(
		"https://git.hloth.dev/api/v1/users/hloth/repos?limit=1",
	);
	return response.headers.get("X-Total-Count");
}

export async function load() {
	if (
		!cache.gitRepositoriesCount ||
		Date.now() >= cache.gitRepositoriesCount.expiresAt
	) {
		const count = await fetchRepositoriesCount().catch((error) => {
			console.error(error);
			return null;
		});
		cache.gitRepositoriesCount = {
			value: count || "git",
			expiresAt: Date.now() + cacheLifetime,
		};
	}
	return { gitRepositoriesCount: cache.gitRepositoriesCount.value };
}
