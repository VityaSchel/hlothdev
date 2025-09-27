<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import { getShowcasePicture } from "$lib/showcase/picture";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";

	export const sessionWebWebsite: ShowcaseItem = {
		type: "website",
		id: "session-web",
		name: "Session Web",
		description,
		shortDescription:
			"An experimental project running Session messenger in a web browser online",
		banner: await getShowcasePicture("session-web", "banner"),
		images: [
			{
				...(await getShowcasePicture("session-web", "screenshot")),
				alt: "Session Web website screenshot with a conversation open with title: hloth. Today. — Hi there! — Hello, hloth! — Cloudflare Pages is a free, fast, and reliable static hosting provider provided by Cloudflare. It streamlines deploying and hosting static websites by connecting directly to your GitHub repository. As a result, you can deploy your static site on Cloudflare Pages using a few clicks and it will be up and running in minutes. — What's Vite? — Vite (French: [vit], like \"veet\") is a local development server written by Evan You, [1] the creator of Vue.js, and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It uses Rollup and esbuild internally for bundling.[2] It monitors files as they're being edited and upon file save the web browser reloads the code being edited through a process called Hot Module Replacement (HMR)[3] which works by just reloading the specific file being changed using ES6 modules (ESM) instead of recompiling the entire application. Vite provides built-in support for server-side rendering (SSR). By default, it listens on TCP port 5173. It is possible to configure Vite to serve content over HTTPS and proxy requests (including WebSocket) to a back-end web server (such as Apache HTTP Server or lighttpd).",
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
