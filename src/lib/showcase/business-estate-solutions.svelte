<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import banner from "$showcase/business-estate-solutions/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/business-estate-solutions/banner.webp?lqip";
	import screenshot1 from "$showcase/business-estate-solutions/screenshot-1.webp?enhanced&quality=100";
	import screenshot1Lqip from "$showcase/business-estate-solutions/screenshot-1.webp?lqip";
	import screenshot2 from "$showcase/business-estate-solutions/screenshot-2.webp?enhanced&quality=100";
	import screenshot2Lqip from "$showcase/business-estate-solutions/screenshot-2.webp?lqip";
	import screenshot3 from "$showcase/business-estate-solutions/screenshot-3.webp?enhanced&quality=100";
	import screenshot3Lqip from "$showcase/business-estate-solutions/screenshot-3.webp?lqip";

	export const besWebsite: ShowcaseItem = {
		type: "website",
		id: "bes",
		name: "Business Estate Solutions CRM",
		description,
		shortDescription: "A CRM system for a real estate agency",
		banner: {
			src: banner,
			lqip: bannerLqip,
		},
		images: [
			{
				src: screenshot1,
				lqip: screenshot1Lqip,
				alt: "",
			},
			{
				src: screenshot2,
				lqip: screenshot2Lqip,
				alt: "",
			},
			{
				src: screenshot3,
				lqip: screenshot3Lqip,
				alt: "",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		I designed a Telegram-integrated Svelte web app for a real estate agency
		that allows agents to manage contacts lists and share it internally,
		implemented contact book importing algorithm for both iPhone’s iOS and
		Android and conversational questionnaire for contact import via bot chat.
	</p>
	<p>The project was developed solely by me in October 2025.</p>
	<h2>Challenges</h2>
	<ul class="list-disc ps-5">
		<li>Built auth around Telegram accounts via TWA protocol</li>
		<li>Reverse engineered Android and iOS VCF card formats for mass import</li>
		<li>
			Integrated a questionnaire into Telegram bot chat to allow users to import
			entries via contact attachments
		</li>
	</ul>
	<h2>Reception</h2>
	<p>
		The app was well received by the client and is currently in use by their
		agents to manage contacts and share them internally. It allows multiple
		users to share the single contact database, easily update entries and reach
		out to contacts when a potential lead is identified.
	</p>
{/snippet}
