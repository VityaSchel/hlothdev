<script lang="ts">
	import type {
		ClassValue,
		HTMLAnchorAttributes,
		HTMLAttributes,
		HTMLButtonAttributes,
	} from "svelte/elements";

	let {
		element = "button",
		children,
		containerClass,
		variant = "xl",
		class: className,
		...props
	}: {
		variant?: "xl" | "md";
		containerClass?: ClassValue;
		children: import("svelte").Snippet;
	} & (
		| ({ element: "a" } & HTMLAnchorAttributes)
		| ({ element?: "button" } & HTMLButtonAttributes)
		| ({ element: "span" } & HTMLAttributes<HTMLSpanElement>)
	) = $props();
</script>

<div
	class={[
		"@container-size w-full",
		variant === "xl" ? "h-15" : "h-7",
		containerClass,
	]}
>
	<svelte:element
		this={element}
		class={[
			`flex size-full cursor-default items-center justify-center bg-white
			font-bold text-black select-none active:bg-neutral-100/80
			forced-colors:border`,
			variant === "xl"
				? "gap-[40cqh] rounded-full text-[31.6cqh] tracking-[-0.2px]"
				: "small-caps rounded-[28cqh] text-[42.8cqh] tracking-[-0.5px]",
			className,
		]}
		{...props}
	>
		{@render children()}
	</svelte:element>
</div>
