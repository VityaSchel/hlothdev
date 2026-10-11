<script lang="ts" module>
	import type { ShowcaseItem } from "#lib/showcase/items.ts";
	import { showcaseImages } from "#lib/showcase/images.ts";

	const { image } = showcaseImages("business-estate-solutions");

	export const besWebsite: ShowcaseItem = {
		id: "bes",
		description,
		shortDescription: "A CRM system for a real estate agency",
		images: [
			{
				...image("screenshot-1"),
				alt: "",
			},
			{
				...image("screenshot-2"),
				alt: "",
			},
			{
				...image("screenshot-3"),
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
