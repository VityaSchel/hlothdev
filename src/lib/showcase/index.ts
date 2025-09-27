export const websitesPages = [
	"nock-trade",
	"moreofme",
	"hloth-blog",
	"been-foss",
	"unddit",
	"x5-websites",
	"mit-hloth-dev",
	"ryo-coin",
	"batumi-bike",
	"session-web",
	"sipacker",
	"oge-generator",
];

export const projectsPages = [
	"lufin",
	"samsung-pinger",
	"pow-reaction",
	"byom",
	"bunsogs",
	"session-notifier",
	"ons-registry",
	"session-native",
	"jswitcher",
	"session-watchos",
	"ps4-merger",
	"mtproto-mobile",
];

export const showcasePages = [...websitesPages, ...projectsPages] as const;

export type ProjectId = (typeof showcasePages)[number];
