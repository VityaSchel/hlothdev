<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const sessionWatchosProject: ShowcaseItem = {
		type: "project",
		id: "session-watchos",
		name: "Session watchOS",
		description,
		shortDescription: "",
		banner: await getShowcasePicture("session-watchos", "banner"),
		images: [
			{
				...(await getShowcasePicture("session-watchos", "screenshot-1")),
				alt: "Session Watchos screenshot 1 TODO: alt",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-2")),
				alt: "Session Watchos screenshot 2 TODO: alt",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-3")),
				alt: "Session Watchos screenshot 3 TODO: alt",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-4")),
				alt: "Session Watchos screenshot 4 TODO: alt",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-5")),
				alt: "Session Watchos screenshot 5 TODO: alt",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-6")),
				alt: "Session Watchos screenshot 6 TODO: alt",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/session-watchos",
				label: "Open Session Watchos source code",
			},
			{
				url: "https://git.hloth.dev/hloth/session-watchos-website",
				label: "Open Session Watchos linking website source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<h2>Heading</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<h2>Heading</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
{/snippet}
