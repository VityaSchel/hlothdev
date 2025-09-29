<script lang="ts">
	import { browser } from "$app/environment";
	import { browserSupportsSVG, getSquirclePath } from "$lib/utils";

	let {
		class: classes,
		children,
		cornerRadius = 30,
		cornerSmoothing = 1,
		translucent,
	}: {
		class?: import("svelte/elements").SvelteHTMLElements["div"]["class"];
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
	class="squircle-container relative h-full w-full"
	bind:offsetWidth={width}
	bind:offsetHeight={height}
	style="border-radius: {cornerRadius}px;"
>
	<div
		class={[
			"absolute top-0 left-0 z-[0] h-full w-full",
			classes,
			{
				"backdrop-blur-[80px] transparency-reduce:backdrop-blur-none":
					translucent,
				"squircle-card": !browser || !browserSupportsSVG(),
			},
		]}
		style={(squircle === null ? "" : `clip-path: path('${squircle}');`) +
			`border-radius: ${cornerRadius}px;`}
		aria-hidden="true"
	></div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		style="overflow: visible;"
		class="pointer-events-none absolute top-0 left-0 z-[100] h-full w-full"
		aria-hidden="true"
	>
		<defs>
			<clipPath id="clip-{uid}">
				<path d={squircle} />
			</clipPath>
			<filter id="shadow-{uid}">
				<feGaussianBlur stdDeviation="0.5" />
				<feComposite operator="out" in2="SourceGraphic" />
			</filter>
		</defs>
		<path d={squircle} fill="black" filter="url(#shadow-{uid})" />
	</svg>
	<div
		class={["relative top-0 left-0 z-[2] h-full w-full"]}
		style="border-radius: {cornerRadius}px;"
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
	.squircle-container:hover > .squircle-content-maskable {
		mask-image: linear-gradient(
			to right,
			black 0%,
			black calc(100% - (64px + 10px)),
			transparent calc(100% - (64px - 10px))
		);
	}
	.squircle-container:not(:hover) > .squircle-arrow {
		opacity: 0;
	}
	.squircle-container:hover > .squircle-arrow {
		opacity: 100;
	}
</style>
