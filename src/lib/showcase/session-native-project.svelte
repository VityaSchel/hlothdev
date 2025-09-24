<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const sessionNativeProject: ShowcaseItem = {
		type: "project",
		id: "session-native",
		name: "Session Native",
		description,
		shortDescription: "Unofficial native macOS client for Session messenger",
		banner: await getShowcasePicture("session-native", "banner"),
		images: [
			{
				...(await getShowcasePicture("session-native", "screenshot")),
				alt: "Session Native screenshot with a bunch of chats, archive tab, a conversation with media files attached",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/session-native",
				label: "Open Session Native source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		I'm a big hater of Electron and everything that runs web inside of native
		containers (except web browsers).
	</p>
	<h2>The problem</h2>
	<p>
		The official Session Desktop app is an Electron app. Each update is about
		200 MB, it uses a lot of RAM, it starts up very slow, poorly integrates with
		native features and just bad. Yuck.
	</p>
	<h2>The solution</h2>
	<p>
		I made a native Session client using SwiftUI and CoreData for macOS. It's
		more of a prototype but it works. The app size is about 2 MB but since I
		used JavaScript backend it added about 50 MB of Bun executable to the final
		app size. It was archived before I published it to App Store. The code is
		100% open source and free to use.
	</p>
{/snippet}
