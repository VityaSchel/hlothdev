<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import banner from "$showcase/jswitcher/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/jswitcher/banner.webp?lqip";
	import screenshot1 from "$showcase/jswitcher/screenshot-1.webp?enhanced&quality=100";
	import screenshot1Lqip from "$showcase/jswitcher/screenshot-1.webp?lqip";
	import screenshot2 from "$showcase/jswitcher/screenshot-2.webp?enhanced&quality=100";
	import screenshot2Lqip from "$showcase/jswitcher/screenshot-2.webp?lqip";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";

	export const jswitcherProject: ShowcaseItem = {
		type: "project",
		id: "jswitcher",
		name: "JSwitcher",
		description,
		shortDescription:
			"A Figma plugin for seamless component and font conversion",
		banner: {
			src: banner,
			lqip: bannerLqip,
		},
		images: [
			{
				src: screenshot1,
				lqip: screenshot1Lqip,
				alt: "JSwitcher auth form screenshot requesting OAuth code from user",
			},
			{
				src: screenshot2,
				lqip: screenshot2Lqip,
				alt: "JSwitcher fonts mapping settings",
			},
		],
		links: [
			{
				url: `${getMainDomainProtocol()}://git.${getMainDomain()}/hloth/jswitcher`,
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
		The designer team of Russian division of the international Joom marketplace
		contacted me in 2021 to make a Figma plugin for them that would
		automatically convert existing mobile layouts between Android and iOS
		platforms.
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
	<h2>Open sourcing the code</h2>
	<p>
		In 2025, after 4 years since the initial release, I decided to open source
		the code of the plugin. It is now available on my git server under MIT
		license.
	</p>
{/snippet}
