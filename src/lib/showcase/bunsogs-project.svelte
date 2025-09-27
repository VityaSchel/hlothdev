<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import banner from "$showcase/bunsogs/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/bunsogs/banner.webp?lqip";
	import screenshot1 from "$showcase/bunsogs/screenshot-1.webp?enhanced&quality=100";
	import screenshot1Lqip from "$showcase/bunsogs/screenshot-1.webp?lqip";
	import screenshot2 from "$showcase/bunsogs/screenshot-2.webp?enhanced&quality=100";
	import screenshot2Lqip from "$showcase/bunsogs/screenshot-2.webp?lqip";
	import screenshot3 from "$showcase/bunsogs/screenshot-3.webp?enhanced&quality=100";
	import screenshot3Lqip from "$showcase/bunsogs/screenshot-3.webp?lqip";
	import screenshot4 from "$showcase/bunsogs/screenshot-4.webp?enhanced&quality=100";
	import screenshot4Lqip from "$showcase/bunsogs/screenshot-4.webp?lqip";
	import { getMainDomain } from "$lib/utils";

	export const bunsogsProject: ShowcaseItem = {
		type: "project",
		id: "bunsogs",
		name: "Bunsogs",
		description,
		shortDescription:
			"A better Session Open Group Server implementation in TypeScript with Bun",
		banner: {
			src: banner,
			lqip: bannerLqip,
		},
		images: [
			{
				src: screenshot1,
				lqip: screenshot1Lqip,
				alt: "Bunsogs main menu with options: Edit name, Edit description, Add avatar, General settings, Manage mods and admins, Ban/unban user(s), Manage users permissions, Delete room, Go back",
			},
			{
				src: screenshot2,
				lqip: screenshot2Lqip,
				alt: "Bunsogs user permissions overrides: Accessible, Read, Write, Upload — values: True, False, Not specified",
			},
			{
				src: screenshot3,
				lqip: screenshot3Lqip,
				alt: "Bunsogs rate limits settings: How many messages user can send in a time frame? Pass 0 to disable rate limits",
			},
			{
				src: screenshot4,
				lqip: screenshot4Lqip,
				alt: "Bunsogs global admins/moderators settings: Add global admin, Add global moderator, Go back",
			},
		],
		links: [
			{
				url: `https://git.${getMainDomain()}/hloth/bunsogs`,
				label: "Open bunsogs source code",
			},
			{
				url: `https://blog.${getMainDomain()}/bunsogs-release`,
				label: "Read article about bunsogs in hloth blog",
			},
			{
				url: "https://blog.li0ard.rest/blindedid",
				label: "Read article about unblinding vulnerability in li0ard blog",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		SOGS (Session Open Group Server) is a self-hosted community server that
		works in Session messenger. It allows anyone to host a public chat space
		where users can communicate securely through onion routing.
	</p>
	<h2>The problem</h2>
	<p>
		The official SOGS implementation in Python, called PySogs, is a nightmare to
		set up and maintain. It only works on one specific Ubuntu version, it
		requires dependencies even when installing it as binary, and even then it's
		not guaranteed to work because you might end up getting one of the cryptic
		errors. On top of that it's not maintained, outdated, slow and over the
		years collected so much stinky code that it's hard to even read it, let
		alone improve or modify. It also lacks user-friendly UI and relies on CLI
		arguments.
	</p>
	<h2>The solution</h2>
	<p>
		I made a free and 100% open-source reimplementation of PySogs in TypeScript
		with Bun runtime focusing on ease of use, performance and security. It
		features an interactive CLI which user can navigate with arrow keys, a
		custom-crafted in-house plugin system for easy extensibility, full
		compatibility with PySogs database for easy migration and documentation on
		all of its parts.
	</p>
	<h2>Plugins</h2>
	<p>
		One of the long-awaited features — antispam — is built-in via plugins. It
		presents user with a simple image captcha rendered with Server JS Canvas
		APIs. Another useful plugin is topic moderation which deletes messages based
		on blocked keywords or using GPT moderation (opt-in).
	</p>
	<h2>Security</h2>
	<p>
		It also supports the new 25-prefix for Session IDs that in theory should be
		more secure and not vulnerable to the unblinding exploit (see below).
	</p>
{/snippet}
