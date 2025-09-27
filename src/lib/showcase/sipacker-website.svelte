<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import banner from "$showcase/sipacker/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/sipacker/banner.webp?lqip";
	import screenshot1 from "$showcase/sipacker/screenshot-1.webp?enhanced&quality=100";
	import screenshot1Lqip from "$showcase/sipacker/screenshot-1.webp?lqip";
	import siquester from "$showcase/sipacker/siquester.webp?enhanced&quality=100";
	import siquesterLqip from "$showcase/sipacker/siquester.webp?lqip";
	import screenshot2 from "$showcase/sipacker/screenshot-2.webp?enhanced&quality=100";
	import screenshot2Lqip from "$showcase/sipacker/screenshot-2.webp?lqip";
	import screenshot3 from "$showcase/sipacker/screenshot-3.webp?enhanced&quality=100";
	import screenshot3Lqip from "$showcase/sipacker/screenshot-3.webp?lqip";

	export const sipackerWebsite: ShowcaseItem = {
		type: "website",
		id: "sipacker",
		name: "SIPacker",
		description,
		shortDescription: "A PWA for creating playable SiGame custom packs",
		banner: {
			src: banner,
			lqip: bannerLqip,
		},
		images: [
			{
				src: screenshot1,
				lqip: screenshot1Lqip,
				alt: "SIPacker website screenshot with a list of questions in a pack",
			},
			{
				src: siquester,
				lqip: siquesterLqip,
				alt: "The official SiQuester app running on Windows",
			},
			{
				src: screenshot2,
				lqip: screenshot2Lqip,
				alt: "SIPacker website screenshot with a question editor",
			},
			{
				src: screenshot3,
				lqip: screenshot3Lqip,
				alt: "SIPacker website screenshot with file manager with compression options",
			},
		],
		links: [
			{
				url: "https://sipacker.netlify.app/",
				label: "Visit SIPacker",
			},
			{
				url: "https://git.hloth.dev/hloth/sipacker",
				label: "Open SIPacker source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		PWA for creating custom question packs for <a
			href="https://vladimirkhil.com/si/game"
			target="_blank"
			rel="nofollow noreferrer noopener">SiGame</a
		>, a popular open-source online quiz game app.
	</p>
	<h2>The problem</h2>
	<p>
		The official desktop installable <a
			href="https://github.com/VladimirKhil/SI">SiQuester</a
		> app is a great tool for creating custom question packs for SiGame. However,
		it is only available on Windows and built with DotNet making it impossible to
		use on Linux, MacOS, Android or iOS. Additionally, it has a complex user interface
		that can confuse users, not familiar with pack editing process. The need for
		a cross-platform and straightforward pack editor was expressed by the SiGame
		community for many years.
	</p>
	<h2>The solution</h2>
	<p>
		As my 10th grade graduation project I decided to create SIPacker, a
		web-based question pack editor. It is a Progressive Web App (PWA) that does
		not require installation or downloading and works offline on any device with
		a modern web browser, including mobile phones and tablets. It's built with
		React, JavaScript and Material UI. It streamlines the pack creation process
		by introducing the checklist that pack author has to follow in order to
		create a valid pack. It allows users to create packs from scratch, edit
		existing packs thanks to full compatibility with SiQuester and import packs
		as files using URL or drag-and-drop.
	</p>
	<h2>File browser</h2>
	<p>
		To simplify the process of managing pack assets, SIPacker features a custom
		file browser that stores blobs in IndexedDB. It introduced a built-in image
		compressor to optimize embedded assets, an exclusive feature not available
		in SIQuester. The file browser also supports importing assets using URL. The
		file size limit is much higher than in SiQuester.
	</p>
	<h2>Reception</h2>
	<p>
		The app was launched in October 2021 and received a very positive feedback
		from the SiGame community. It was <a
			href="https://vk.com/wall-135725718_6971"
			rel="nofollow noreferrer noopener"
			target="_blank">featured</a
		> in the official SiGame VKontakte group. The project became my second most starred
		repository on GitHub with 30 stars as of September 2025.
	</p>
{/snippet}
