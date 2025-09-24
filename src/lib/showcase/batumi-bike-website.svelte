<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const batumiBikeWebsite: ShowcaseItem = {
		type: "website",
		id: "batumi-bike",
		name: "Batumi.bike",
		description,
		shortDescription:
			"Map of safe roads for electric scooters in Batumi, Georgia based on OpenStreetMap data",
		banner: await getShowcasePicture("batumi-bike", "banner"),
		images: [
			{
				...(await getShowcasePicture("batumi-bike", "screenshot-1")),
				alt: "Batumi.bike website screenshot showing the map with green, yellow and red lines representing roads quality in Batumi, Georgia",
			},
			{
				...(await getShowcasePicture("batumi-bike", "screenshot-2")),
				alt: "Development screenshot with OpenStreetMap data imported and rendered as svg",
			},
			{
				...(await getShowcasePicture("batumi-bike", "screenshot-3")),
				alt: "Batumi.bike website screenshot with search results for points of interest",
			},
		],
		links: [
			{
				url: "https://batumibike.netlify.app",
				label: "Visit Batumi.bike (batumibike.netlify.app)",
			},
			{
				url: "https://git.hloth.dev/hloth/batumi.bike",
				label: "Open Batumi.bike source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		After leaving Russia and immigrating to Georgia, I settled on living in
		Batumi, a beautiful city on the coast of the Black Sea. As electric scooters
		fan I was looking forward to riding them around the city. Despite being a
		relatively small city (about 185,000 residents), Batumi has a number of
		electric scooter rental services.
	</p>
	<h2>The problem</h2>
	<p>
		I quickly realized that Batumi's roads are not very scooter-friendly. Many
		roads are in poor condition, with potholes, cracks, and uneven surfaces that
		make riding a scooter dangerous and uncomfortable. Additionally, the city's
		infrastructure is not bike-friendly.
	</p>
	<h2>The solution</h2>
	<p>
		In one day I single-handedly created a free web app that renders an
		interactive map of Batumi and indicates dangerous roads to avoid. The map is
		based on data from OpenStreetMap, and road quality is determined by
		analyzing the surface type, paving quality, and other data available for
		free.
	</p>
	<h2>The reception</h2>
	<p>
		The website gained popularity and was featured in local media, including the
		Telegram channel "Batumchik" with over 10,000 subscribers, a global forum
		for travellers "TravelAsk" and a number of local messenger groups.
	</p>
	<p>
		As of 2025, the domain batumi.bike expired and the website continues to
		exist at batumibike.netlify.app.
	</p>
{/snippet}
