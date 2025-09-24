<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";

	export const sessionWatchosProject: ShowcaseItem = {
		type: "project",
		id: "session-watchos",
		name: "Session watchOS",
		description,
		shortDescription: "",
		banner: await import("$showcase/session-watchos/banner.webp?enhanced").then(
			(m) => m.default,
		),
		images: [
			{
				src: await import(
					"$showcase/session-watchos/screenshot-1.webp?enhanced"
				).then((m) => m.default),
				alt: "Session Watchos screenshot 1 TODO: alt",
			},
			{
				src: await import(
					"$showcase/session-watchos/screenshot-2.webp?enhanced"
				).then((m) => m.default),
				alt: "Session Watchos screenshot 2 TODO: alt",
			},
			{
				src: await import(
					"$showcase/session-watchos/screenshot-3.webp?enhanced"
				).then((m) => m.default),
				alt: "Session Watchos screenshot 3 TODO: alt",
			},
			{
				src: await import(
					"$showcase/session-watchos/screenshot-4.webp?enhanced"
				).then((m) => m.default),
				alt: "Session Watchos screenshot 4 TODO: alt",
			},
			{
				src: await import(
					"$showcase/session-watchos/screenshot-5.webp?enhanced"
				).then((m) => m.default),
				alt: "Session Watchos screenshot 5 TODO: alt",
			},
			{
				src: await import(
					"$showcase/session-watchos/screenshot-6.webp?enhanced"
				).then((m) => m.default),
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
