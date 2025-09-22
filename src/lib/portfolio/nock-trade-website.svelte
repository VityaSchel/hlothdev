<script lang="ts" module>
	import type { PortfolioItem } from "$lib/portfolio";

	export const nockTradeWebsite: PortfolioItem = {
		type: "website",
		id: "nock-trade",
		name: "Nock Trade",
		description,
		shortDescription:
			"Nock Trade is a trading platform that allows users to trade various assets seamlessly.",
		banner: "/projects/nock-trade/banner.webp",
		images: [
			{
				url: "/projects/nock-trade/screenshot-1.webp",
				alt: "Nock Trade main page",
			},
			{
				url: "/projects/nock-trade/screenshot-1.webp",
				alt: "Nock Trade main page",
			},
			{
				url: "/projects/nock-trade/screenshot-1.webp",
				alt: "Nock Trade main page",
			},
			{
				url: "/projects/nock-trade/screenshot-1.webp",
				alt: "Nock Trade main page",
			},
		],
		links: [
			{
				url: "https://nock.trade",
				label: "Visit Nock Trade",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Nock Exchange is a cryptotrading OTC marketplace for NOCK cryptocoin. It
		allows user to effortlessly sell their NOCK or place a buy order with a
		single click.
	</p>
	<h2>Designed for everyone</h2>
	<p>
		The website was designed to be accessible for people with any background in
		crypto and finance management. It's simple design allows anyone to publish
		an order. Registration does not require KYC procedures, so a visitor can
		start trading assets right away.
	</p>
	<h2>Built with security in mind</h2>
	<p> </p>
	<h2>Subheading</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<h2>Subheading</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
{/snippet}
