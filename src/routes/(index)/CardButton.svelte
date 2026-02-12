<script lang="ts">
	let {
		children,
		class: className,
	}: {
		children: import("svelte").Snippet;
		class?: import("svelte/elements").ClassValue;
	} = $props();
</script>

<div
	class={[
		`@container-[size] flex h-full items-center gap-5 rounded-2xl p-3
		select-none px470:p-4 md:justify-center`,
		className,
	]}
>
	{@render children()}
</div>
