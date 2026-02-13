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

export type ShowcaseItem = {
	type: "website" | "project";
	id: ProjectId;
	name: string;
	description: import("svelte").Snippet;
	/** Description for meta-tags under 160 characters */
	shortDescription: string;
	banner: {
		src: import("vite-imagetools").Picture;
		lqip: typeof import("*?lqip").default;
	};
	images: {
		alt: string;
		class?: string;
		src: import("vite-imagetools").Picture;
		lqip: typeof import("*?lqip").default;
	}[];
	links?: {
		url: string;
		label: string;
	}[];
};

export const websites: ShowcaseItem[] = [
	besWebsite,
	nockTradeWebsite,
	moreOfMeWebsite,
	x5Websites,
	ryoCoinWebsite,
	undditWebsite,
	beenFossWebsite,
	blogHlothDevWebsite,
	batumiBikeWebsite,
	sessionWebWebsite,
	sipackerWebsite,
	ogeGeneratorWebsite,
];

export const projects: ShowcaseItem[] = [
	lufinProject,
	powReactionProject,
	byomProject,
	sessionNotifierProject,
	jswitcherProject,
	onsRegistryProject,
	bunsogsProject,
	samsungPingerProject,
	sessionNativeProject,
	sessionWatchosProject,
	ps4mergerProject,
	mtprotoMobileProject,
];

export const showcase: ShowcaseItem[] = [...websites, ...projects];
