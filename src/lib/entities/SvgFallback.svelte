<script lang="ts">
	let {
		url,
		width,
		height,
		mono,
		fallback = "overlay",
		children,
	}: {
		url: string;
		width: number;
		height: number;
		mono?: boolean;
		fallback: "overlay" | "squeeze";
		children: import("svelte").Snippet;
	} = $props();
</script>

<div
	style="width: {width}px; height: {height}px; {mono
		? `--svg-mask: url('${url}');`
		: ''}"
	class={[
		"relative max-h-full",
		{
			"svg-fallback-squeeze flex overflow-clip": fallback === "squeeze",
			"svg-fallback-overlay": fallback === "overlay",
		},
	]}
>
	{@render children()}
	{#if mono}
		<div
			class={[
				"mono top-0 left-0 h-full w-full",
				{
					absolute: fallback === "overlay",
				},
			]}
		></div>
	{:else}
		<img
			src={url}
			alt=""
			class={[
				`top-0 left-0 z-[-1] h-full w-full object-contain object-center
	p-[0.5%] select-none`,
				{
					absolute: fallback === "overlay",
				},
			]}
			draggable="false"
		/>
	{/if}
</div>

<style>
	.svg-fallback-overlay :global(svg) {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
	}
	.svg-fallback-squeeze :global(svg) {
		flex-shrink: 0;
	}
	.mono {
		mask: var(--svg-mask) no-repeat center / contain;
		background-color: var(--svg-mask-color);
	}
</style>
