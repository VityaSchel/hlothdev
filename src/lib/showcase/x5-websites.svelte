<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const x5Websites: ShowcaseItem = {
		type: "website",
		id: "x5-websites",
		name: "X5.io Websites",
		description,
		shortDescription: "",
		banner: await getShowcasePicture("x5-websites", "banner"),
		images: [
			{
				...(await getShowcasePicture("x5-websites", "ketoplan-1")),
				alt: "Ketoplan website screenshot 1",
			},
			{
				...(await getShowcasePicture("x5-websites", "ketoplan-2")),
				alt: "Ketoplan website screenshot 2",
			},
			{
				...(await getShowcasePicture("x5-websites", "ketoplan-3")),
				alt: "Ketoplan website screenshot 3",
				class: "xl:hidden",
			},
			{
				...(await getShowcasePicture("x5-websites", "mental-health-1")),
				alt: "Mental health website screenshot 1",
			},
			{
				...(await getShowcasePicture("x5-websites", "mental-health-2")),
				alt: "Mental health website screenshot 2",
				class: "xl:hidden",
			},
			{
				...(await getShowcasePicture("x5-websites", "mental-health-3")),
				alt: "Mental health website screenshot 3",
				class: "px1180:hidden",
			},
			{
				...(await getShowcasePicture(
					"x5-websites",
					"bot-biz-admin-dashboard-1",
				)),
				alt: "Bot.biz admin dashboard screenshot TODO: alt",
			},
			{
				...(await getShowcasePicture(
					"x5-websites",
					"bot-biz-admin-dashboard-2",
				)),
				alt: "Bot.biz admin dashboard screenshot TODO: alt",
				class: "px1100:hidden",
			},
			{
				...(await getShowcasePicture("x5-websites", "lovebot")),
				alt: "Lovebot screenshot TODO: alt",
			},
			{
				...(await getShowcasePicture("x5-websites", "glassbot")),
				alt: "Glassbot screenshot TODO: alt",
			},
			{
				...(await getShowcasePicture("x5-websites", "prankbot")),
				alt: "Prankbot screenshot TODO: alt",
			},
			{
				...(await getShowcasePicture("x5-websites", "checkout-dialog")),
				alt: "Checkout dialog TODO: alt",
			},
			{
				...(await getShowcasePicture("x5-websites", "flat-ui-kit")),
				alt: "Flat UI kit demo TODO: alt",
			},
		],
		links: [
			{
				label: "Visit Ketoplan Diet website demo",
				url: "https://x5io-ketoplan.netlify.app/",
			},
			{
				label: "Visit Mental Health Quiz website demo",
				url: "https://x5io-mental-health.netlify.app/",
			},
			{
				label: "Visit Bot.biz Admin Dashboard demo",
				url: "https://x5io-admin-panel.netlify.app/",
			},
			{
				label: "Visit old Bot.biz Admin Dashboard demo",
				url: "https://main--x5io-admin-panel.netlify.app/",
			},
			{
				label: "Visit Lovebot website demo",
				url: "https://x5io-lovebot.netlify.app/",
			},
			{
				label: "Visit Glassbot website demo",
				url: "https://x5io-glassbot.netlify.app/",
			},
			{
				label: "Visit Prankbot website demo",
				url: "https://x5io-prankbot.netlify.app/",
			},
			{
				label: "Visit Checkout Dialog demo",
				url: "https://x5io-coupone.netlify.app/",
			},
			{
				label: "Open Flat UI kit source code",
				url: "https://vityaschel.github.io/checkout-dialog/",
			},
		],
	};
</script>

{#snippet link(label: string, url: string)}
	<a
		class="mt-2 block"
		href={url}
		draggable="false"
		target="_blank"
		rel="noopener noreferrer nofollow"
	>
		{label}
	</a>
{/snippet}
{#snippet description()}
	<p>
		TODO: description
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<h2>Ketoplan Diet Website</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{@render link(
		"Visit Ketoplan Diet website demo",
		"https://x5io-ketoplan.netlify.app/",
	)}
	{@render link(
		"Open Ketoplan Diet website source code",
		"https://git.hloth.dev/hloth/ketoplan-diet",
	)}
	<h2>Mental Health Quiz Website</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{@render link(
		"Visit Mental Health Quiz website demo",
		"https://x5io-mental-health.netlify.app/quiz/1",
	)}
	{@render link(
		"Open Mental Health Quiz website source code",
		"https://git.hloth.dev/hloth/mental-health-quiz/",
	)}
	<h2>Bot.biz Admin Dashboard Website</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{@render link(
		"Visit Bot.biz Admin Dashboard demo",
		"https://x5io-admin-panel.netlify.app/",
	)}
	{@render link(
		"Visit old Bot.biz Admin Dashboard demo",
		"https://main--x5io-admin-panel.netlify.app/",
	)}
	{@render link(
		"Open Bot.biz Admin Dashboard source code",
		"https://git.hloth.dev/hloth/bot-biz-admin-panel/",
	)}
	<h2>Lovebot Website</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{@render link(
		"Visit Lovebot website demo",
		"https://x5io-lovebot.netlify.app/",
	)}
	{@render link(
		"Open Lovebot website source code",
		"https://git.hloth.dev/hloth/lovebot",
	)}
	<h2>Glassbot Website</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{@render link(
		"Visit Glassbot website demo",
		"https://x5io-glassbot.netlify.app/",
	)}
	{@render link(
		"Open Glassbot website source code",
		"https://git.hloth.dev/hloth/glassbot",
	)}
	<h2>Prankbot</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{@render link(
		"Visit Prankbot website demo",
		"https://x5io-prankbot.netlify.app/",
	)}
	{@render link(
		"Open Prankbot website source code",
		"https://git.hloth.dev/hloth/prankbot",
	)}
	<h2>Checkout Dialog Component</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{@render link(
		"Visit Checkout Dialog demo",
		"https://vityaschel.github.io/checkout-dialog",
	)}
	{@render link(
		"Open Checkout Dialog source code",
		"https://git.hloth.dev/hloth/checkout-dialog",
	)}
	<h2>Flat UI Kit</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	{@render link(
		"Open Flat UI kit source code",
		"https://git.hloth.dev/hloth/x5io-flat-ui-kit",
	)}
{/snippet}
