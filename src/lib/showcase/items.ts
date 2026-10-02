import { besWebsite } from "./business-estate-solutions.svelte";
import { nockTradeWebsite } from "./nock-trade-website.svelte";
import { moreOfMeWebsite } from "./moreofme-website.svelte";
import { x5Websites } from "./x5-websites.svelte";
import { ryoCoinWebsite } from "./ryo-coin-website.svelte";
import { undditWebsite } from "./unddit-website.svelte";
import { beenFossWebsite } from "./been-foss-website.svelte";
import { blogHlothDevWebsite } from "./hloth-blog-website.svelte";
import { batumiBikeWebsite } from "./batumi-bike-website.svelte";
import { sessionWebWebsite } from "./session-web-website.svelte";
import { sipackerWebsite } from "./sipacker-website.svelte";
import { ogeGeneratorWebsite } from "./oge-generator-website.svelte";

import { lufinProject } from "./lufin-project.svelte";
import { samsungPingerProject } from "./samsung-pinger-project.svelte";
import { powReactionProject } from "./pow-reaction-project.svelte";
import { byomProject } from "./byom-project.svelte";
import { bunsogsProject } from "./bunsogs-project.svelte";
import { sessionNotifierProject } from "./session-notifier-project.svelte";
import { onsRegistryProject } from "./ons-registry-project.svelte";
import { sessionNativeProject } from "./session-native-project.svelte";
import { jswitcherProject } from "./jswitcher-project.svelte";
import { sessionWatchosProject } from "./session-watchos-project.svelte";
import { ps4mergerProject } from "./ps4merger-project.svelte";
import { mtprotoMobileProject } from "./mtproto-mobile-project.svelte";

import type { ProjectId } from "$lib/showcase";
import type { Picture } from "@sveltejs/enhanced-img";
import type { Snippet } from "svelte";

export type ShowcaseImage = {
	src: Picture;
	lqip: typeof import("*?lqip").default;
};

export type ShowcaseItem = {
	type: "website" | "project";
	id: ProjectId;
	name: string;
	description: Snippet;
	/** Description for meta-tags under 160 characters */
	shortDescription: string;
	banner: ShowcaseImage;
	images: (ShowcaseImage & { alt: string; class?: string })[];
	links?: () => { url: string; label: string }[];
};

export const showcase = {
	bes: besWebsite,
	"nock-trade": nockTradeWebsite,
	moreofme: moreOfMeWebsite,
	"x5-websites": x5Websites,
	"ryo-coin": ryoCoinWebsite,
	unddit: undditWebsite,
	"been-foss": beenFossWebsite,
	"hloth-blog": blogHlothDevWebsite,
	"batumi-bike": batumiBikeWebsite,
	"session-web": sessionWebWebsite,
	sipacker: sipackerWebsite,
	"oge-generator": ogeGeneratorWebsite,

	lufin: lufinProject,
	"pow-reaction": powReactionProject,
	byom: byomProject,
	"session-notifier": sessionNotifierProject,
	jswitcher: jswitcherProject,
	"ons-registry": onsRegistryProject,
	bunsogs: bunsogsProject,
	"samsung-pinger": samsungPingerProject,
	"session-native": sessionNativeProject,
	"session-watchos": sessionWatchosProject,
	"ps4-merger": ps4mergerProject,
	"mtproto-mobile": mtprotoMobileProject,
} satisfies Record<ProjectId, ShowcaseItem>;

const items: ShowcaseItem[] = Object.values(showcase);

export const websites = items.filter((item) => item.type === "website");
export const projects = items.filter((item) => item.type === "project");
