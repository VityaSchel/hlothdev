export type PictureWithLqip = {
	src: import("vite-imagetools").Picture;
	lqip: typeof import("*?lqip").default;
};

export async function getPicture(
	project: string,
	file: string,
): Promise<PictureWithLqip> {
	const [src, lqip] = await Promise.all([
		import(`$showcase/${project}/${file}.webp?enhanced`).then((m) => m.default),
		import(`$showcase/${project}/${file}.webp?lqip`).then((m) => m.default),
	]);
	return { src, lqip };
}
