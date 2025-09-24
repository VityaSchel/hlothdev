<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";

	export const mitLicenseWebsite: ShowcaseItem = {
		type: "website",
		id: "mit-hloth-dev",
		name: "mit.hloth.dev",
		description,
		shortDescription: "",
		banner: await import("$showcase/mit-hloth-dev/banner.webp?enhanced").then(
			(m) => m.default,
		),
		images: [
			{
				src: await import(
					"$showcase/mit-hloth-dev/screenshot-1.webp?enhanced"
				).then((m) => m.default),
				alt: "mit.hloth.dev screenshot TODO: alt",
			},
			{
				src: await import(
					"$showcase/mit-hloth-dev/screenshot-2.webp?enhanced"
				).then((m) => m.default),
				alt: "change.mit.hloth.dev screenshot TODO: alt",
			},
			{
				src: await import(
					"$showcase/mit-hloth-dev/screenshot-3.webp?enhanced"
				).then((m) => m.default),
				alt: "mit.hloth.dev screenshot 2 TODO: alt",
			},
		],
		links: [
			{
				url: "https://mit.hloth.dev",
				label: "Visit mit.hloth.dev",
			},
			{
				url: "https://git.hloth.dev/hloth/mit.hloth.dev",
				label: "Open mit.hloth.dev source code",
			},
			{
				url: "https://mit.hloth.dev",
				label: "Visit change.mit.hloth.dev",
			},
			{
				url: "https://git.hloth.dev/hloth/change.mit.hloth.dev",
				label: "Open change.mit.hloth.dev source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<h2>Heading</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<h2>Heading</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
{/snippet}
