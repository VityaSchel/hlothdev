<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const nockTradeWebsite: ShowcaseItem = {
		type: "website",
		id: "nock-trade",
		name: "Nock Trade",
		description,
		shortDescription:
			"A trading platform that allows users to trade various assets seamlessly, made for freelance client in 2025",
		banner: await getShowcasePicture("nock-trade", "banner"),
		images: [
			{
				...(await getShowcasePicture("nock-trade", "screenshot-1")),
				alt: "Nock.trade home page screenshot with cards: Total funds deposited / Buy orders in this September / Sell orders in this September / Active users; Buy nock for BTC (2 WTS orders) / Sell nock for BTC (0 WTB orders)",
			},
			{
				...(await getShowcasePicture("nock-trade", "screenshot-2")),
				alt: "Nock.trade login page screenshot with text: Welcome back / Login to your Nock Trade account; Email / Password / Login",
			},
			{
				...(await getShowcasePicture("nock-trade", "screenshot-3")),
				alt: "Nock.trade order creation page screenshot with text: New order; Buy / Sell; Buy [input field] NOCK for [input field] USD each; Total … $0.00 USD / BTC; Your nock address – to receive funds / [input field]; Your BTC address – in case you cancel the order / [input field]; The exchange is performed between NOCK and BTC, and the USD price is only for your reference. 1 BTC = 112,883.80 USD; Fee: 0.5% +transaction costs / [button] Create order",
			},
			{
				...(await getShowcasePicture("nock-trade", "screenshot-4")),
				alt: "Nock.trade order fulfill page with text: You receive up to 90000 NOCK / They receive up to 0.01440000 BTC; N 50 Your receiving Nock address / max: N 90000; Your BTC address / [input field] To receive Nock; Your BTC address / [input field] To receive refund in case of failure; [button] Confirm purchase / Fee: 0.5% + transaction costs",
			},
			{
				...(await getShowcasePicture("nock-trade", "screenshot-5")),
				alt: "Nock.trade home page in dark theme",
			},
			{
				...(await getShowcasePicture("nock-trade", "screenshot-6")),
				alt: "Nock.trade account page in dark theme with text: Viktor / [button with a pencil]; nocktrade@hloth.dev; Change password / Delete account",
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
		single click. The project was built for my freelance client in mid-2025.
	</p>
	<h2>Design</h2>
	<p>
		The website was designed to be accessible for people with any background in
		crypto and finance management. It's simple design allows anyone to publish
		an order. Registration does not require KYC procedures, so a visitor can
		start trading assets right away.
	</p>
	<p>
		The visual design is minimalistic and clean, powered by shadcn/ui components
		and Bits UI library. Theme colors are almost sterile, chosen to emphasize
		cleanliness and simplicity while hinting at Nock coin's brand colors. I
		really liked the <a
			href="https://ui.shadcn.com/blocks#dashboard-01"
			rel="noopener noreferrer nofollow"
			target="_blank">"Dashboard-01"</a
		> template from shadcn/ui as a starting point for the design.
	</p>
	<h2>Security</h2>
	<p>
		Nock.trade was built with security in mind. One of the hardest challenges I
		faced with frontend was to ensure that it fully works with JavaScript
		disabled. This was possible thanks to SvelteKit's progressive enhancement,
		its philosophy of relying on native HTML features first, and my background
		in building server-side rendered applications.
	</p>
	<p>
		I learned a lot about Linux, system-level security, authorization,
		permissions, ownership, unix sockets, firewalls while securing the backend.
		I set up a staging environment to implement blue-green deployments, ensuring
		zero downtime during updates.
	</p>
	<p>
		I implemented fail2ban in combination with Cloudflare WAF for rate limiting
		and brute-force protection. Highly sensitive data is encrypted and securely
		stored separately. 3-2-1 backup strategy is implemented, automated and all
		backups are encrypted as well. I made sure to never log IP addresses and we
		made a choice to use privacy-focused metrics instead of Google Analytics.
	</p>
	<h2>Backend</h2>
	<p>
		Most of the backend is built with TypeScript running on Bun. The only part
		that I couldn't implement was Rust REST API for interacting with the Nock
		daemon. It was outsourced to a trusted developer who now maintains
		everything related to the Nock coin core.
	</p>
	<p>
		One of the hardest challenges I faced was to create a signed network
		(signet) for Bitcoin. I spent about 30 hours researching, experimenting with
		deployment, modifying BTCPay Server, NBXPlorer, NBitcoin and wrote a
		detailed guide on how to set it up in my blog: <a
			href="https://blog.hloth.dev/nbxplorer-custom-signet"
			rel="noopener noreferrer nofollow"
			target="_blank"
			>How to add custom bitcoin signet to NBitcoin and NBXplorer</a
		>.
	</p>
	<p>
		I also created a custom web-based Nock GUI wallet frontend for our
		production and staging wallets for easier testing and funds management. I
		deployed two instances of RabbitMQ with custom rules, services, exchanges,
		queues
	</p>
	<h2>Reception</h2>
	<p>
		The project was successfully launched on August 29, 2025. It was met with
		positive feedback, especially regarding its user-friendly interface and
		clean design. Some people expressed concerns about liquidity and pointed to
		another exchange listing Nock coin that added it a few weeks earlier.
	</p>
	<p>
		As of September 2025, the exchange owner made a decision to wait with
		marketing efforts until Nockchain implements its own atomic swap protocol.
		After that, the plan is to transition to a fully decentralized exchange
		(DEX) without holding custody of traders funds.
	</p>
{/snippet}
