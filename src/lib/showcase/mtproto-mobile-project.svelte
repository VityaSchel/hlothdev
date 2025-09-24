<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const mtprotoMobileProject: ShowcaseItem = {
		type: "project",
		id: "mtproto-mobile",
		name: "Mtproto Mobile",
		description,
		shortDescription:
			"MTProto Mobile is an Android app allowing raw communication with Telegram API using Core API protocol.",
		banner: await getShowcasePicture("mtproto-mobile", "banner"),
		images: [
			{
				...(await getShowcasePicture("mtproto-mobile", "screenshots")),
				alt: "Mtproto Mobile screenshots. 1) Method execution request form 2) Response browser 3) Another method: auth.signIn",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/mtproto-mobile",
				label: "Open Mtproto Mobile source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		MTProto is the official communication protocol for interacting with Telegram
		User API. It allows anyone to build custom Telegram clients and automation
		scripts running on user's behalf.
	</p>
	<h2>The problem</h2>
	<p>
		While sitting in high school I couldn't work on my laptop but I was eager to
		learn more about Telegram API and experiment with it. I found out that
		there's no easy way to do it on mobile devices.
	</p>
	<h2>The solution</h2>
	<p>
		I built a free and 100% open-source mobile app powered by Expo and React
		Native using @mtproto/core library. It allows user to run multiple sessions
		and easily switch between them, autocompletes method names, strictly types
		all method parameters, supports recursive constructors and subtypes, logs
		warnings and responses to the console, integrates upload and download with
		native Android APIs.
	</p>
{/snippet}
