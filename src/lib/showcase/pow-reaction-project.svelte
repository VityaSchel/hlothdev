<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const powReactionProject: ShowcaseItem = {
		type: "project",
		id: "pow-reaction",
		name: "pow-reaction",
		description,
		shortDescription:
			"proof-of-work reactions for your blogs 👍 ❤️ 👀 😮 🤔 🚀",
		banner: await getShowcasePicture("pow-reaction", "banner"),
		images: [
			{
				...(await getShowcasePicture("pow-reaction", "screenshot")),
				alt: "Pow-reaction demo website screenshot with several emoji buttons with a click number counter, some are highlighted with a circular pizza-style indicator representing progress for the reaction submission. The text says: try clicking on any 10-15 times; source by hloth",
			},
		],
		links: [
			{
				url: "https://pow-reaction.pages.dev/",
				label: "Open pow-reaction demo website",
			},
			{
				url: "https://git.hloth.dev/hloth/pow-reaction",
				label: "Open pow-reaction source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		free and open-source proof-of-work reactions library for Svelte web apps
		providing privacy-friendly way to stop reactions flooding
	</p>
	<h2>How POW captcha works</h2>
	<p>
		1. You generate a challenge which consists of a. difficulty, b. number of
		rounds
		<br />2. You generate a unique random string of characters for each round
		called id
		<br />3. User now has to find a hash so that hash(id + nonce) -> translated
		to binary (000111010101011) starts from difficulty number of consecutive
		zeroes by iterating nonce starting from 0 and until they find the hash
		<br />4. They send their solutions (nonces) back with the challenge signed
		by you (to retrieve parameters for captcha and keep this lib stateless)
		<br />5. All you have to do is verify their solutions by checking if hash(id
		+ nonce) with their provided nonce -> translated to binary really starts
		from difficulty number of consecutive zeroes
	</p>
	<p>
		Add progressively increasing difficulty with each subsequent request, and
		you get a pretty good stateless, privacy friendly rate limiter.
	</p>
	<p>
		Not only this is a secure way of stopping flood but also a fair way for
		users to express their reaction. More reactions = more time to spend = those
		who appreciate the page's content more will send more reactions.
	</p>
{/snippet}
