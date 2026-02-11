<script lang="ts">
	let {
		children,
		fallback,
		fallbackClass,
		lg,
	}: {
		children: import("svelte").Snippet;
		fallback?: string;
		fallbackClass?: import("svelte/elements").ClassValue;
		lg?: boolean;
	} = $props();
</script>

<div
	class={[
		`center @container relative flex size-8 items-center justify-center
		overflow-clip rounded-full bg-[#3B82F7] px470:size-12 md:size-10`,
		{
			"xl:size-14": lg,
		},
	]}
	aria-hidden="true"
>
	<span
		class={[
			`absolute top-1/2 left-1/2 -translate-1/2 text-[4cqi] font-medium
			text-white/85`,
			fallbackClass,
		]}
	>
		{fallback}
	</span>
	{@render children?.()}
</div>
