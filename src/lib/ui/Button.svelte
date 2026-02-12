<script lang="ts" generics="T extends 'a' | 'button' | 'span'">
	let {
		element = "button" as T,
		children,
		containerClass,
		variant = "xl",
		class: className,
		...props
	}: {
		element?: T;
		variant?: "xl" | "md";
		containerClass?: import("svelte/elements").ClassValue;
		children: import("svelte").Snippet;
	} & import("svelte/elements").SvelteHTMLElements[T] = $props();
</script>

<div
	class={[
		"@container-[size] w-full",
		{
			"h-15": variant === "xl",
			"h-7": variant === "md",
		},
		containerClass,
	]}
>
	<svelte:element
		this={element}
		class={[
			`flex size-full cursor-default items-center justify-center bg-white
			select-none active:bg-neutral-100/80`,
			{
				"gap-[40cqh] rounded-full text-[31.6cqh] font-bold tracking-[-0.2px]":
					variant === "xl",
				"small-caps rounded-[28cqh] text-[42.8cqh] font-bold tracking-[-0.5px]":
					variant === "md",
			},
			" text-black select-none",
			{
				"rounded-full": variant === "xl",
			},
			className,
		]}
		{...props}
	>
		{@render children()}
	</svelte:element>
</div>
