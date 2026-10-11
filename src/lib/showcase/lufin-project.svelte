<script lang="ts" module>
	import type { ShowcaseItem } from "#lib/showcase/items.ts";
	import { showcaseImages } from "#lib/showcase/images.ts";
	import { subdomainUrl } from "#lib/utils.ts";

	const { image } = showcaseImages("lufin");

	export const lufinProject: ShowcaseItem = {
		id: "lufin",
		description,
		shortDescription:
			"A modern self-hosted file-sharing service and an alternative to lufi",
		images: [
			{
				...image("screenshot-1"),
				alt: "Lufin frontend screenshot with text: Drag and drop files here or [Add the files] button / Finish upload / Set a password / [Checkbox] Delete on first download / [Checkbox] Make a zip archive before downloading / [Checkbox] Encrypt with end-to-end encryption (Disable encryption so that a direct link to the uploaded file works (e.g. for embedding images)) / Upload as folder — 2 files / Data retention periods and other conditions of use",
			},
			{
				...image("screenshot-2"),
				alt: "Lufin frontend screenshot with text: Uploads history / Only files sent through this browser will be shown here. The list is in localStorage: if you clear the data in localStorage, <...> deleted. Dark lines mean that the files have been been expired and are no longer available. Русский / Українська / Беларуская / English / Български / Čeština / Dansk / Nederlands / Eesti / Suomi / Français / Deutsch / Ελληνικά / Magyar / Italiano / Latviski / Lietuvių / Norsk / Polski / Português / Română / Slovenčina",
			},
			{
				...image("lufin-screenshotter"),
				alt: "Lufin screenshotter image editor with text: wow new design thanks apple now I have to remake my website which is not even finished yet / look I can do blur too! with this editor tools",
			},
		],
		links: () => [
			{
				url: subdomainUrl("lufin"),
				label: "Visit Lufin demo website",
			},
			{
				url: subdomainUrl("git", "/hloth/lufin"),
				label: "Open lufin source code",
			},
			{
				url: subdomainUrl("git", "/hloth/lufin-screenshotter"),
				label: "Open lufin screenshotter source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Lufin — a modern self-hosted file-sharing service and an alternative to
		<a
			href="https://framagit.org/fiat-tux/hat-softwares/lufi"
			rel="noopener noreferrer nofollow"
			target="_blank">lufi</a
		> built with React, Vite & Rollup, Material UI, SCSS modules, TailwindCSS, MongoDB,
		PostgreSQL, Drizzle ORM & Kit, Elysia, Bun.
	</p>
	<h2>Features</h2>
	<ul class="list-disc ps-5">
		<li>✨ Modern neat design</li>
		<li>📁 S3 storage support (with Cloudflare R2 compatability)</li>
		<li>🌄 Rich client-side preview for</li>
		<li>🖼️ Images</li>
		<li>🎵 Audio</li>
		<li>🎥 Video</li>
		<li>🗂️ Zip archives</li>
		<li>📊 XLSX spreadsheets</li>
		<li>📝 Text files</li>
		<li>📖 PDF</li>
		<li>
			🗣️ Translated to 26 languages: English, Русский, Українська, Беларуская,
			Български, Čeština, Dansk, Nederlands, Eesti, Suomi, Français, Deutsch,
			Ελληνικά, Magyar, Italiano, Latviešu, Lietuvių, Norsk, Polski, Português,
			Română, Slovenčina, Slovenščina, Español, Svenska, Türkçe.
		</li>
		<li>🛡️ Client-side metadata stripping such as EXIF from images</li>
		<li>🔥 Configurable data retention settings based on files size</li>
		<li>
			🔐 Optional end-to-end encryption using AES-GCM allowing user to opt-out
			to embed files via hotlinks
		</li>
		<li>🔑 Password protection</li>
		<li>👀 Delete at first downlaod</li>
		<li>🗃️ Client-side archive generation before uploading</li>
		<li>📸 Client-side image compression</li>
		<li>✏️ Automatic file renaming with option to keep original filenames</li>
		<li>📀 Multiple databases support (MongoDB, PostgreSQL, SQLite)</li>
		<li>
			⚡️ Fully static frontend (no SSR, no Next.js needed running for the
			website)
		</li>
		<li>📦 Docker Compose deployment with automatic HTTPS out of the box</li>
		<li>💻 Links to uploaded files are stored in LocalStorage</li>
		<li>
			💾 Importable/exportable LocalStorage with a button to clean up expired
			pages
		</li>
	</ul>
	<p>
		The project was initially launched as part of the bigger platform for
		business, tracking trends in russian division of darknet (Tor Onion Network)
		made in 2023. The filesharing was one of the platform features allowing
		anyone to share files securely and privately for free. My job was to create
		a service similar to lufi but using client's design and integrating with the
		platform's systems. In late 2024 I had to stop working for that freelance
		client due to constant harassment, abuse and threats. Upon leaving, they had
		owed me about 400€ but refused to pay the rest. One year later I rewrote the
		filesharing backend, improved accessibility, added new features, more
		database choices and published it as lufin. The project became my most
		popular open source project with more than 150 stars on GitHub as of
		September 2025.
	</p>
	<h2>Lufin screenshotter</h2>
	<p>
		Firefox-based browser extension for taking full-screen, partial, full-screen
		cropped screenshots, with a built-in image editor and an option to instantly
		upload to your choosen lufin instance. Free, no ads, no trackers, no
		metrics, 100% opensource.
	</p>
{/snippet}
