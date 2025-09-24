<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const blogHlothDevWebsite: ShowcaseItem = {
		type: "website",
		id: "hloth-blog",
		name: "hloth blog",
		description,
		shortDescription:
			"My personal blog about web development and personal projects",
		banner: await getShowcasePicture("hloth-blog", "banner"),
		images: [
			{
				...(await getShowcasePicture("hloth-blog", "screenshot")),
				alt: "Screenshot of the homepage of blog.hloth.dev with the following posts: Migrating 200 projects from GitHub to self-hosted Forgejo; macOS 26 Tahoe Day, Morning, Evening, and Night based on clock; How to add custom bitcoin signet to NBitcoin and NBXplorer",
			},
		],
		links: [
			{
				url: "https://blog.hloth.dev",
				label: "Visit hloth blog",
			},
			{
				url: "https://git.hloth.dev/hloth/blog.hloth.dev",
				label: "Open hloth blog source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		My personal blog about web development stuff and my IRL stuff. No ads, no
		JavaScript required, pure shitpost 😻
	</p>
	<h2>Design</h2>
	<p>
		I was looking for a bold, bright, fashionable design for my blog. No
		distrctions, straight to the point and content. Rich formatting, stylish
		typeface, innovative features. I took inspiration from Milos Bojkovic's
		"Blog post exploration" shot on Dribbble. I added my own touch to make it
		more personal and unique. Like the dark mode toggle which slowly fades the
		colors based on the time of the day or a precisely-animated back arrow in
		menu that sticks to the closing menu edge.
	</p>
	<h2>Remake in Svelte</h2>
	<p>
		Initially built with React v18 and Next.js v14 it was a slow mess that
		couldn't handle more than a few tens of requests per second. After migrating
		the project to SvelteKit exactly one year after release I managed to cut
		project size in half while keeping all existing features and adding new
		ones. I also migrated from MongoDB to PostgreSQL and Drizzle ORM. A few
		weeks later I added reactions to posts that use proof-of-work algorithm to
		prevent flooding. The pow-reaction library is a standalone open-source
		project that can be used by anyone for free!
	</p>
{/snippet}
