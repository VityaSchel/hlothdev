<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";

	export const moreOfMeWebsite: ShowcaseItem = {
		type: "website",
		id: "moreofme",
		name: "Moreof.me",
		description,
		shortDescription:
			"Moreof.me is a a personal web space, encouraging users to express their thoughts and hobbies, which I was hired to build as a sole full-stack developer in 2024.",
		banner: "/showcase/moreofme/banner.webp",
		images: [
			{
				url: "/showcase/moreofme/image.webp",
				alt: "Moreof.me pages screenshots TODO: alt",
			},
		],
		links: [
			{
				url: "https://blog.hloth.dev/blog/moreofme",
				label: "Read my blog post about Moreof.me",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Moreof.me is a freelance project I was building starting in October 2024 and
		up to February 2025. I was contacted to build and manage the whole
		infrastructure of the platform.
	</p>
	<h2>About the Project</h2>
	<p>
		Moreof.me is a personal web space designed to let users present a fuller
		version of themselves beyond traditional social media. Instead of focusing
		on user connections, the platform encourages them to express their thoughts,
		hobbies, and answer weekly questions in a customizable format. With features
		like postboards, profile integrations with Spotify, Steam, and OpenLibrary,
		and a Creator Tool for sharing content on external platforms, Moreof.me is
		meant to be an interactive online self-portrait. It supports rich
		formatting, saved content, analytics, and external social contact options,
		all aimed at personal storytelling.
	</p>
	<h2>My Role</h2>
	<p>
		I was the sole developer for both frontend and backend of the website,
		creating the entire technical implementation. I chose Svelte over React for
		its performance and simplicity and quickly adopted my skills as a 4 years
		React developer, and migrated from MongoDB to PostgreSQL to use Drizzle ORM.
		I implemented secure authorization from scratch, set up microservices,
		developed a feature-rich Creator Tool with client-side video rendering
		capabilities, and deployed serverless GPU-intensive Google Cloud Compute
		workers, all while ensuring optimized performance and smooth user experience
		across platforms.
	</p>
	<h2>Challenges</h2>
	<p>
		The project presented numerous technical and UX challenges. OAuth
		integration, especially with Apple, server-side analytics, metrics that
		bypass ad blockers, Safari’s behavior, reliable video compression and
		playback using Web APIs. I also had to reverse-engineer APIs (e.g. Steam’s
		hidden API endpoints) and optimize PostgreSQL to perform fast full-text
		search over tens of millions of book records scraped from OpenLibrary dumps.
		Another particular challenge was to force Instagram in-app browser to open
		the web page externally which was implemented using various hacks separately
		for Android and iOS.
	</p>
	<h2>Result of My Work</h2>
	<p>
		The final implementation of Moreof.me includes a wide range of features that
		required deep technical research and architectural planning. I built a
		system that allows real-time content delivery using server-sent events,
		integrated external platforms such as Spotify, Steam, and OpenLibrary, and
		developed a Creator Tool capable of rendering video content client- and
		server-side using WebCodecs, Sharp, and Satori html-to-svg rendering. The
		platform’s infrastructure is structured around modular microservices and
		JWT-based authentication to maintain scalability and maintainability. Each
		system from the post editor to email notifications was designed with
		performance and cross-platform compatibility in mind.
	</p>
{/snippet}
