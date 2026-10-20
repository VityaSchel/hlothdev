<script lang="ts" module>
	type Size = "xs" | "sm" | "md" | "lg" | "xl";

	const sizes = {
		xs: {
			class: "col-span-1 row-span-1 rounded-[11.76%]",
			cornerRadius: 0.1176470588,
			cornerSmoothing: 1,
			inlineRadius: false,
		},
		sm: {
			class: "col-span-2 row-span-1 text-white",
			cornerRadius: 0.125984252,
			cornerSmoothing: 0.6,
			inlineRadius: false,
		},
		md: {
			class: "col-span-3 row-span-1 font-semibold text-white",
			cornerRadius: 0.0822622108,
			cornerSmoothing: 0.6,
			inlineRadius: false,
		},
		lg: {
			class: "col-span-2 row-span-2 text-black",
			cornerRadius: 0.05118110236,
			cornerSmoothing: 0.6,
			inlineRadius: true,
		},
		xl: {
			class: "col-span-3 row-span-3 bg-neutral-200",
			cornerRadius: 0.1375,
			cornerSmoothing: 0.6,
			inlineRadius: true,
		},
	} as const satisfies Record<
		Size,
		{
			class: string;
			cornerRadius: number;
			cornerSmoothing: number;
			inlineRadius: boolean;
		}
	>;
</script>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { squircle } from "#lib/squircle.ts";
	import { morphName } from "#lib/view-transition.svelte.ts";

	let {
		size,
		bg,
		viewId,
		cornerRadius: cornerRadiusOverride,
		class: className,
		children,
		...props
	}: HTMLAttributes<HTMLDivElement> & {
		size: Size;
		bg?: string;
		viewId?: string;
		cornerRadius?: number;
	} = $props();

	const preset = $derived(sizes[size]);
	const cornerRadius = $derived(cornerRadiusOverride ?? preset.cornerRadius);
	const borderRadius = $derived.by(() => {
		if (!preset.inlineRadius) return undefined;
		return cornerRadius < 1 ? `${cornerRadius * 100}%` : `${cornerRadius}px`;
	});
</script>

<div
	{...props}
	class={[
		preset.class,
		`forced-colors:outline forced-colors:-outline-offset-1
		forced-colors:outline-[CanvasText]
		forced-colors:[&[style*='--squircle-radius']]:rounded-(--squircle-radius)!`,
		className,
		{ bg },
	]}
	style:border-radius={borderRadius}
	style:--bg={bg}
	style:--morph-name={viewId}
	style:view-transition-name={viewId && morphName(viewId)}
	{@attach squircle({ cornerRadius, cornerSmoothing: preset.cornerSmoothing })}
>
	{@render children?.()}
</div>

<style>
	.bg {
		background-image: var(--bg);
	}
</style>
