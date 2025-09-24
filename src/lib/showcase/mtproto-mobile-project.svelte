<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";

	export const mtprotoMobileProject: ShowcaseItem = {
		type: "project",
		id: "mtproto-mobile",
		name: "Mtproto Mobile",
		description,
		shortDescription: "",
		banner: await import("$showcase/mtproto-mobile/banner.webp?enhanced").then(
			(m) => m.default,
		),
		images: [
			{
				src: await import(
					"$showcase/mtproto-mobile/screenshots.webp?enhanced"
				).then((m) => m.default),
				alt: "Mtproto Mobile screenshots TODO: alt",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/mtproto-mobile",
				label: "Open Mtproto Mobile source code",
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
