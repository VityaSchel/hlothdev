<script lang="ts">
	import { page } from "$app/state";

	const defaultDescription =
		"Hi, I’m Viktor Shchelochkov — full-stack UI developer and open-source enthusiast. I build applications and websites in Svelte, React, Next.js, and Swift.";

	let {
		name,
		description = defaultDescription,
	}: {
		name?: string;
		description?: string;
	} = $props();

	let title = $derived(
		name ? `${name} – @hloth` : `Viktor Shchelochkov / @hloth`,
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://hloth.dev{page.url.pathname}" />
</svelte:head>
