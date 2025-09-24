<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const jswitcherProject: ShowcaseItem = {
		type: "project",
		id: "jswitcher",
		name: "JSwitcher",
		description,
		shortDescription:
			"A Figma plugin for seamless component and font conversion",
		banner: await getShowcasePicture("jswitcher", "banner"),
		images: [
			{
				...(await getShowcasePicture("jswitcher", "screenshot-1")),
				alt: "JSwitcher auth form screenshot requesting OAuth code from user",
			},
			{
				...(await getShowcasePicture("jswitcher", "screenshot-2")),
				alt: "JSwitcher fonts mapping settings",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/jswitcher",
				label: "Open JSwitcher source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Figma plugin that adds seamless component and font switching between team
		libraries: design once, copy and switch components for any platform.
	</p>
	<h2>The task</h2>
	<p>
		Designer team of Russian division of the international Joom marketplace
		contacted me to make a Figma plugin for them that would automatically
		convert existing mobile layouts between Android and iOS platforms.
	</p>
	<h2>Challenges</h2>
	<p>
		This was my first time working with Figma TypeScript SDK and it was way
		before we had high-quality performant bundlers and DX. I had to use webpack
		and babel. I had to learn recursive tree search to implement component
		conversion logic. I was also required to build a OAuth client that works
		within Figma plugin.
	</p>
	<h2>The final result</h2>
	<p>
		A few weeks later I presented the plugin that connects to the Figma team
		library and allows user to convert layouts with a single mouse click,
		including fonts, component instances and frame properties.
	</p>
{/snippet}
