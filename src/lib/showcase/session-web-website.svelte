<script lang="ts" module>
	import type { ShowcaseItem } from "#lib/showcase/items.ts";
	import { showcaseImages } from "#lib/showcase/images.ts";
	import { subdomainUrl } from "#lib/utils.ts";

	const { image } = showcaseImages("session-web");

	export const sessionWebWebsite: ShowcaseItem = {
		id: "session-web",
		description,
		shortDescription:
			"An experimental project running Session messenger in a web browser online",
		images: [
			{
				...image("screenshot"),
				alt: "Session Web website screenshot with a conversation open.",
			},
		],
		links: () => [
			{
				url: subdomainUrl("git", "/hloth/session-web"),
				label: "Open Session Web source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Experimental project running Session messenger in browser. Works in Tor! 99%
		client-side (still requires proxy to swarms though). All encryption and
		private keys never leave browser. This is rather a technical challenge for
		me, rather than a stable client.
	</p>
	<h2>How it works?</h2>
	<p>
		All your confidential data (private keys, decrypted messages etc) never left
		your device. We need a proxy server though for 2 reasons:
		<br />
		1. Every node has its own self-signed SSL certificate and browsers reject connection
		to these, unless they are added to system level
		<br />
		2. Nodes do not send CORS headers, which prevent reading responses
		<br />
		Proxy server is only used to route your encrypted JSON_RPC requests to chosen
		node.
	</p>
{/snippet}
