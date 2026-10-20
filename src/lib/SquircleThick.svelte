<script lang="ts">
	import { browser } from "$app/env";
	import { browserSupportsSVG, getSquirclePath } from "#lib/utils.ts";

	let {
		class: className,
		children,
		cornerRadius = 30,
		cornerSmoothing = 1,
		translucent,
	}: {
		class?: import("svelte/elements").ClassValue;
		children: import("svelte").Snippet;
		cornerRadius?: number;
		cornerSmoothing?: number;
		translucent?: boolean;
	} = $props();

	const uid = $props.id();
	let width = $state(0);
	let height = $state(0);
	const squircle = $derived(
		width && height
			? getSquirclePath({
					width,
					height,
					cornerRadius,
					cornerSmoothing,
				})
			: null,
	);
</script>

<div
	class="squircle-container relative size-full"
	bind:offsetWidth={width}
	bind:offsetHeight={height}
	style:border-radius="{cornerRadius}px"
>
	<div
		class={[
			"absolute top-0 left-0 z-0 size-full",
			className,
			{
				"backdrop-blur-[80px] transparency-reduce:backdrop-blur-none":
					translucent,
				"squircle-card": !browser || !browserSupportsSVG(),
			},
		]}
		style:clip-path={squircle && `path('${squircle}')`}
		style:border-radius="{cornerRadius}px"
		aria-hidden="true"
	></div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		style="overflow: visible;"
		class="pointer-events-none absolute top-0 left-0 z-100 size-full"
		aria-hidden="true"
	>
		<defs>
			<filter id="shadow-{uid}">
				<feGaussianBlur stdDeviation="0.5" />
				<feComposite operator="out" in2="SourceGraphic" />
			</filter>
		</defs>
		<path
			d={squircle}
			fill="black"
			filter="url(#shadow-{uid})"
			class="forced-colors:fill-none forced-colors:stroke-[CanvasText]
				forced-colors:filter-none"
		/>
	</svg>
	<div
		class="relative top-0 left-0 z-2 size-full"
		style:border-radius="{cornerRadius}px"
	>
		{@render children()}
	</div>
</div>

<style>
	.squircle-container {
		box-shadow: 0 38px 90px 0px rgba(0, 0, 0, 0.25);
	}
	.squircle-card {
		box-shadow: 0 0 0.5px 0px rgba(0, 0, 0, 0.75);
	}
</style>
