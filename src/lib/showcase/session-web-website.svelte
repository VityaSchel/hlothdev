<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
	import bannerSrc from "$showcase/session-web/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/session-web/banner.webp?lqip";
	import screenshotSrc from "$showcase/session-web/screenshot.webp?enhanced&quality=100";
	import screenshotLqip from "$showcase/session-web/screenshot.webp?lqip";

	export const sessionWebWebsite: ShowcaseItem = {
		type: "website",
		id: "session-web",
		name: "Session Web",
		description,
		shortDescription:
			"An experimental project running Session messenger in a web browser online",
		banner: { src: bannerSrc, lqip: bannerLqip },
		images: [
			{
				src: screenshotSrc,
				lqip: screenshotLqip,
				alt: "Session Web website screenshot with a conversation open.",
			},
		],
		links: [
			{
				url: `${getMainDomainProtocol()}://git.${getMainDomain()}/hloth/session-web`,
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
