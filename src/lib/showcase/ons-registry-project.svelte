<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const onsRegistryProject: ShowcaseItem = {
		type: "project",
		id: "ons-registry",
		name: "ONS Registry",
		description,
		shortDescription:
			"ONS Registry (Oxen Name System registry) is a website collecting decrypted ONS/LNS/SNS names and their history, price, owner, etc from the Session Token blockchain",
		banner: await getShowcasePicture("ons-registry", "banner"),
		images: [
			{
				...(await getShowcasePicture("ons-registry", "screenshot")),
				alt: "ONS Registry home page screenshot with text: Open OXEN Name System list, updated automatically from the blockchain. Easily lookup ONS names and get all authors usernames.",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/ons-registry",
				label: "Open ONS registry source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		ONS/LNS/SNS is a naming system used for Session Messenger running in the
		blockchain. It allows anyone to register a human-readable name and link it
		to their Session ID.
	</p>
	<h2>The problem</h2>
	<p>
		While learning about ONS system I realized there was no user-friendly
		website collecting dehashed names and their history. The only way to look up
		a name was to either use the Oxen CLI, the Session messenger itself or a
		third-party Oxen Blockchain Explorer. None of them provded detailed
		information on a particular name.
	</p>
	<h2>The solution</h2>
	<p>
		In just one day I built a website consisting of a frontend running Next.js
		with offline service worker, cache management system based on ETag, local
		IndexedDB database, periodic automatic background sync, and a backend
		powered by Bun and Node.js and Fastify that automatically pulls the latest
		blocks from blockchain, searches for ONS purchases, tries to decode with
		bruteforcing hashes and stores the results in a SQLite database for instant
		lookup upon API request. The API and website were completely free to use.
		The website had no ads and no trackers.
	</p>
	<h2>Monetization</h2>
	<p>
		In addition to making the API and website free I also created an ONS
		registration system that allowed anyone to purchase a name for fiat money by
		paying with card in under 30 seconds. Optionally you could have requested
		the name to be linked to your wallet so that the website had no theoretical
		way of controlling the ONS. In its essence it was just a simplified way of
		purchasing an ONS name in the blockchain.
	</p>
{/snippet}
