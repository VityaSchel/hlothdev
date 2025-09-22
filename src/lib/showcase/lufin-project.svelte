<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";

	export const lufinProject: ShowcaseItem = {
		type: "project",
		id: "lufin",
		name: "Lufin",
		description,
		shortDescription: "",
		banner: "/showcase/lufin/banner.webp",
		images: [
			{
				url: "/showcase/lufin/screenshot-1.webp",
				alt: "Lufin frontend screenshot 1 TODO: alt",
			},
			{
				url: "/showcase/lufin/screenshot-2.webp",
				alt: "Lufin frontend screenshot 2 TODO: alt",
			},
			{
				url: "/showcase/lufin/lufin-screenshotter.webp",
				alt: "Lufin screenshotter",
			},
		],
		links: [
			{
				url: "https://lufin.hloth.dev",
				label: "Visit Lufin demo website",
			},
			{
				url: "https://git.hloth.dev/hloth/lufin",
				label: "Open lufin source code",
			},
			{
				url: "https://git.hloth.dev/hloth/lufin-screenshotter",
				label: "Open lufin screenshotter source code",
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
