<script
	lang="ts"
	generics="T extends keyof import('svelte/elements').SvelteHTMLElements"
>
	import { squircle } from "$lib/squircle";

	let {
		tag = "div" as T,
		class: className,
		children,
		...props
	}: {
		tag?: T;
		class?: import("svelte/elements").SvelteHTMLElements["div"]["class"];
		children?: import("svelte").Snippet;
	} & import("svelte/elements").SvelteHTMLElements[T] = $props();
</script>

<svelte:element
	this={tag}
	class={["bg col-span-2 row-span-1 text-white", className]}
	{@attach squircle({ cornerRadius: 0.125984252, cornerSmoothing: 0.6 })}
	{...props}
>
	{@render children?.()}
</svelte:element>

<style>
	.bg {
		background-image: var(--bg);
	}
</style>
