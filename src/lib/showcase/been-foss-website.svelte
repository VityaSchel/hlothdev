<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
	import banner from "$showcase/been-foss/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/been-foss/banner.webp?lqip";
	import screenshot from "$showcase/been-foss/screenshot.webp?enhanced&quality=100";
	import screenshotLqip from "$showcase/been-foss/screenshot.webp?lqip";

	export const beenFossWebsite: ShowcaseItem = {
		type: "website",
		id: "been-foss",
		name: "been-foss",
		description,
		shortDescription:
			'A free open source alternative to ad and trackers cluttered "been" app made with Svelte 5',
		banner: {
			src: banner,
			lqip: bannerLqip,
		},
		images: [
			{
				src: screenshot,
				lqip: screenshotLqip,
				alt: "been-foss website main page screenshot with a world map",
			},
		],
		links: [
			{
				url: "https://beenfoss.netlify.app/",
				label: "Visit been-foss",
			},
			{
				url: `${getMainDomainProtocol()}://git.${getMainDomain()}/hloth/been-foss`,
				label: "Open been-foss source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		As someone who enjoys traveling, I often find myself using the visited
		places tracking apps. These apps keep track of the countries and regions you
		visited and highlight them on a world map.
	</p>
	<h2>The problem</h2>
	<p>
		After using one called "been" for a while, I got tired of how it was filled
		with ads and I wasn't comfortable with using Google for login. The final
		straw was an enormous wall of consent settings when I opened it in Europe. I
		realized it has hundreds if not thousands of unnecessary user trackers.
	</p>
	<h2>The solution</h2>
	<p>
		For something as simple as a world map with selected countries highlighted,
		I decided to create my own open source alternative called "been-foss". It is
		built with Svelte 5 and works entirely offline. No ads, no trackers, no
		auth, free, libre and 100% open-source. It's simple, elegant and built in
		one day (the day of my birthday!)
	</p>
{/snippet}
