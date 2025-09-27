<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
	import bannerSrc from "$showcase/oge-generator/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/oge-generator/banner.webp?lqip";
	import screenshot1Src from "$showcase/oge-generator/screenshot-1.webp?enhanced&quality=100";
	import screenshot1Lqip from "$showcase/oge-generator/screenshot-1.webp?lqip";
	import screenshot2Src from "$showcase/oge-generator/screenshot-2.webp?enhanced&quality=100";
	import screenshot2Lqip from "$showcase/oge-generator/screenshot-2.webp?lqip";

	export const ogeGeneratorWebsite: ShowcaseItem = {
		type: "website",
		id: "oge-generator",
		name: "OGE generator",
		description,
		shortDescription:
			"A next-generation generator for the national informatics exam in Russia",
		banner: { src: bannerSrc, lqip: bannerLqip },
		images: [
			{
				src: screenshot1Src,
				lqip: screenshot1Lqip,
				alt: "OGE generator website screenshot with code editor for one of the exam tasks",
			},
			{
				src: screenshot2Src,
				lqip: screenshot2Lqip,
				alt: "OGE generator website screenshot with ZIP file download dialog for one of the exam tasks",
			},
		],
		links: [
			{
				url: `${getMainDomainProtocol()}://git.${getMainDomain()}/hloth/informatics-oge-generator`,
				label: "Open OGE generator source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		In Russia there is a national exam for 9th-grade students called OGE
		(Основной государственный экзамен). One of the subjects is Informatics,
		which includes a programming task. It so happens I was going to take this
		exam despite knowing more than any of my teachers.
	</p>
	<h2>The problem</h2>
	<p>
		The official exam provider offers a basic training suite that shuffles
		pre-made tasks. It also does not support harder tasks and has no code
		testing.
	</p>
	<h2>The solution</h2>
	<p>
		My generator is real. It creates a problem randomly and generates a solution
		based on its conditions. It can compile and test JavaScript and Python for
		the last exam problem. It allows user to test their word processors
		knowledge by embedding a rich text editor into the page and checking the
		submitted formatted text. It also embeds a table editor for spreadsheet
		operations exam problem. It checks the solution instantly and automatically
		and works offline.
	</p>
	<p>
		I used React, Reactstrap based on Bootstrap, EditorJS, html2canvas, jszip,
		xlsx and codemirror. The website is absolutely free, 100% open-source, has
		no ads and works entirely inside of the browser.
	</p>
{/snippet}
