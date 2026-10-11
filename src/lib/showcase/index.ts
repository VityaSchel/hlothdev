export const websiteNames = {
	bes: "Business Estate Solutions CRM",
	"nock-trade": "Nock Trade Crypto Exchange",
	moreofme: "Moreof.me Social",
	"x5-websites": "X5.io Websites",
	"ryo-coin": "RYO Coin",
	unddit: "Unddit",
	"been-foss": "been-foss",
	"hloth-blog": "hloth blog",
	"batumi-bike": "Batumi.bike",
	"session-web": "Session Web",
	sipacker: "SIPacker",
	"oge-generator": "OGE generator",
} as const;

export const projectNames = {
	lufin: "Lufin E2EE File Sharing",
	"pow-reaction": "pow-reaction JS library",
	byom: "Build Your Own Messenger",
	"session-notifier": "Session Notifier Serverless Platform",
	jswitcher: "JSwitcher Figma plugin",
	"ons-registry": "ONS Registry e-commerce",
	bunsogs: "Bunsogs",
	"samsung-pinger": "Samsung Pinger",
	"session-native": "Session Native",
	"session-watchos": "Session watchOS",
	"ps4-merger": "PS4 Merger",
	"mtproto-mobile": "Mtproto Mobile",
} as const;

export const showcaseNames = { ...websiteNames, ...projectNames };

export type ProjectId = keyof typeof showcaseNames;

export const showcasePages = Object.keys(showcaseNames) as ProjectId[];

export const isShowcaseId = (id: string): id is ProjectId =>
	Object.hasOwn(showcaseNames, id);
