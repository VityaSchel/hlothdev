<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
	import bannerSrc from "$showcase/ps4-merger/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/ps4-merger/banner.webp?lqip";
	import screenshotSrc from "$showcase/ps4-merger/screenshot.webp?enhanced&quality=100";
	import screenshotLqip from "$showcase/ps4-merger/screenshot.webp?lqip";

	export const ps4mergerProject: ShowcaseItem = {
		type: "project",
		id: "ps4-merger",
		name: "PS4 Merger",
		description,
		shortDescription:
			"A PlayStation 4 developer tool allowing to merge .pkg files directly on the console",
		banner: { src: bannerSrc, lqip: bannerLqip },
		images: [
			{
				src: screenshotSrc,
				lqip: screenshotLqip,
				alt: "PS4 Merger screenshot with text: Welcome! PKG Merger by hloth.dev \nSearching in /data/pkg_merger... \nFound 2 files: \bEP9000-CUSA<...>_001.pkgpart \nEP9000-CUSA<...>_002.pkgpart \n\nEstimated time: 29:18 \nApp will be frozen entire time, do not worry and look if .pkg file started appearing in /data/pkg directory via FTP \nAllow up to 3x of that estimated time \n\nPress any button on controller to START merging parts \n\nFiles successfully merged into /data/EP9000-CUSA<...>.pkg \nNow you can install it via goldhen installer! \nNow you can also delete .pkgpart files from /data/pkg_merger",
			},
		],
		links: [
			{
				url: `${getMainDomainProtocol()}://git.${getMainDomain()}/hloth/ps4-app-merge-pkgs`,
				label: "Open PS4 merger source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		PlayStation 4 uses .pkg files to package and distribute games and apps.
		These files are essentially a single archive containing everything needed to
		install and run the software.
	</p>
	<h2>The problem</h2>
	<p>
		Some of these files can be very large, making them difficult to download and
		transfer. I only had 32 GB flash drive and too slow cheap WI-FI router for
		remote game transferring
	</p>
	<h2>The solution</h2>
	<p>
		I made a PlayStation 4 app to merge pkgs on the console itself. It allows
		you to split large .pkg file into smaller parts, transfer them to the
		console using flash drive and then merge them together. The app was made
		with the free and open source OpenOrbis Toolchain SDK in C++ and anyone is
		free to use it.
	</p>
{/snippet}
