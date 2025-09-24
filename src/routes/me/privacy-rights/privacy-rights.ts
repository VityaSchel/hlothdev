async function getIcon(iconName: string) {
	const icon = await import(
		`$showcase/${iconName}/logo-square-xs.webp?inline`
	).then((mod) => mod.default);
	return icon;
}

export const privacyRelatedProjects: {
	icon: string;
	link: string;
	name: string;
	caption: string;
}[] = [
	{
		icon: await getIcon("session-native"),
		link: "https://git.hloth.dev/hloth/session-native",
		name: "Session Native",
		caption: "Native Session macOS client written in Swift",
	},
	{
		icon: await getIcon("session.js"),
		link: "https://sessionjs.github.io/docs/",
		name: "Session.js",
		caption: "The first bot framework for Session built with Bun",
	},
	{
		icon: await getIcon("ons-registry"),
		link: "https://ons.session.community/",
		name: "ONS Registry",
		caption: "Blockchain data exploring tool & registry",
	},
	{
		icon: await getIcon("session-web"),
		link: "https://git.hloth.dev/hloth/session-web",
		name: "Session Web",
		caption: "Session client running in a web browser",
	},
	{
		icon: await getIcon("session-vanity-id-generator"),
		link: "https://session-id.pages.dev/",
		name: "Vanity ID Generator",
		caption: "Client-side tool generating vanity Session account IDs",
	},
	{
		icon: await getIcon("session-bots-directory"),
		link: "https://bots.session.community/",
		name: "Bots Directory",
		caption: "Directory of Session bots, built with Remix",
	},
];
