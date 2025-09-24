<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const byomProject: ShowcaseItem = {
		type: "project",
		id: "byom",
		name: "byom",
		description,
		shortDescription:
			"Build Your Own post-quantum self-hosted end-to-end encrypted Messenger",
		banner: await getShowcasePicture("byom", "banner"),
		images: [
			{
				...(await getShowcasePicture("byom", "screenshot")),
				alt: "An example code demonstrating how byom library can be used for secure quantim-resistant communication",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/byom",
				label: "Open byom source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		A set of pure and determenistic JavaScript modules that anyone can use to
		create an end-to-end encrypted messenger.
	</p>
	<h2>The problem</h2>
	<p>
		Once again disappointed in Session Messenger after their authors poorly
		launched a second failed cryptocoin, complicating stuff, ruining everything,
		I've decided to build my own e2ee thing.
	</p>
	<h2>The solution</h2>
	<p>
		To start with something simple, I wanted to create a cryptographically
		secure backend that developers can use to build their own messengers. My
		library contains basic logic that every messenger such as Session, Signal,
		Matrix, Simplex has under the hood. UI, UX, networking, file I/O, frontend,
		backend, auth flow, data flow, features, attachments is entirely up to the
		library user.
	</p>
	<h2>Quantum-resistance</h2>
	<p>
		I also wanted to build a future-proof library. As we're approaching 2030
		quantum computers transition from fantasy to reality. Assymmetric
		cryptography is dying. It wasn't good anyway, since it relies on a single
		public key instead of creating a separate one for each recipient (what's
		called PFS).
	</p>
{/snippet}
