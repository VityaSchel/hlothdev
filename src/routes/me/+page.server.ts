import { cache } from "./cache.server";

const cacheLifetime = 5 * 60 * 1000;
const fetchTimeout = 3000;

async function fetchRepositoriesCount() {
	const response = await fetch(
		"https://git.hloth.dev/api/v1/users/hloth/repos?limit=1",
		{ signal: AbortSignal.timeout(fetchTimeout) },
	);
	return response.headers.get("X-Total-Count");
}

async function refreshRepositoriesCount() {
	const count = await fetchRepositoriesCount().catch((error) => {
		console.error(error);
		return null;
	});
	cache.gitRepositoriesCount = {
		value: count || "git",
		expiresAt: Date.now() + cacheLifetime,
	};
}

export async function load() {
	if (!cache.gitRepositoriesCount) {
		await refreshRepositoriesCount();
	} else if (Date.now() >= cache.gitRepositoriesCount.expiresAt) {
		cache.gitRepositoriesCount.expiresAt = Date.now() + cacheLifetime;
		void refreshRepositoriesCount();
	}
	return { gitRepositoriesCount: cache.gitRepositoriesCount?.value ?? "git" };
}
