<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const sipackerWebsite: ShowcaseItem = {
		type: "website",
		id: "sipacker",
		name: "SIPacker",
		description,
		shortDescription: "",
		banner: await getShowcasePicture("sipacker", "banner"),
		images: [
			{
				...(await getShowcasePicture("sipacker", "screenshot-1")),
				alt: "SIPacker website screenshot 1 TODO: alt",
			},
			{
				...(await getShowcasePicture("sipacker", "screenshot-2")),
				alt: "SIPacker website screenshot 2 TODO: alt",
			},
			{
				...(await getShowcasePicture("sipacker", "screenshot-3")),
				alt: "SIPacker website screenshot 3 TODO: alt",
			},
			{
				...(await getShowcasePicture("sipacker", "screenshot-4")),
				alt: "SIPacker website screenshot 4 TODO: alt",
			},
		],
		links: [
			{
				url: "https://sipacker.netlify.app/",
				label: "Visit SIPacker",
			},
			{
				url: "https://git.hloth.dev/hloth/sipacker",
				label: "Open SIPacker source code",
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
