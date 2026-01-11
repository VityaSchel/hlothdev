<script lang="ts">
	import { page } from "$app/state";

	const defaultDescription =
		"Hi, I’m Viktor Shchelochkov — Full Stack Web Developer and open-source enthusiast. I build applications and websites in Svelte, React, Next.js, and Swift.";

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
	<meta property="og:type" content="profile" />
	<meta property="profile:first_name" content="Viktor" />
	<meta property="profile:last_name" content="Shchelochkov" />
	<meta property="profile:username" content="hloth" />
	<meta property="profile:gender" content="male" />
	<meta property="og:url" content="{page.url.origin}{page.url.pathname}" />
</svelte:head>
