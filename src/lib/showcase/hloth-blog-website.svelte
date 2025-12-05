<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import banner from "$showcase/hloth-blog/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/hloth-blog/banner.webp?lqip";
	import screenshot from "$showcase/hloth-blog/screenshot.webp?enhanced&quality=100";
	import screenshotLqip from "$showcase/hloth-blog/screenshot.webp?lqip";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";

	export const blogHlothDevWebsite: ShowcaseItem = {
		type: "website",
		id: "hloth-blog",
		name: "hloth blog",
		description,
		shortDescription:
			"My personal blog about web development and personal projects",
		banner: {
			src: banner,
			lqip: bannerLqip,
		},
		images: [
			{
				src: screenshot,
				lqip: screenshotLqip,
				alt: "Screenshot of the homepage of blog.hloth.dev with the following posts: Migrating 200 projects from GitHub to self-hosted Forgejo; macOS 26 Tahoe Day, Morning, Evening, and Night based on clock; How to add custom bitcoin signet to NBitcoin and NBXplorer",
			},
		],
		links: [
			{
				url: `${getMainDomainProtocol()}://blog.${getMainDomain()}`,
				label: "Visit hloth blog",
			},
			{
				url: `${getMainDomainProtocol()}://git.${getMainDomain()}/hloth/blog.hloth.dev`,
				label: "Open hloth blog source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		My personal blog about web development stuff and my IRL stuff. No ads, no
		JavaScript required, pure shitpost 😻 100% open-source!
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
		prevent flooding. The <a href="/showcase/pow-reaction">
			pow-reaction library
		</a> is a standalone open-source project that can be used by anyone for free!
	</p>
	<h2>Remake in Astro</h2>
	<p>
		Before I even finished the SvelteKit remake I found out about Astro and
		decided to remake the whole website once again... Now my blog is powered by
		Astro and loads in less than a second on any connection, has 97+/100/100/100
		Lighthouse scores and progressive loading images. It was a NOT fun
		experience getting back to JSX and Astro fully-static components generation,
		but I loved the idea of storing blog posts in Markdown files and editing
		them through Visual Studio Code.
	</p>
{/snippet}
