<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";

	export const jswitcherProject: ShowcaseItem = {
		type: "project",
		id: "jswitcher",
		name: "JSwitcher",
		description,
		shortDescription: "",
		banner: await import("$showcase/jswitcher/banner.webp?enhanced").then(
			(m) => m.default,
		),
		images: [
			{
				src: await import(
					"$showcase/jswitcher/screenshot-1.webp?enhanced"
				).then((m) => m.default),
				alt: "JSwitcher screenshot 1 TODO: alt",
			},
			{
				src: await import(
					"$showcase/jswitcher/screenshot-2.webp?enhanced"
				).then((m) => m.default),
				alt: "JSwitcher screenshot 2 TODO: alt",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/jswitcher",
				label: "Open jswitcher source code",
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
