<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const ryoCoinWebsite: ShowcaseItem = {
		type: "website",
		id: "ryo-coin",
		name: "RYO Coin",
		description,
		shortDescription: "",
		banner: await getShowcasePicture("ryo-coin", "banner"),
		images: [
			{
				...(await getShowcasePicture("ryo-coin", "v1-screenshot-1")),
				alt: "RYO coin website v1 screenshot 1 TODO: alt",
			},
			{
				...(await getShowcasePicture("ryo-coin", "v1-screenshot-2")),
				alt: "RYO coin website v1 screenshot 2 TODO: alt",
			},
			{
				...(await getShowcasePicture("ryo-coin", "v2-screenshot")),
				alt: "RYO coin website v2 screenshot TODO: alt",
			},
			{
				...(await getShowcasePicture("ryo-coin", "v3-screenshot")),
				alt: "RYO coin website v3 screenshot TODO: alt",
			},
			{
				...(await getShowcasePicture("ryo-coin", "v4-screenshot-1")),
				alt: "RYO coin website v4 screenshot 1 TODO: alt",
			},
			{
				...(await getShowcasePicture("ryo-coin", "v4-screenshot-2")),
				alt: "RYO coin website v4 screenshot 2 TODO: alt",
			},
			{
				...(await getShowcasePicture("ryo-coin", "v4-screenshot-3")),
				alt: "RYO coin website v4 screenshot 3 TODO: alt",
			},
		],
		links: [
			{
				url: "https://ryocoin.netlify.app/",
				label: "Visit RYO Coin v1 demo website",
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
