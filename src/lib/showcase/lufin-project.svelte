<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const lufinProject: ShowcaseItem = {
		type: "project",
		id: "lufin",
		name: "Lufin",
		description,
		shortDescription: "",
		banner: await getShowcasePicture("lufin", "banner"),
		images: [
			{
				...(await getShowcasePicture("lufin", "screenshot-1")),
				alt: "Lufin frontend screenshot 1 TODO: alt",
			},
			{
				...(await getShowcasePicture("lufin", "screenshot-2")),
				alt: "Lufin frontend screenshot 2 TODO: alt",
			},
			{
				...(await getShowcasePicture("lufin", "lufin-screenshotter")),
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
