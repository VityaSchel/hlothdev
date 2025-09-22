<script
	lang="ts"
	generics="T extends keyof import('svelte/elements').SvelteHTMLElements"
>
	import { squircle } from "$lib/squircle";

	let {
		tag = "div" as T,
		class: className,
		children,
		bg,
		viewId,
		cornerRadius = 0.1375,
		...props
	}: {
		tag?: T;
		children?: import("svelte").Snippet;
		bg?: string;
		viewId?: string;
		cornerRadius?: number;
	} & import("svelte/elements").SvelteHTMLElements[T] = $props();
</script>

<svelte:element
	this={tag}
	{...props}
	class={["bg col-span-3 row-span-3 bg-neutral-200", className]}
	style:border-radius={cornerRadius < 1
		? cornerRadius * 100 + "%"
		: cornerRadius + "px"}
	style:--bg={bg}
	style:view-transition-name={viewId}
	{@attach squircle({ cornerRadius, cornerSmoothing: 0.6 })}
>
	{@render children?.()}
</svelte:element>

<style>
	.bg {
		background-image: var(--bg);
	}
</style>
