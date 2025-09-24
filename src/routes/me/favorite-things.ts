async function getImage(name: string) {
	const [src, lqip] = await Promise.all([
		import(
			`$lib/assets/favorite-things/${name}.webp?enhanced&quality=100`
		).then((m) => m.default),
		import(`$lib/assets/favorite-things/${name}.webp?lqip`).then(
			(m) => m.default,
		),
	]);
	return { src, lqip };
}

export const images: {
	img: {
		src: import("vite-imagetools").Picture;
		lqip: typeof import("*?lqip").default;
	};
	alt: string;
	href?: string;
}[] = [
	{
		img: await getImage("favorite-things"),
		alt: "Scroll to see my favorite things ➜",
	},
	{
		img: await getImage("games"),
		alt: "I love puzzle platformers, survival horrors and adventure sandboxes",
	},
	{
		img: await getImage("cinema"),
		alt: "I love criminals, dramas and detectives",
	},
	{ img: await getImage("music"), alt: "Pop is always in my playlist" },
	{
		img: await getImage("dish"),
		alt: "The best Tom Yum I tasted was in my  home city local bar",
	},
	{
		img: await getImage("influencer"),
		alt: "I admire Jerma985 unique personality and love watching his livestreams",
	},
	{
		img: await getImage("book"),
		alt: "Steve Krug — Don’t make me think is a must-read for all web designers",
	},
	{ img: await getImage("series"), alt: "Severance is my favorite TV series" },
	{ img: await getImage("quote"), alt: "My favorite quote is one of my own" },
	{
		img: await getImage("love"),
		alt: "But my most favorite thing in life is love",
		href: "https://www.instagram.com/devio.10/",
	},
];
