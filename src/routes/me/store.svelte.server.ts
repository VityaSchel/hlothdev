export const cache: {
	gitRepositoriesCount: {
		value: string;
		cachedAt: Date;
	} | null;
} = $state({
	gitRepositoriesCount: null,
});
